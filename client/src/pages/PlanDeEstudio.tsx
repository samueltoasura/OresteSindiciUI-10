import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookOpen, Calendar, Award, Users, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import pdfFile from "@assets/SIE 2024 ÚLTIMA MODIFICACIÓN 18-01-2024.docx_1761863918398.pdf";

export default function PlanDeEstudio() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="h-48 bg-black/90 flex items-center justify-center">
        <div className="text-center">
          <BookOpen className="w-16 h-16 text-white mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-white">Plan de Estudio</h1>
        </div>
      </div>

      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Programa Académico</h2>
            <p className="text-lg text-muted-foreground">
              Nuestro plan de estudios está diseñado para proporcionar una educación integral y de calidad, 
              preparando a nuestros estudiantes para los desafíos del futuro.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="hover-elevate">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-chart-1 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Planes de Estudio</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Grados 1° a 5°. Enfoque en fundamentos académicos, desarrollo de habilidades básicas 
                  y formación en valores.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-chart-2 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Sistema de Evaluación</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Grados 6° a 11°. Profundización académica, desarrollo de competencias y preparación 
                  para educación superior.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Users className="w-6 h-6" />
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

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <FileText className="w-6 h-6" />
                Sistema Institucional de Evaluación
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Consulta el Sistema Institucional de Evaluación y Promoción de los Estudiantes de nuestra institución.
              </p>
              <div className="relative w-full bg-muted rounded-md overflow-hidden shadow-2xl" style={{ height: '800px' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-card/50 to-background/50 pointer-events-none z-10" />
                <iframe
                  src={pdfFile}
                  className="w-full h-full border-0"
                  title="Sistema Institucional de Evaluación"
                  data-testid="pdf-viewer-siee"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
