import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProyectoInstitucional() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="h-48 bg-black/90 flex items-center justify-center">
        <div className="text-center">
          <FileText className="w-16 h-16 text-white mx-auto mb-4" data-testid="icon-proyecto-institucional-hero" />
          <h1 className="text-4xl font-bold text-white" data-testid="heading-proyecto-institucional-hero">Proyecto Institucional</h1>
        </div>
      </div>

      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4" data-testid="heading-descripcion-proyecto">Descripción del Proyecto</h2>
            <p className="text-lg text-muted-foreground" data-testid="text-descripcion-proyecto">
              Nuestro proyecto institucional define la visión, misión y objetivos estratégicos que guían 
              el desarrollo de nuestra comunidad educativa.
            </p>
          </div>

          <div className="grid gap-6">
            <Card data-testid="card-vision">
              <CardHeader>
                <CardTitle data-testid="heading-vision">Visión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground" data-testid="text-vision">
                  Ser reconocidos como una institución educativa líder en la formación integral de estudiantes, 
                  comprometidos con la excelencia académica y el desarrollo de valores humanos.
                </p>
              </CardContent>
            </Card>

            <Card data-testid="card-mision">
              <CardHeader>
                <CardTitle data-testid="heading-mision">Misión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground" data-testid="text-mision">
                  Proporcionar una educación de calidad que fomente el pensamiento crítico, la creatividad 
                  y el compromiso social en nuestros estudiantes.
                </p>
              </CardContent>
            </Card>

            <Card data-testid="card-objetivos">
              <CardHeader>
                <CardTitle data-testid="heading-objetivos">Objetivos Estratégicos</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-2" data-testid="objetivo-1">
                    <span className="font-semibold text-foreground">•</span>
                    <span>Garantizar la calidad educativa en todos los niveles de formación</span>
                  </li>
                  <li className="flex gap-2" data-testid="objetivo-2">
                    <span className="font-semibold text-foreground">•</span>
                    <span>Fortalecer la formación en valores y competencias ciudadanas</span>
                  </li>
                  <li className="flex gap-2" data-testid="objetivo-3">
                    <span className="font-semibold text-foreground">•</span>
                    <span>Promover la innovación pedagógica y el uso de tecnologías educativas</span>
                  </li>
                  <li className="flex gap-2" data-testid="objetivo-4">
                    <span className="font-semibold text-foreground">•</span>
                    <span>Fomentar la participación activa de la comunidad educativa</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
