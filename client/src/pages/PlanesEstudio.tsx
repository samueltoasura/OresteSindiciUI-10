import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookOpen, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PlanesEstudio() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="h-48 bg-black/90 flex items-center justify-center">
        <div className="text-center">
          <BookOpen className="w-16 h-16 text-white mx-auto mb-4" data-testid="icon-planes-estudio-hero" />
          <h1 className="text-4xl font-bold text-white" data-testid="heading-planes-estudio-hero">Planes de Estudio</h1>
        </div>
      </div>

      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4" data-testid="heading-descripcion-planes">Descripción del Programa</h2>
            <p className="text-lg text-muted-foreground" data-testid="text-descripcion-planes">
              Grados 1° a 5°. Enfoque en fundamentos académicos, desarrollo de habilidades básicas 
              y formación en valores.
            </p>
          </div>

          <Card data-testid="card-areas-conocimiento">
            <CardHeader>
              <CardTitle className="flex items-center gap-3" data-testid="heading-areas-conocimiento">
                <Users className="w-6 h-6" data-testid="icon-users" />
                Áreas de Conocimiento
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "Matemáticas",
                  "Ciencias Naturales",
                  "Ciencias Sociales",
                  "Lengua Castellana",
                  "Inglés",
                  "Educación Física",
                  "Artes",
                  "Tecnología e Informática",
                  "Ética y Valores"
                ].map((area) => (
                  <div 
                    key={area} 
                    className="p-4 rounded-md bg-muted hover-elevate active-elevate-2"
                    data-testid={`area-${area.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <p className="font-medium text-foreground">{area}</p>
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
