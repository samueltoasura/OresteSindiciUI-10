import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText } from "lucide-react";
import ProyectoEducativoInstitucional from "@/components/ProyectoEducativoInstitucional";

export default function ProyectoInstitucional() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="h-48 bg-black/90 flex items-center justify-center">
        <div className="text-center">
          <FileText className="w-16 h-16 text-white mx-auto mb-4" data-testid="icon-proyecto-institucional-hero" />
          <h1 className="text-4xl font-bold text-white" data-testid="heading-proyecto-institucional-hero">Proyecto Educativo Institucional</h1>
        </div>
      </div>

      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4" data-testid="heading-descripcion-proyecto">PEI 2024 - 2028</h2>
            <p className="text-lg text-muted-foreground" data-testid="text-descripcion-proyecto">
              Consulta el Proyecto Educativo Institucional que define la visión, misión, filosofía y objetivos estratégicos que guían el desarrollo de nuestra comunidad educativa.
            </p>
          </div>

          <ProyectoEducativoInstitucional />
        </div>
      </main>

      <Footer />
    </div>
  );
}
