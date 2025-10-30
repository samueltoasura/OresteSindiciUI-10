import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookOpen, Calendar, Award, Users, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SistemaEvaluacionDigital from "@/components/SistemaEvaluacionDigital";

export default function PlanDeEstudio() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="h-48 bg-black/90 flex items-center justify-center">
        <div className="text-center">
          <BookOpen className="w-16 h-16 text-white mx-auto mb-4" data-testid="icon-plan-estudio" />
          <h1 className="text-4xl font-bold text-white" data-testid="heading-plan-estudio">Plan de Estudio</h1>
        </div>
      </div>

      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4" data-testid="heading-programa-academico">Programa Académico</h2>
            <p className="text-lg text-muted-foreground" data-testid="text-programa-description">
              Nuestro plan de estudios está diseñado para proporcionar una educación integral y de calidad, 
              preparando a nuestros estudiantes para los desafíos del futuro.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="hover-elevate" data-testid="card-planes-estudio">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-chart-1 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-white" data-testid="icon-calendar" />
                </div>
                <CardTitle data-testid="heading-planes-estudio">Planes de Estudio</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground" data-testid="text-planes-estudio">
                  Grados 1° a 5°. Enfoque en fundamentos académicos, desarrollo de habilidades básicas 
                  y formación en valores.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-sistema-evaluacion">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-chart-2 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" data-testid="icon-award" />
                </div>
                <CardTitle data-testid="heading-sistema-evaluacion">Sistema de Evaluación</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground" data-testid="text-sistema-evaluacion">
                  Grados 6° a 11°. Profundización académica, desarrollo de competencias y preparación 
                  para educación superior.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-12" data-testid="card-areas-conocimiento">
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

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3" data-testid="heading-siee-card">
                <FileText className="w-6 h-6" data-testid="icon-siee" />
                Sistema Institucional de Evaluación
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6" data-testid="text-siee-description">
                Consulta el Sistema Institucional de Evaluación y Promoción de los Estudiantes de nuestra institución en formato digital interactivo.
              </p>
              <SistemaEvaluacionDigital />
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
