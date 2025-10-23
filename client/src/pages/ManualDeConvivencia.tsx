import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, Heart, Shield, Scale } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ManualDeConvivencia() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="h-48 bg-destructive flex items-center justify-center">
        <div className="text-center">
          <FileText className="w-16 h-16 text-white mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-white">Manual de Convivencia</h1>
        </div>
      </div>

      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Normas y Principios Institucionales</h2>
            <p className="text-lg text-muted-foreground">
              El manual de convivencia establece las normas, derechos y deberes de todos los miembros 
              de nuestra comunidad educativa.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="hover-elevate">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-destructive flex items-center justify-center mb-3">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Respeto</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Promovemos un ambiente de respeto mutuo entre todos los miembros de la comunidad educativa.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-destructive flex items-center justify-center mb-3">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Responsabilidad</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Fomentamos la responsabilidad personal y el compromiso con el aprendizaje y la convivencia.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-destructive flex items-center justify-center mb-3">
                  <Scale className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Justicia</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Garantizamos procesos justos y equitativos en la resolución de conflictos y situaciones disciplinarias.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Capítulos del Manual</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  "Derechos y Deberes de los Estudiantes",
                  "Derechos y Deberes de los Padres de Familia",
                  "Derechos y Deberes de los Docentes",
                  "Normas de Convivencia",
                  "Procedimientos Disciplinarios",
                  "Sistema de Evaluación",
                  "Servicios y Bienestar Estudiantil",
                  "Gobierno Escolar"
                ].map((capitulo, index) => (
                  <div 
                    key={index}
                    className="p-4 rounded-md border hover-elevate active-elevate-2"
                    data-testid={`capitulo-${index}`}
                  >
                    <p className="font-medium text-foreground">{capitulo}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
