import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Lightbulb, Leaf, Microscope, Palette, Music } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Proyectos() {
  const proyectos = [
    {
      title: "Huerta Escolar Sostenible",
      icon: Leaf,
      description: "Proyecto de agricultura urbana donde los estudiantes aprenden sobre cultivos orgánicos y sostenibilidad ambiental.",
      categoria: "Medio Ambiente"
    },
    {
      title: "Laboratorio de Innovación",
      icon: Microscope,
      description: "Espacio dedicado a la experimentación científica y el desarrollo de proyectos de investigación estudiantil.",
      categoria: "Ciencia"
    },
    {
      title: "Taller de Artes Plásticas",
      icon: Palette,
      description: "Programa de desarrollo artístico que fomenta la creatividad y expresión mediante diferentes técnicas pictóricas.",
      categoria: "Arte"
    },
    {
      title: "Orquesta Juvenil",
      icon: Music,
      description: "Formación musical colectiva que promueve el talento artístico y el trabajo en equipo a través de la música.",
      categoria: "Música"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="h-48 bg-chart-2 flex items-center justify-center">
        <div className="text-center">
          <Lightbulb className="w-16 h-16 text-white mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-white">Proyectos</h1>
        </div>
      </div>

      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Proyectos Educativos</h2>
            <p className="text-lg text-muted-foreground">
              Desarrollamos iniciativas que complementan la formación académica y potencian 
              las habilidades de nuestros estudiantes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {proyectos.map((proyecto, index) => (
              <Card key={index} className="hover-elevate">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full bg-chart-2 flex items-center justify-center flex-shrink-0">
                      <proyecto.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="inline-block px-3 py-1 rounded-full bg-chart-2/10 text-chart-2 text-xs font-medium mb-2">
                        {proyecto.categoria}
                      </div>
                      <CardTitle>{proyecto.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{proyecto.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-br from-chart-2/10 to-chart-2/5 border-chart-2/20">
            <CardContent className="pt-8 pb-8">
              <div className="text-center max-w-2xl mx-auto">
                <Lightbulb className="w-12 h-12 text-chart-2 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  ¿Tienes una idea para un nuevo proyecto?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Estamos abiertos a nuevas propuestas que enriquezcan la experiencia educativa 
                  de nuestros estudiantes. Comparte tu idea con nosotros.
                </p>
                <button 
                  className="px-6 min-h-9 rounded-md bg-chart-2 text-white font-medium hover-elevate active-elevate-2"
                  onClick={() => console.log('Formulario de propuesta abierto')}
                  data-testid="button-submit-project"
                >
                  Proponer Proyecto
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
