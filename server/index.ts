import express, { Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import path from "path";

const app = express();

// ---------------------------------------------------------------------
// Middleware para capturar el body sin procesar (útil para webhooks u otros usos)
declare module "http" {
  interface IncomingMessage {
    rawBody?: Buffer;
  }
}

app.use(
  express.json({
    verify: (req, _res, buf) => {
      req.rawBody = buf;
    },
  })
);

app.use(express.urlencoded({ extended: false }));

// ---------------------------------------------------------------------
// Middleware de logging básico de API
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 120) {
        logLine = logLine.slice(0, 119) + "…";
      }
      log(logLine);
    }
  });

  next();
});

// ---------------------------------------------------------------------
// Inicialización del servidor
(async () => {
  const server = await registerRoutes(app);

  // Manejo global de errores
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || 500;
    const message = err.message || "Internal Server Error";
    console.error("Server error:", err);
    res.status(status).json({ message });
  });

  // -----------------------------------------------------------------
  // Configuración según el entorno
  if (app.get("env") === "development") {
    // Modo desarrollo: usa Vite para recarga en caliente
    await setupVite(app, server);
  } else {
    // Modo producción: sirve los archivos estáticos generados
    serveStatic(app);

    // Servir el index.html del frontend para cualquier ruta no-API
    app.get("*", (_req, res) => {
      res.sendFile(path.resolve("dist/index.html"));
    });
  }

  // -----------------------------------------------------------------
  // Escuchar en el puerto configurado (importante para Vercel)
  const port = parseInt(process.env.PORT || "5000", 10);
  server.listen(
    {
      port,
      host: "0.0.0.0",
      reusePort: true,
    },
    () => {
      log(`🚀 Servidor ejecutándose en http://localhost:${port}`);
    }
  );
})();
