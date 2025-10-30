import { useState } from "react";
import { BookOpen, ChevronRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface Article {
  id: string;
  title: string;
  content: string[];
}

interface Chapter {
  id: string;
  title: string;
  articles?: Article[];
}

interface Title {
  id: string;
  title: string;
  chapters: Chapter[];
}

const sieContent: Title[] = [
  {
    id: "introduccion",
    title: "INTRODUCCIÓN",
    chapters: [{
      id: "intro-content",
      title: "",
      articles: [{
        id: "intro-text",
        title: "",
        content: [
          "La Ley General de Educación en su artículo 77 otorgó la autonomía escolar a las instituciones en cuanto a: organización de las áreas fundamentales, inclusión de asignaturas optativas, ajuste del Proyecto Educativo Institucional -PEI- a las necesidades y características regionales, libertad para la adopción de métodos de enseñanza y la organización de actividades formativas, culturales y deportivas.",
          "Con la expedición del Decreto 1290 de 2009, el gobierno nacional otorga la facultad a los establecimientos educativos para definir el Sistema Institucional de Evaluación de los Estudiantes. Su importancia radica en la formulación de criterios de evaluación en cada una de las áreas, establecer los desempeños que deben desarrollar los estudiantes durante el período o el año lectivo.",
          "La evaluación es un proceso sistemático, permanente, factible, equitativo, ético y objetivo mediante el cual se valoran los niveles de desempeño de los estudiantes con el propósito de valorar en forma multidimensional los avances del educando."
        ]
      }]
    }]
  },
  {
    id: "capitulo-1",
    title: "CAPÍTULO 1 - EVALUACIÓN DE LOS EDUCANDOS",
    chapters: [
      {
        id: "cap-1-art-1",
        title: "",
        articles: [
          {
            id: "art-1",
            title: "ARTÍCULO 1. Organización de los períodos académicos",
            content: [
              "Las áreas obligatorias y fundamentales contempladas en el Art. 23 de la ley 115, se planifican por periodos. Durante el año escolar se ejecutan 4 períodos académicos (10 semanas cada uno) de acuerdo con la Resolución de Calendario Académico que emita la Secretaría de Educación de Cundinamarca.",
              "Para el caso del Programa de Educación formal de adultos se desarrollan seis (6) ciclos organizados de la siguiente forma:",
              "• Ciclo I: grados primero, segundo y tercero de EBP",
              "• Ciclo II: grados cuarto y quinto de EBP",
              "• Ciclo III: grados sexto y séptimo de EBS",
              "• Ciclo IV: grados octavo y noveno de EBS",
              "• Ciclo V: grado décimo de Educación media",
              "• Ciclo VI: grado undécimo de Educación Media"
            ]
          },
          {
            id: "art-2",
            title: "ARTÍCULO 2. Manejo del tiempo escolar",
            content: [
              "El proceso de aprendizaje debe garantizar el desarrollo de las competencias propuestas en las diferentes áreas y favorecer el cumplimiento de los estándares curriculares.",
              "Los maestros deben dosificar cuidadosamente el tiempo de cada período, señalando con claridad los espacios evaluativos donde se valora el desempeño de cada estudiante.",
              "Los docentes tienen la obligación de dar a conocer en cada periodo las fechas de evaluación y señalarlas en el cronograma de aula. Los resultados deben darse a conocer en un plazo no mayor a 5 días hábiles."
            ]
          },
          {
            id: "art-3",
            title: "ARTÍCULO 3. Propósitos de la evaluación de los estudiantes",
            content: [
              "Son propósitos de la evaluación escolar:",
              "• Identificar las características personales, intereses, ritmos de desarrollo y estilos de aprendizaje del estudiante para valorar sus avances",
              "• Proporcionar información básica para consolidar o reorientar los procesos educativos relacionados con el desarrollo multidimensional del estudiante",
              "• Suministrar información que permita implementar estrategias pedagógicas para apoyar a los estudiantes que presenten debilidades o desempeños superiores",
              "• Determinar la promoción de los estudiantes",
              "• Aportar información para el ajuste e implementación del plan de mejoramiento institucional"
            ]
          },
          {
            id: "art-4",
            title: "ARTÍCULO 4. Momentos de la evaluación",
            content: [
              "Las evaluaciones se harán con base en los estándares, competencias y desempeños propuestos al iniciar el año lectivo contemplados en la malla curricular de las diferentes áreas.",
              "Todas las áreas y asignaturas deben ser objeto de un mínimo de cuatro acciones evaluativas diferentes por periodo.",
              "1. Evaluación diagnóstica: Permite al docente comprender, determinar y valorar el entorno y los estudiantes al inicio del proceso educativo.",
              "2. Evaluación Formativa (20%): Se refiere al ser. Incluye puntualidad, respeto, sentido de pertenencia, presentación personal y disposición en clase.",
              "3. Evaluación Procedimental (40%): Se refiere al hacer. Evaluación permanente mediante talleres, trabajos en equipo, exposiciones, tareas y proyectos.",
              "4. Evaluación Cognitiva (40%): Se refiere al saber. Pruebas orales o escritas que demuestren el proceso de aprendizaje y aplicación de competencias."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "capitulo-2",
    title: "CAPÍTULO 2 - SEGUIMIENTO Y PROMOCIÓN EN PREESCOLAR",
    chapters: [
      {
        id: "cap-2-art-5",
        title: "",
        articles: [
          {
            id: "art-5",
            title: "ARTÍCULO 5. Evaluación y promoción del preescolar",
            content: [
              "La Institución adoptará en su plan de estudios los estándares y lineamientos que establezca el Ministerio de Educación Nacional para el nivel preescolar.",
              "En el nivel preescolar no se reprueban grados ni actividades. Los niños avanzarán en el proceso educativo según su ritmo de aprendizaje.",
              "Se hará un seguimiento integral del desarrollo de cada niño en sus dimensiones personal, social y cognitiva.",
              "Los niños del grado de transición serán promovidos a primer grado al culminar su proceso escolar."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "capitulo-3",
    title: "CAPÍTULO 3 - CRITERIOS DE EVALUACIÓN",
    chapters: [
      {
        id: "cap-3-art-6-7",
        title: "",
        articles: [
          {
            id: "art-6",
            title: "ARTÍCULO 6. Escala de valoración Institucional y rangos de aprobación",
            content: [
              "La escala de valoración institucional es la siguiente:",
              "• Desempeño Superior: 4.6 a 5.0",
              "• Desempeño Alto: 4.0 a 4.5",
              "• Desempeño Básico: 3.0 a 3.9",
              "• Desempeño Bajo: 1.0 a 2.9",
              "El nivel de desempeño mínimo para aprobar una asignatura o área es DESEMPEÑO BÁSICO (3.0)."
            ]
          },
          {
            id: "art-7",
            title: "ARTÍCULO 7. Criterios de Evaluación según la escala valorativa institucional",
            content: [
              "DESEMPEÑO SUPERIOR: Corresponde al estudiante que alcanza en forma excepcional todos los desempeños previstos. Se caracteriza por:",
              "• Desarrolla actividades curriculares que exceden las expectativas",
              "• Participa activamente en las actividades del aula y la institución",
              "• Muestra liderazgo en actividades académicas, culturales y sociales",
              "• Maneja adecuadamente los conceptos y los relaciona con experiencias vividas",
              "• Evidencia excelentes prácticas de convivencia",
              "• Asume con responsabilidad sus compromisos académicos",
              "• Manifiesta sentido de pertenencia institucional",
              "",
              "DESEMPEÑO ALTO: Corresponde al estudiante que mantiene una actitud coherente logrando satisfactoriamente los aprendizajes propuestos. Se caracteriza por:",
              "• Maneja y argumenta los conceptos aprendidos en clase",
              "• Participa en el desarrollo de las actividades en el aula",
              "• Su comportamiento favorece la dinámica de grupo",
              "• Presenta a tiempo sus trabajos y compromisos",
              "• Conoce y cumple las normas establecidas",
              "",
              "DESEMPEÑO BÁSICO: Corresponde al estudiante que presenta una actitud aceptable cumpliendo los requerimientos mínimos. Se caracteriza por:",
              "• Realiza las actividades con un nivel de competencia básico",
              "• Participa eventualmente en clases",
              "• Desarrolla un mínimo de actividades curriculares requeridas",
              "• Satisface con alguna dificultad los diferentes saberes",
              "• Falta a clases con regularidad",
              "",
              "DESEMPEÑO BAJO: Corresponde al estudiante que no logra superar los desempeños necesarios. Se caracteriza por:",
              "• No alcanza los aprendizajes mínimos y requiere actividades de refuerzo",
              "• El ritmo de trabajo es inconstante",
              "• Incumple constantemente con las tareas",
              "• Presenta actitud desinteresada",
              "• Presenta faltas de asistencia injustificadas",
              "• Presenta dificultades de comportamiento"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "capitulo-4",
    title: "CAPÍTULO 4 - CRITERIOS DE PROMOCIÓN",
    chapters: [
      {
        id: "cap-4-arts",
        title: "",
        articles: [
          {
            id: "art-8-9-10",
            title: "ARTÍCULOS 8, 9 y 10. Promoción de competencias, asignaturas y áreas",
            content: [
              "Una competencia es alcanzada cuando el estudiante obtiene el rango de aprobación exigido por la institución.",
              "Una asignatura es aprobada en cada periodo cuando el estudiante alcanza el nivel de DESEMPEÑO BÁSICO (3.0 o superior).",
              "Un área es aprobada cuando el estudiante alcanza DESEMPEÑO BÁSICO, ALTO O SUPERIOR al promediar las asignaturas que la conforman."
            ]
          },
          {
            id: "art-11",
            title: "ARTÍCULO 11. Promoción de un grado",
            content: [
              "Se considera que un estudiante puede ser promovido al grado siguiente cuando:",
              "• Alcanza la totalidad de los criterios de desempeño propuestos en cada una de las diferentes áreas",
              "• Alcanza un nivel de suficiencia aprobatoria al obtener DESEMPEÑO BÁSICO, ALTO O SUPERIOR en todas las áreas",
              "• Cumple con un mínimo de asistencia del 75% en las actividades académicas programadas en el año escolar"
            ]
          },
          {
            id: "art-12-13",
            title: "ARTÍCULOS 12 y 13. Desempeño no aprobatorio y educandos no promovidos",
            content: [
              "Los educandos no serán promovidos al grado siguiente en los siguientes casos:",
              "• En Grado Primero: Cuando obtiene valoración final DESEMPEÑO BAJO en Español y Matemáticas",
              "• De segundo a undécimo: Cuando obtiene valoración final Desempeño Bajo en tres o más áreas",
              "• Cuando deja de asistir injustificadamente al 25% o más de las actividades académicas",
              "",
              "El estudiante con Desempeño Bajo en una o dos áreas tendrá oportunidad de superar mediante Proceso de refuerzo, superación y evaluación final."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "capitulo-5",
    title: "CAPÍTULO 5 - ACCIONES PEDAGÓGICAS PARA EL SEGUIMIENTO",
    chapters: [
      {
        id: "cap-5-arts",
        title: "",
        articles: [
          {
            id: "art-14-15",
            title: "ARTÍCULOS 14 y 15. Acciones de seguimiento y estrategias de apoyo",
            content: [
              "Los docentes llevarán registros de los procesos realizados por el estudiante y realizarán citaciones a padres de familia.",
              "Durante la séptima semana de cada periodo se convocará a padres de estudiantes con dificultades para establecer compromisos conjuntos.",
              "Durante la décima semana se desarrollará la 'semana de evidencia de aprendizaje' donde los estudiantes pueden mostrar sus comprensiones y superar dificultades.",
              "Se define un formato de Matriz de seguimiento del Plan de Mejoramiento Individual que se diligencia con el estudiante y el padre de familia."
            ]
          },
          {
            id: "art-16",
            title: "ARTÍCULO 16. Comisiones de evaluación y promoción",
            content: [
              "El Rector conformará para cada grado una Comisión de Evaluación integrada por:",
              "• El Rector",
              "• El Coordinador(a)",
              "• Los Docentes directores de cada curso",
              "• Un delegado de los Padres de Familia",
              "• Presidente del Consejo estudiantil",
              "• Personero de los estudiantes",
              "",
              "La comisión se encargará de:",
              "• Analizar los casos de estudiantes con desempeño bajo en tres o más áreas",
              "• Analizar casos de estudiantes con Desempeño Superior para actividades especiales",
              "• Determinar compromisos académicos",
              "• Todas las decisiones se consignarán en actas"
            ]
          },
          {
            id: "art-17-18",
            title: "ARTÍCULOS 17 y 18. Promoción anticipada",
            content: [
              "Durante el primer período del año escolar, el Consejo académico, previo consentimiento de los padres, podrá recomendar la promoción anticipada del estudiante que demuestre rendimiento superior.",
              "Procedimiento:",
              "• Solicitud ante el Consejo académico",
              "• Aprobación por parte del Consejo académico",
              "• Valoración integral",
              "• Concepto favorable mediante Acta",
              "• Aprobación por el Consejo Directivo",
              "• Renovación de matrícula en el grado siguiente",
              "",
              "La promoción anticipada NO APLICA para transición a primero, quinto a sexto, noveno a décimo, ni para el programa de adultos."
            ]
          },
          {
            id: "art-19-20-21",
            title: "ARTÍCULOS 19, 20 y 21. Estrategias de valoración, acciones de garantía e informes",
            content: [
              "La evaluación se hace mediante pruebas de comprensión, análisis, discusión crítica y apreciación cualitativa.",
              "Los directivos y docentes deben cumplir con los procesos evaluativos estipulados en este sistema.",
              "Se entregarán cuatro informes académicos durante el año escolar, uno por cada periodo, con información detallada del desempeño del estudiante en cada área."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "capitulo-6",
    title: "CAPÍTULO 6 - PROCEDIMIENTO DE ACTUALIZACIÓN Y DIVULGACIÓN",
    chapters: [
      {
        id: "cap-6-arts",
        title: "",
        articles: [
          {
            id: "art-25-26-27",
            title: "ARTÍCULOS 25, 26 y 27. Ajustes, actualización y divulgación del SIEE",
            content: [
              "El SIEE será objeto de revisión y ajuste permanente con la participación de toda la comunidad educativa.",
              "Los mecanismos de participación incluyen:",
              "• Reuniones de área y consejo académico",
              "• Socialización con padres de familia",
              "• Presentación al Consejo Directivo",
              "",
              "El Sistema Institucional de Evaluación será divulgado a toda la comunidad educativa al inicio de cada año escolar.",
              "Estará disponible en la página web institucional y en forma física en la institución.",
              "Las actualizaciones se realizarán siguiendo el debido proceso y se darán a conocer oportunamente a la comunidad."
            ]
          },
          {
            id: "marco-legal",
            title: "Marco Legal",
            content: [
              "El Sistema Institucional de Evaluación se fundamenta en:",
              "• Constitución Política de Colombia",
              "• Ley 115 de 1994 - Ley General de Educación",
              "• Decreto 1290 de 2009 - Reglamentación de la evaluación",
              "• Decreto 1075 de 2015 - Decreto Único Reglamentario del Sector Educación",
              "• Decreto 1421 de 2017 - Educación inclusiva",
              "• PEI de la Institución Educativa Departamental Oreste Sindici"
            ]
          }
        ]
      }
    ]
  }
];

export default function SistemaEvaluacionDigital() {
  const [selectedSection, setSelectedSection] = useState<string>("introduccion");
  const [isSidebarOpen, setIsSidebarOpen] = useState<{ [key: string]: boolean }>({});

  const handleTitleClick = (titleId: string) => {
    setSelectedSection(titleId);
    setIsSidebarOpen(prev => ({ ...prev, [titleId]: !prev[titleId] }));
  };

  const getCurrentContent = () => {
    for (const title of sieContent) {
      if (title.id === selectedSection) return title;
      for (const chapter of title.chapters) {
        if (chapter.id === selectedSection) return { ...title, chapters: [chapter] };
        if (chapter.articles) {
          for (const article of chapter.articles) {
            if (article.id === selectedSection) {
              return { ...title, chapters: [{ ...chapter, articles: [article] }] };
            }
          }
        }
      }
    }
    return sieContent[0];
  };

  const currentContent = getCurrentContent();

  return (
    <div className="flex rounded-lg border bg-card shadow-sm overflow-hidden" style={{ height: '800px' }}>
      <aside className="w-80 border-r bg-card">
        <ScrollArea className="h-full">
          <div className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <FileText className="w-5 h-5 text-muted-foreground" data-testid="icon-file" />
              <h2 className="font-semibold text-lg" data-testid="heading-toc-sie">Tabla de Contenidos</h2>
            </div>
            
            <nav className="space-y-2">
              {sieContent.map((title) => (
                <Collapsible
                  key={title.id}
                  open={isSidebarOpen[title.id]}
                >
                  <CollapsibleTrigger asChild>
                    <Button
                      variant={selectedSection === title.id ? "default" : "ghost"}
                      className="w-full justify-between text-left font-semibold"
                      onClick={() => handleTitleClick(title.id)}
                      data-testid={`button-sie-title-${title.id}`}
                    >
                      <span className="line-clamp-2">{title.title}</span>
                      <ChevronRight className={`w-4 h-4 transition-transform ${isSidebarOpen[title.id] ? 'rotate-90' : ''}`} />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="ml-4 mt-2 space-y-2">
                    {title.chapters.map((chapter) => (
                      <div key={chapter.id} className="space-y-1">
                        {chapter.title && (
                          <Button
                            variant={selectedSection === chapter.id ? "secondary" : "ghost"}
                            className="w-full justify-start text-left text-sm font-semibold"
                            onClick={() => setSelectedSection(chapter.id)}
                            data-testid={`button-sie-chapter-${chapter.id}`}
                          >
                            {chapter.title}
                          </Button>
                        )}
                        {chapter.articles?.map((article) => (
                          <Button
                            key={article.id}
                            variant={selectedSection === article.id ? "secondary" : "ghost"}
                            className={`w-full justify-start text-left text-sm ${chapter.title ? 'ml-4' : ''}`}
                            onClick={() => setSelectedSection(article.id)}
                            data-testid={`button-sie-article-${article.id}`}
                          >
                            {article.title || "Contenido"}
                          </Button>
                        ))}
                      </div>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </nav>
          </div>
        </ScrollArea>
      </aside>

      <main className="flex-1">
        <ScrollArea className="h-full">
          <div className="p-8 md:p-12">
            <div className="bg-card">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-8 h-8 text-primary" data-testid="icon-book-sie" />
                <h2 className="text-3xl font-bold text-foreground" data-testid="text-sie-current-title">
                  {currentContent.title}
                </h2>
              </div>
              <Separator className="mb-8" data-testid="separator-sie-header" />

              {currentContent.chapters.map((chapter) => (
                <div key={chapter.id} className="mb-12" data-testid={`chapter-sie-${chapter.id}`}>
                  {chapter.title && (
                    <h3 className="text-2xl font-semibold mb-6 text-foreground" data-testid={`heading-sie-chapter-${chapter.id}`}>
                      {chapter.title}
                    </h3>
                  )}

                  {chapter.articles?.map((article) => (
                    <div key={article.id} className="mb-8" data-testid={`article-sie-${article.id}`}>
                      {article.title && (
                        <h4 className="text-xl font-semibold mb-4 text-foreground" data-testid={`heading-sie-article-${article.id}`}>
                          {article.title}
                        </h4>
                      )}
                      <div className="space-y-4 text-muted-foreground leading-relaxed">
                        {article.content.map((paragraph, idx) => (
                          <p key={idx} className={paragraph.startsWith('•') ? 'ml-4' : ''} data-testid={`text-sie-content-${article.id}-${idx}`}>
                            {paragraph}
                          </p>
                        ))}
                      </div>
                      {article.id !== chapter.articles?.[chapter.articles.length - 1]?.id && (
                        <Separator className="mt-6" data-testid={`separator-sie-${article.id}`} />
                      )}
                    </div>
                  ))}
                </div>
              ))}

              <div className="mt-12 pt-6 border-t text-center text-sm text-muted-foreground" data-testid="footer-sie-info">
                <p data-testid="text-sie-institution">Sistema Institucional de Evaluación y Promoción</p>
                <p className="mt-1" data-testid="text-sie-institution-name">IED. Oreste Sindici</p>
                <p className="mt-1" data-testid="text-sie-year">Actualización 2024</p>
              </div>
            </div>
          </div>
        </ScrollArea>
      </main>
    </div>
  );
}
