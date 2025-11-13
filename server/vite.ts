import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer, createLogger } from "vite";
import { type Server } from "http";
import viteConfig from "../vite.config";
import { nanoid } from "nanoid";

// Soporte para __dirname en módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const viteLogger = createLogger();

// Logger personalizado
export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

// Configuración para modo desarrollo (Vite middleware)
export async function setupVite(app: Express, server: Server) {
  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    server: {
      middlewareMode: true,
      hmr: { server },
      allowedHosts: true,
    },
    appType: "custom",
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      },
    },
  });

  app.use(vite.middlewares);

  // Manejo de rutas: siempre recarga el HTML en desarrollo
  app.use("*", async (req, res, next) => {
    try {
      const url = req.originalUrl;

      const clientTemplate = path.resolve(__dirname, "../client/index.html");
      let template = await fs.promises.readFile(clientTemplate, "utf-8");

      // Forzar refresco cache con ID dinámico
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );

      const page = await vite.transformIndexHtml(url, template);

      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });

  log("⚡ Vite configurado en modo desarrollo");
}

// Configuración para producción (sirve archivos estáticos)
export function serveStatic(app: Express) {
  // El directorio de salida se define desde vite.config.js → build.outDir
  const distPath = path.resolve(__dirname, "../dist/public");

  if (!fs.existsSync(distPath)) {
    throw new Error(
      `❌ No se encontró la carpeta de build: ${distPath}. Ejecuta "npm run build" antes de desplegar.`
    );
  }

  app.use(express.static(distPath));

  // Cualquier ruta no encontrada redirige a index.html (SPA)
  app.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });

  log("📦 Servidor estático listo (modo producción)");
}
