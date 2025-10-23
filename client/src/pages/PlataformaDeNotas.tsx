import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GraduationCap, BarChart3, FileBarChart, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function PlataformaDeNotas() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log('Login attempt:', { username, password });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="h-48 bg-chart-3 flex items-center justify-center">
        <div className="text-center">
          <GraduationCap className="w-16 h-16 text-white mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-white">Plataforma de Notas</h1>
        </div>
      </div>

      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Sistema de Gestión Académica</h2>
            <p className="text-lg text-muted-foreground">
              Accede a las calificaciones, asistencia y reportes académicos de forma segura y en tiempo real.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Acceso Estudiantes y Padres</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Usuario
                    </label>
                    <Input 
                      placeholder="Ingrese su usuario"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      data-testid="input-username"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Contraseña
                    </label>
                    <Input 
                      type="password"
                      placeholder="Ingrese su contraseña"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      data-testid="input-password"
                    />
                  </div>
                  <Button 
                    className="w-full"
                    onClick={handleLogin}
                    data-testid="button-login"
                  >
                    Iniciar Sesión
                  </Button>
                  <p className="text-sm text-muted-foreground text-center">
                    ¿Olvidaste tu contraseña?{" "}
                    <a href="#" className="text-chart-3 hover:underline">
                      Recuperar
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="hover-elevate">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-chart-3 flex items-center justify-center">
                      <BarChart3 className="w-5 h-5 text-white" />
                    </div>
                    <CardTitle className="text-lg">Consulta de Notas</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Accede a las calificaciones de cada periodo académico y visualiza el promedio general.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-elevate">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-chart-3 flex items-center justify-center">
                      <FileBarChart className="w-5 h-5 text-white" />
                    </div>
                    <CardTitle className="text-lg">Reportes Académicos</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Descarga boletines de calificaciones y reportes de asistencia en formato PDF.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-elevate">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-chart-3 flex items-center justify-center">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <CardTitle className="text-lg">Seguimiento Académico</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Monitorea el progreso académico y recibe notificaciones sobre el desempeño estudiantil.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
