import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Newspaper, Calendar, Megaphone, FileText, AlertCircle, Trophy, Star, Sparkles, ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { LucideIcon } from "lucide-react";
import competenciaImage from "@assets/Imagen de WhatsApp 2025-11-10 a las 09.40.52_af06f7a6_1763005432692.jpg";

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
  image?: string;
}

export default function Noticias() {
  const [isComunicadosOpen, setIsComunicadosOpen] = useState(false);
  const [selectedComunicado, setSelectedComunicado] = useState<Comunicado | null>(null);
  const [isNoticiasOpen, setIsNoticiasOpen] = useState(false);
  const [selectedNoticia, setSelectedNoticia] = useState<Noticia | null>(null);

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
      title: "Competencia Los derechos humanos del grado 601",
      date: "6 de Noviembre, 2025",
      icon: Trophy,
      summary: "Los estudiantes del grado 601 participaron en la competencia sobre derechos humanos.",
      fullContent: "Los estudiantes del grado 601 participaron exitosamente en la competencia sobre derechos humanos, demostrando un excelente conocimiento y comprensión de los valores fundamentales. Este logro es el resultado del esfuerzo conjunto de estudiantes, docentes y padres de familia. Los estudiantes mostraron gran compromiso en la preparación y presentación de sus proyectos sobre derechos humanos. Felicitamos a toda la comunidad educativa por este importante logro que fortalece la formación ciudadana de nuestros estudiantes.",
      image: competenciaImage
    },
    {
      title: "Entrega de boletines de III Periodo escuela Policarpa Salavarrieta, COLEGIO Oreste Sindici",
      date: "10 de Octubre, 2025",
      icon: Star,
      summary: "Información sobre la entrega de boletines del tercer periodo académico.",
      fullContent: "Se informa a toda la comunidad educativa que la entrega de boletines correspondientes al tercer periodo académico se realizará en las instalaciones de la escuela Policarpa Salavarrieta del Colegio Oreste Sindici. Los padres de familia y acudientes podrán recibir los informes académicos de sus hijos donde se refleja el desempeño y avance durante este periodo. Agradecemos la asistencia puntual de los padres de familia y su compromiso con el proceso educativo de nuestros estudiantes."
    },
    {
      title: "Nueva Aula de Tecnología",
      date: "5 de Octubre, 2025",
      icon: Sparkles,
      summary: "Inauguramos nuestra nueva aula de tecnología equipada con computadores de última generación.",
      fullContent: "Inauguramos nuestra nueva aula de tecnología equipada con computadores de última generación y herramientas digitales. El espacio cuenta con 40 estaciones de trabajo con equipos de alto rendimiento, pizarra digital interactiva, impresora 3D, kit de robótica educativa y conexión de alta velocidad a internet. Esta inversión representa un paso importante en nuestro compromiso con la educación de calidad y la alfabetización digital. El aula estará disponible para todas las áreas académicas y permitirá desarrollar competencias tecnológicas fundamentales para el siglo XXI."
    }
  ];

  const handleCloseComunicados = () => {
    setIsComunicadosOpen(false);
    setSelectedComunicado(null);
  };

  const handleCloseNoticias = () => {
    setIsNoticiasOpen(false);
    setSelectedNoticia(null);
  };

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
          
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Comunicados y Noticias</h2>
            <p className="text-lg text-muted-foreground">
              Mantente informado sobre anuncios importantes y los eventos más recientes de nuestra institución.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Sección de Comunicados */}
            <Card 
              className="hover-elevate cursor-pointer transition-all"
              onClick={() => setIsComunicadosOpen(true)}
              data-testid="button-open-comunicados"
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-chart-2 flex items-center justify-center flex-shrink-0">
                    <Megaphone className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl">Ver Comunicados</CardTitle>
                    <CardDescription className="text-base mt-2">
                      Anuncios institucionales
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {comunicados.length} comunicados disponibles
                </p>
              </CardContent>
            </Card>

            {/* Sección de Noticias */}
            <Card 
              className="hover-elevate cursor-pointer transition-all"
              onClick={() => setIsNoticiasOpen(true)}
              data-testid="button-open-noticias"
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-chart-1 flex items-center justify-center flex-shrink-0">
                    <Newspaper className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl">Ver Noticias</CardTitle>
                    <CardDescription className="text-base mt-2">
                      Eventos y logros recientes
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {noticias.length} noticias disponibles
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Dialog para Comunicados - Vista de lista o detalle */}
      <Dialog open={isComunicadosOpen} onOpenChange={handleCloseComunicados}>
        <DialogContent className="max-w-3xl" data-testid="dialog-comunicados">
          {selectedComunicado ? (
            // Vista de detalle del comunicado
            <>
              <DialogHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSelectedComunicado(null)}
                    data-testid="button-back-comunicados"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </Button>
                  <DialogTitle className="text-2xl flex items-center gap-3 flex-1">
                    <div className="w-10 h-10 rounded-full bg-chart-2 flex items-center justify-center flex-shrink-0">
                      <selectedComunicado.icon className="w-5 h-5 text-white" />
                    </div>
                    {selectedComunicado.title}
                  </DialogTitle>
                </div>
                <DialogDescription className="flex items-center gap-2 text-base">
                  <Calendar className="w-4 h-4" />
                  <span>{selectedComunicado.date}</span>
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4">
                <p className="text-foreground leading-relaxed">
                  {selectedComunicado.fullContent}
                </p>
              </div>
            </>
          ) : (
            // Vista de lista de comunicados
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">Comunicados</DialogTitle>
                <DialogDescription>
                  Selecciona un comunicado para ver más detalles
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 mt-4">
                {comunicados.map((comunicado, index) => (
                  <Card
                    key={index}
                    className="hover-elevate cursor-pointer transition-all"
                    onClick={() => setSelectedComunicado(comunicado)}
                    data-testid={`button-open-comunicado-${index}`}
                  >
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-chart-2 flex items-center justify-center flex-shrink-0">
                          <comunicado.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg">{comunicado.title}</CardTitle>
                          <CardDescription className="flex items-center gap-2 mt-2">
                            <Calendar className="w-4 h-4" />
                            <span>{comunicado.date}</span>
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{comunicado.summary}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Dialog para Noticias - Vista de lista o detalle */}
      <Dialog open={isNoticiasOpen} onOpenChange={handleCloseNoticias}>
        <DialogContent className="max-w-3xl" data-testid="dialog-noticias">
          {selectedNoticia ? (
            // Vista de detalle de la noticia
            <>
              <DialogHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSelectedNoticia(null)}
                    data-testid="button-back-noticias"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </Button>
                  <DialogTitle className="text-2xl flex items-center gap-3 flex-1">
                    <div className="w-10 h-10 rounded-full bg-chart-1 flex items-center justify-center flex-shrink-0">
                      <selectedNoticia.icon className="w-5 h-5 text-white" />
                    </div>
                    {selectedNoticia.title}
                  </DialogTitle>
                </div>
                <DialogDescription className="flex items-center gap-2 text-base">
                  <Calendar className="w-4 h-4" />
                  <span>{selectedNoticia.date}</span>
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4">
                {selectedNoticia.image && (
                  <div className="mb-6">
                    <img 
                      src={selectedNoticia.image} 
                      alt={selectedNoticia.title}
                      className="w-full rounded-md object-cover"
                    />
                  </div>
                )}
                <p className="text-foreground leading-relaxed">
                  {selectedNoticia.fullContent}
                </p>
              </div>
            </>
          ) : (
            // Vista de lista de noticias
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">Últimas Noticias</DialogTitle>
                <DialogDescription>
                  Selecciona una noticia para ver más detalles
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 mt-4">
                {noticias.map((noticia, index) => (
                  <Card
                    key={index}
                    className="hover-elevate cursor-pointer transition-all"
                    onClick={() => setSelectedNoticia(noticia)}
                    data-testid={`button-open-noticia-${index}`}
                  >
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-chart-1 flex items-center justify-center flex-shrink-0">
                          <noticia.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg">{noticia.title}</CardTitle>
                          <CardDescription className="flex items-center gap-2 mt-2">
                            <Calendar className="w-4 h-4" />
                            <span>{noticia.date}</span>
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{noticia.summary}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}
