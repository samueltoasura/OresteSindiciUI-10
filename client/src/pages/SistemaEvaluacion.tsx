import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText } from "lucide-react";
import SistemaEvaluacionDigital from "@/components/SistemaEvaluacionDigital";

export default function SistemaEvaluacion() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="h-48 bg-black/90 flex items-center justify-center">
        <div className="text-center">
          <FileText className="w-16 h-16 text-white mx-auto mb-4" data-testid="icon-sistema-evaluacion-hero" />
          <h1 className="text-4xl font-bold text-white" data-testid="heading-sistema-evaluacion-hero">Sistema de Evaluación</h1>
        </div>
      </div>

      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4" data-testid="heading-siee">Sistema Institucional de Evaluación y Promoción</h2>
            <p className="text-lg text-muted-foreground" data-testid="text-siee-description">
              Consulta el Sistema Institucional de Evaluación y Promoción de los Estudiantes de nuestra institución en formato digital interactivo.
            </p>
          </div>

          <SistemaEvaluacionDigital />
        </div>
      </main>

      <Footer />
    </div>
  );
}
