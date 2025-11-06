import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Newspaper, Calendar, Megaphone, FileText, AlertCircle, Trophy, Star, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import type { LucideIcon } from "lucide-react";

interface Comunicado {
  title: string;
  date: string;
  icon: LucideIcon;
  summary: string;
  fullContent: string;
}

interface Noticia {
  title: string;
  date: string;
  icon: LucideIcon;
  summary: string;
  fullContent: string;
}

export default function Noticias() {
  const [selectedNoticia, setSelectedNoticia] = useState<Noticia | null>(null);
  const [selectedComunicado, setSelectedComunicado] = useState<Comunicado | null>(null);

  const comunicados: Comunicado[] = [
    {
      title: "Reunión de Padres de Familia",
      date: "20 de Noviembre, 2025",
      icon: Megaphone,
      summary: "Convocatoria a reunión general del próximo viernes.",
      fullContent: "Se convoca a todos los padres de familia a la reunión general del próximo viernes 22 de noviembre a las 2:00 PM en el auditorio principal. En esta reunión se tratarán los siguientes puntos: 1) Informe académico del tercer periodo, 2) Actividades y cronograma del cuarto periodo, 3) Preparativos para la clausura del año escolar, 4) Presentación del calendario académico 2026. La asistencia es obligatoria. Los padres que no puedan asistir deberán justificar su ausencia por escrito. Agradecemos su puntualidad y compromiso con la educación de sus hijos."
    },
    {
      title: "Actualización del Manual de Convivencia",
      date: "18 de Noviembre, 2025",
      icon: FileText,
      summary: "Nueva versión del manual de convivencia disponible.",
      fullContent: "Se informa a toda la comunidad educativa que el manual de convivencia ha sido actualizado según las nuevas disposiciones del Ministerio de Educación Nacional. Los principales cambios incluyen: actualización de protocolos de convivencia escolar, nuevas normas sobre el uso de dispositivos electrónicos, procedimientos actualizados para la resolución de conflictos, y derechos y deberes de los estudiantes ajustados a la normativa vigente. Pueden consultar la nueva versión en la sección correspondiente de nuestra página web o solicitar una copia física en la secretaría académica. Es importante que todos los miembros de la comunidad educativa se familiaricen con estos cambios."
    },
    {
      title: "Vacaciones de Fin de Año",
      date: "15 de Noviembre, 2025",
      icon: AlertCircle,
      summary: "Información sobre el calendario de fin de año.",
      fullContent: "Las actividades académicas del presente año escolar finalizarán el 15 de diciembre de 2025. La ceremonia de clausura se llevará a cabo el 14 de diciembre a las 9:00 AM en el coliseo de la institución. El retorno a clases será el 15 de enero de 2026, iniciando con la jornada de inducción para estudiantes nuevos y antiguos. Durante el periodo de vacaciones, la secretaría académica atenderá en horario especial de 8:00 AM a 12:00 M, de lunes a viernes. Les deseamos a todos unas felices fiestas y un próspero año nuevo. Esperamos verlos de vuelta con toda la energía para continuar nuestro compromiso con la excelencia educativa."
    }
  ];

  const noticias: Noticia[] = [
    {
      title: "Excelentes Resultados en Pruebas Saber",
      date: "15 de Octubre, 2025",
      icon: Trophy,
      summary: "Nuestros estudiantes obtuvieron sobresalientes resultados en las pruebas Saber.",
      fullContent: "Nuestros estudiantes obtuvieron sobresalientes resultados en las pruebas Saber, ubicándose entre los mejores del departamento. Este logro es el resultado del esfuerzo conjunto de estudiantes, docentes y padres de familia. Los resultados muestran un incremento del 15% en matemáticas y un 12% en lenguaje comparado con el año anterior. Felicitamos a toda la comunidad educativa por este importante logro que nos posiciona como una institución de excelencia académica."
    },
    {
      title: "Feria de Ciencias 2025",
      date: "10 de Octubre, 2025",
      icon: Star,
      summary: "Exitosa participación en la Feria de Ciencias con proyectos innovadores.",
      fullContent: "Exitosa participación en la Feria de Ciencias con proyectos innovadores desarrollados por nuestros estudiantes. Durante el evento, se presentaron más de 30 proyectos en áreas como robótica, energías renovables, biotecnología y ciencias ambientales. Tres de nuestros proyectos fueron premiados a nivel departamental: 'Sistema de riego inteligente', 'Purificador de agua con energía solar' y 'Robot clasificador de residuos'. Agradecemos a los docentes asesores y felicitamos a todos los estudiantes participantes."
    },
    {
      title: "Nueva Aula de Tecnología",
      date: "5 de Octubre, 2025",
      icon: Sparkles,
      summary: "Inauguramos nuestra nueva aula de tecnología equipada con computadores de última generación.",
      fullContent: "Inauguramos nuestra nueva aula de tecnología equipada con computadores de última generación y herramientas digitales. El espacio cuenta con 40 estaciones de trabajo con equipos de alto rendimiento, pizarra digital interactiva, impresora 3D, kit de robótica educativa y conexión de alta velocidad a internet. Esta inversión representa un paso importante en nuestro compromiso con la educación de calidad y la alfabetización digital. El aula estará disponible para todas las áreas académicas y permitirá desarrollar competencias tecnológicas fundamentales para el siglo XXI."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="h-48 bg-chart-1 flex items-center justify-center">
        <div className="text-center">
          <Newspaper className="w-16 h-16 text-white mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-white">Noticias y Comunicados</h1>
        </div>
      </div>

      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Sección de Comunicados */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Comunicados</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Haz click en cada comunicado para ver más detalles.
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {comunicados.map((comunicado, index) => (
                <Card 
                  key={index} 
                  className="hover-elevate cursor-pointer transition-all"
                  onClick={() => setSelectedComunicado(comunicado)}
                  data-testid={`card-comunicado-${index}`}
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-chart-2 flex items-center justify-center mb-3">
                      <comunicado.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{comunicado.title}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{comunicado.date}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{comunicado.summary}</p>
                    <p className="mt-2 text-sm text-chart-2 font-medium">
                      Ver más →
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sección de Noticias */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Últimas Noticias</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Haz click en cada noticia para ver más detalles.
            </p>

            <div className="grid gap-6">
              {noticias.map((noticia, index) => (
                <Card 
                  key={index} 
                  className="hover-elevate cursor-pointer transition-all"
                  onClick={() => setSelectedNoticia(noticia)}
                  data-testid={`card-noticia-${index}`}
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-chart-1 flex items-center justify-center flex-shrink-0">
                        <noticia.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="mb-2">{noticia.title}</CardTitle>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{noticia.date}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{noticia.summary}</p>
                    <p className="mt-2 text-sm text-chart-1 font-medium">
                      Ver más →
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Suscripción */}
          <div className="mt-12">
            <Card className="bg-gradient-to-br from-chart-1/10 to-chart-1/5 border-chart-1/20">
              <CardContent className="pt-6">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    ¿Quieres recibir nuestras noticias?
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Suscríbete a nuestro boletín informativo
                  </p>
                  <button 
                    className="px-6 min-h-9 rounded-md bg-chart-1 text-white font-medium hover-elevate active-elevate-2"
                    onClick={() => console.log('Suscripción iniciada')}
                    data-testid="button-subscribe"
                  >
                    Suscribirse
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Dialog para mostrar comunicado completo */}
      <Dialog open={!!selectedComunicado} onOpenChange={(open) => !open && setSelectedComunicado(null)}>
        <DialogContent data-testid="dialog-comunicado-detalle">
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center gap-3">
              {selectedComunicado && (
                <>
                  <div className="w-10 h-10 rounded-full bg-chart-2 flex items-center justify-center flex-shrink-0">
                    <selectedComunicado.icon className="w-5 h-5 text-white" />
                  </div>
                  {selectedComunicado.title}
                </>
              )}
            </DialogTitle>
            <DialogDescription className="flex items-center gap-2 text-base">
              <Calendar className="w-4 h-4" />
              <span>{selectedComunicado?.date}</span>
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <p className="text-foreground leading-relaxed">
              {selectedComunicado?.fullContent}
            </p>
          </div>
        </DialogContent>
      </Dialog>

      {/* Dialog para mostrar noticia completa */}
      <Dialog open={!!selectedNoticia} onOpenChange={(open) => !open && setSelectedNoticia(null)}>
        <DialogContent data-testid="dialog-noticia-detalle">
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center gap-3">
              {selectedNoticia && (
                <>
                  <div className="w-10 h-10 rounded-full bg-chart-1 flex items-center justify-center flex-shrink-0">
                    <selectedNoticia.icon className="w-5 h-5 text-white" />
                  </div>
                  {selectedNoticia.title}
                </>
              )}
            </DialogTitle>
            <DialogDescription className="flex items-center gap-2 text-base">
              <Calendar className="w-4 h-4" />
              <span>{selectedNoticia?.date}</span>
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <p className="text-foreground leading-relaxed">
              {selectedNoticia?.fullContent}
            </p>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}
