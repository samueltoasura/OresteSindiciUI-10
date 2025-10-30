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

interface Section {
  id: string;
  title: string;
  content: string[];
}

interface Chapter {
  id: string;
  title: string;
  sections: Section[];
}

const peiContent: Chapter[] = [
  {
    id: "cap-1",
    title: "CAPÍTULO 1: EL ESTABLECIMIENTO EDUCATIVO Y SU CONTEXTO",
    sections: [
      {
        id: "presentacion",
        title: "1.1 PRESENTACIÓN INSTITUCIONAL",
        content: [
          "La Institución Educativa Departamental 'Oreste Sindici' acoge a niños, niñas, jóvenes y adultos de todo el municipio de Nilo conformado por cinco barrios: Tamarindo, Progreso, Vaticano, Centro y Peñones.",
          "A partir del año 2003 el Colegio Oreste Sindici quedó legalmente reconocido como Institución Educativa Departamental, integrando diferentes Sedes educativas pertenecientes al Municipio: Sede Urbana Escuela Policarpa Salavarrieta, Sedes rurales Belén, Macachí, Sonora y Bellavista.",
          "La Institución orienta sus principios filosóficos hacia el fortalecimiento de la modalidad, ESPECIALIDAD TÉCNICA GESTIÓN EMPRESARIAL relacionándola con la misión y visión, en articulación con el SENA.",
          "Para el año 2015 en consejo académico se decide continuar en la articulación con el SENA, pero se modifica el programa ofrecido a los estudiantes, iniciando en el 2016 con el Programa 'TECNICO EN ASISTENCIA ADMINISTRATIVA'.",
          "La institución ofrece la educación formal para adultos que inició en el año 2015, fundamentada en el Decreto 3011, otorgando el título de Bachiller Académico."
        ]
      },
      {
        id: "identificacion",
        title: "1.2 IDENTIFICACIÓN INSTITUCIONAL",
        content: [
          "Nombre: INSTITUCION EDUCATIVA DEPARTAMENTAL ORESTE SINDICI",
          "Municipio: Nilo Cundinamarca",
          "Provincia: Alto Magdalena",
          "Correo Institucional: iedsindici_nilo@cundinamarca.gov.co",
          "Resolución de integración y aprobación: 06160 29 de nov. / 2002",
          "Código DANE: 125488000133",
          "NIT: 808.000.763 – 2",
          "Código ICFES: 048983",
          "Dirección: Carrera 3° No. 2-20 Barrio centro",
          "Ciudad: Nilo",
          "Departamento: Cundinamarca",
          "Naturaleza: oficial",
          "Carácter: mixto",
          "Calendario: A",
          "Especialidad: Técnico en Gestión Empresarial",
          "Jornada: Diurna, única y sabatina",
          "Niveles: Preescolar, básica (primaria y secundaria) y Media Técnica",
          "Rectora: LUZ JACKELIN SANCHEZ SOLORZANO"
        ]
      },
      {
        id: "naturaleza",
        title: "1.3 NATURALEZA JURÍDICA",
        content: [
          "La Institución honra con su nombre al genio de la música Oreste Sindici, compositor italiano quien, durante su permanencia en el municipio de Nilo, compuso las notas del himno nacional de la República de Colombia.",
          "El 18 de marzo de 1974, empezó a funcionar el colegio de enseñanza secundaria, en calidad de anexo al colegio departamental 'ATANASIO GIRARDOT' del municipio de Girardot.",
          "Posteriormente en 1977 la Institución se independiza y obtiene la aprobación del ciclo básico, mediante resolución No 4312 del 17 de mayo de 1977.",
          "Mediante resolución Nº 6160 de 2002 se concede licencia de funcionamiento y reconocimiento oficial a la Institución para impartir la Educación Media técnica con especialidad en Gestión Empresarial."
        ]
      },
      {
        id: "resena",
        title: "1.4 RESEÑA HISTÓRICA",
        content: [
          "Con las diligencias previas y necesarias, el 18 de marzo de 1.974, empezó a funcionar el colegio de enseñanza secundaria, siendo su primer rector el señor Jorge Saavedra Silva.",
          "En 1977 la Institución se independiza bajo la Rectoría de la señora Irma Maldonado García, quien en su administración logró la aprobación del ciclo básico.",
          "El profesor Marco Aurelio Barahona dejó a nuestro colegio una hermosa inspiración, que se convirtió en su Himno, cuya música fue elaborada por el maestro Luis Alberto García Ortegón.",
          "Bajo la administración de la rectora Ana Cecilia Alvarado de Peña se logró la modalidad técnica en Gestión Empresarial, fortaleciéndose a través de la articulación con el SENA.",
          "En el año 2002, se inicia la vigencia de normas legales que decretan la integración de las Instituciones Educativas con otros centros de nivel primaria y preescolar.",
          "Desde abril del año 2013 dirige la institución la Licenciada Luz Jacqueline Sánchez Solórzano quien ha orientado y organizado la institución planteando propósitos, metas claras en su misión, visión y objetivos."
        ]
      },
      {
        id: "contexto",
        title: "1.5 MARCO CONTEXTUAL",
        content: [
          "El nombre de Nilo se le dio a este municipio con motivo de las inundaciones del río Pagüey, por analogías con las del río africano de Egipto.",
          "En Nilo vivió el compositor de la música del Himno Nacional de Colombia, el Maestro Oreste Sindici, quien era propietario de la hacienda Prado o Capote.",
          "El municipio de Nilo se encuentra a 336 metros sobre el nivel del mar. Limita al norte con los municipios de Tocaima y Viotá, al sur con Melgar (Tolima), al oriente con Tibacuy y Melgar y al occidente con los municipios de Agua de Dios y Ricaurte.",
          "El Municipio se sustenta fundamentalmente en las actividades agrícolas: ganadería en un 30% en la zona sur y, en forma accesoria por su cercanía a Melgar y Girardot, el turismo.",
          "La IED. Oreste Sindici cuenta con seis (6) sedes: en el sector urbano las sedes Colegio Departamental Oreste Sindici y la Escuela Urbana Policarpa Salavarrieta. En el sector rural Las sedes rurales: Malachí, Belén, Bellavista y la Sonora."
        ]
      }
    ]
  },
  {
    id: "cap-2",
    title: "CAPÍTULO 2: MARCO REFERENCIAL",
    sections: [
      {
        id: "mision",
        title: "2.1.1 MISIÓN",
        content: [
          "La Institución Educativa Departamental Oreste Sindici del Municipio de Nilo, presta el servicio educativo en los niveles de Preescolar, Básica primaria- Básica secundaria y Media Técnica, con especialidad en Asistencia administrativa en articulación con el SENA.",
          "Además, ofrece el Programa de Educación formal de adultos en todos sus ciclos, en la jornada sabatina.",
          "El objetivo es brindar a nuestros educandos una formación integral en los aspectos humano, intelectual, técnico e investigativo, que permita la formación de bachilleres con un alto grado de habilidades y valores, enmarcados en nuestro proyecto de armonización.",
          "Contribuimos su acceso al mercado laboral, a la educación superior o a su propio emprendimiento; permitiendo su participación creativa para liderar los retos que demanda la sociedad cambiante, a la cual se enfrenta a diario."
        ]
      },
      {
        id: "vision",
        title: "2.1.2 VISIÓN",
        content: [
          "Para el año 2028 la Institución Educativa Departamental Oreste Sindici del municipio de Nilo será reconocida a nivel local y regional, como un establecimiento Educativo público, líder en la formación de bachilleres técnicos y académicos altamente calificados en las pruebas de estado, llegando al nivel A.",
          "Con nuevos esquemas de comportamiento ciudadano y con un alto nivel de participación en el desarrollo intelectual, económico, cultural, comunitario, social y tecnológico.",
          "Bachilleres con gran capacidad de liderazgo, preparados para enfrentar los cambios de un mundo globalizado; capaces de tomar decisiones, elaborar y concretar proyectos de emprendimiento e investigación.",
          "Sensibles y tolerantes con las circunstancias y necesidades de sus semejantes; curiosos por el continuo aprendizaje y dispuestos a ser ciudadanos del mundo."
        ]
      },
      {
        id: "filosofia",
        title: "2.1.3 FILOSOFÍA INSTITUCIONAL",
        content: [
          "La Institución Educativa Departamental Oreste Sindici forma seres humanos íntegros, basados en la práctica de las competencias ciudadanas, capaces de cumplir sus deberes y gozar de sus derechos.",
          "Dándoles espacios para la expresión de sus ideas, opiniones y críticas constructivas, reconociendo y respetando el proceso formativo, tendientes a obtener un alto nivel educativo.",
          "Motivados hacia la gestión empresarial y hacia una propuesta de cambio según lo aprobado por la secretaria de educación y teniendo en cuenta las necesidades del entorno, las diferencias y limitaciones en su desarrollo."
        ]
      },
      {
        id: "valores",
        title: "2.1.4 VALORES",
        content: [
          "Fraternidad: base que reconoce la dignidad de los individuos permitiendo cohesión en la comunidad escolar.",
          "Libertad: ejercida con responsabilidad, vivida desde la óptica de la fe genera autonomía y sentido crítico.",
          "Autonomía: Sentido crítico para construir personas capaces de transformar sus vidas y su entorno.",
          "Responsabilidad: permite dar razón de sus actos y de sus decisiones asumiendo sus respectivas consecuencias.",
          "Trabajo: capacidad para ejecutar y poner en marcha ideas y proyectos con esmero y calidad.",
          "Honestidad: Transparencia y coherencia en sus intenciones, acciones y responsabilidades de acuerdo con los principios evangélicos."
        ]
      },
      {
        id: "virtudes",
        title: "2.1.5 VIRTUDES",
        content: [
          "Fe: Desarrollo de su relación con la trascendencia por la razón y la reflexión de las verdades que consolidan sus creencias.",
          "Esperanza: virtud generadora de actitudes y motivaciones que conlleven la transformación de la sociedad.",
          "Caridad: Amor vivido como entrega, sacrificio y deseo por un mundo mejor.",
          "Prudencia: hábito que involucra el entendimiento que dirige nuestro juicio para discernir lo que es bueno y debe hacerse, y lo que es malo y debe omitirse.",
          "Justicia: propiciar el sentido de dar a cada uno lo que de suyo le corresponde buscando equidad y solidaridad.",
          "Templanza: dominio de sí mismo y de sus pasiones que permite el crecimiento del carácter y la delineación de la personalidad.",
          "Fortaleza: ser perseverante en el alcance de las metas y sueños pese a las diversas dificultades que la vida presenta."
        ]
      },
      {
        id: "principios",
        title: "2.1.6 PRINCIPIOS INSTITUCIONALES PARA UNA SANA CONVIVENCIA",
        content: [
          "La política institucional de convivencia se fundamenta en la construcción de ciudadanía a partir de una formación integra que le permita a la comunidad educativa convivir en un ambiente sano y pacífico.",
          "Se constituirá una comunidad educadora que, en la formación humana y profesional, considere importante mantener un alto nivel académico que permita a sus miembros insertarse activa y responsablemente en la sociedad.",
          "Promueva el desarrollo integral y la humanización de la persona: incentive, especialmente en los estudiantes, la motivación al desarrollo personal y al emprendimiento.",
          "Desarrolle en los estudiantes un espíritu crítico, analítico, reflexivo y creativo y la responsabilidad de su libertad y de sus actos.",
          "Fomente el amor a la Patria, que conlleva el conocimiento y la promoción de nuestra cultura e identidad nacional, el sentido de libertad y democracia, el cuidado del medio ambiente y la responsabilidad social."
        ]
      },
      {
        id: "inclusion",
        title: "2.1.7 PRINCIPIOS DE INCLUSIÓN",
        content: [
          "La atención educativa a la población con discapacidad se enmarca en los principios de la educación inclusiva: calidad, diversidad, pertinencia, participación, equidad e interculturalidad.",
          "El respeto de la dignidad inherente, la autonomía individual, incluida la libertad de tomar las propias decisiones, y la independencia de las personas.",
          "La no discriminación.",
          "La participación e inclusión plenas y efectivas en la sociedad.",
          "El respeto por la diferencia y la aceptación de las personas con discapacidad como parte de la diversidad y la condición humanas.",
          "La igualdad de oportunidades.",
          "La accesibilidad.",
          "El respeto a la evolución de las facultades de los niños y las niñas con discapacidad y de su derecho a preservar su identidad."
        ]
      }
    ]
  },
  {
    id: "cap-3",
    title: "CAPÍTULO 3: COMPONENTE PEDAGÓGICO",
    sections: [
      {
        id: "modelo",
        title: "3.1 MODELO PEDAGÓGICO",
        content: [
          "La institución desarrolla un modelo pedagógico enfocado en la formación integral del estudiante.",
          "Se promueve el desarrollo de competencias técnicas en articulación con el SENA.",
          "El enfoque pedagógico privilegia el aprendizaje significativo y la construcción colectiva del conocimiento."
        ]
      },
      {
        id: "plan-estudios",
        title: "3.2 PLAN DE ESTUDIOS",
        content: [
          "El plan de estudios está diseñado de acuerdo con los lineamientos del Ministerio de Educación Nacional.",
          "Incluye las áreas obligatorias y fundamentales contempladas en el Art. 23 de la ley 115.",
          "Se complementa con la formación técnica en Asistencia Administrativa en articulación con el SENA."
        ]
      },
      {
        id: "proyectos",
        title: "3.5 PROYECTOS PEDAGÓGICOS TRANSVERSALES",
        content: [
          "La institución desarrolla diversos proyectos pedagógicos transversales que complementan la formación académica.",
          "Estos proyectos abordan temas de educación ambiental, competencias ciudadanas, educación sexual y derechos humanos.",
          "Se promueve la participación activa de toda la comunidad educativa en el desarrollo de estos proyectos."
        ]
      },
      {
        id: "armonizacion",
        title: "3.6 PROYECTO DE ARMONIZACIÓN",
        content: [
          "El Proyecto Educativo Pedagógico transversal de Armonización fue creado para fortalecer las competencias ciudadanas.",
          "Se trabajan 10 competencias fundamentales, una por mes, asignando grados responsables de la organización de actividades.",
          "El proyecto integra aspectos de inteligencia emocional y habilidades sociales que contribuyen al bienestar, felicidad y liderazgo."
        ]
      }
    ]
  },
  {
    id: "cap-4",
    title: "CAPÍTULO 4: COMPONENTE COMUNITARIO",
    sections: [
      {
        id: "participacion",
        title: "4.1 PARTICIPACIÓN Y CONVIVENCIA",
        content: [
          "La institución promueve espacios de participación democrática para toda la comunidad educativa.",
          "Se fomenta la construcción colectiva de acuerdos y normas de convivencia.",
          "Los órganos del Gobierno Escolar están debidamente conformados según lo establecido por la ley 115."
        ]
      },
      {
        id: "permanencia",
        title: "4.2 PERMANENCIA E INCLUSIÓN",
        content: [
          "La institución implementa estrategias para garantizar la permanencia de todos los estudiantes.",
          "Se desarrollan programas de inclusión educativa para atender la diversidad de la población estudiantil.",
          "Se realizan ajustes razonables y adaptaciones curriculares según las necesidades de cada estudiante."
        ]
      },
      {
        id: "perfil-estudiante",
        title: "4.3.4 PERFIL DE LOS ESTUDIANTES",
        content: [
          "Estudiantes con alto grado de competencias académicas y técnicas.",
          "Personas con valores cívicos y éticos sólidos.",
          "Individuos capaces de liderar procesos de transformación social.",
          "Ciudadanos comprometidos con el desarrollo de su comunidad.",
          "Personas con espíritu emprendedor y capacidad de innovación."
        ]
      },
      {
        id: "servicio-social",
        title: "4.4 SERVICIO SOCIAL ESTUDIANTIL",
        content: [
          "Los estudiantes desarrollan el servicio social estudiantil obligatorio como parte de su formación integral.",
          "El servicio social se enfoca en proyectos que benefician a la comunidad.",
          "Se promueve el liderazgo y el compromiso social a través de estas actividades."
        ]
      },
      {
        id: "escuela-padres",
        title: "4.5 ESCUELA DE PADRES",
        content: [
          "La institución desarrolla talleres y actividades de formación para padres de familia.",
          "Se busca fortalecer el acompañamiento familiar en el proceso educativo.",
          "Se promueve la participación activa de los padres en la vida institucional."
        ]
      }
    ]
  },
  {
    id: "cap-5",
    title: "CAPÍTULO 5: COMPONENTE ADMINISTRATIVO",
    sections: [
      {
        id: "talento-humano",
        title: "5.1 TALENTO HUMANO",
        content: [
          "La institución cuenta con un equipo de docentes y directivos comprometidos con la excelencia educativa.",
          "Se promueve la formación continua del personal docente.",
          "El personal administrativo apoya los procesos educativos de manera eficiente."
        ]
      },
      {
        id: "matriculas",
        title: "5.2 SISTEMA DE MATRÍCULA",
        content: [
          "El sistema de matrículas está organizado según criterios claramente establecidos.",
          "Se garantiza el acceso equitativo a la educación para toda la población.",
          "El proceso de matrícula se realiza de manera transparente y ordenada."
        ]
      },
      {
        id: "infraestructura",
        title: "5.8 INFRAESTRUCTURA",
        content: [
          "La institución cuenta con instalaciones en el sector urbano y rural del municipio.",
          "Se cuenta con seis sedes que atienden a la población estudiantil.",
          "Se trabaja continuamente en el mejoramiento de la infraestructura física."
        ]
      },
      {
        id: "bienestar",
        title: "5.10 SERVICIOS DE BIENESTAR",
        content: [
          "La institución ofrece servicios de bienestar estudiantil.",
          "Se cuenta con apoyo de psicoorientación para los estudiantes.",
          "Se promueve el cuidado de la salud física y mental de la comunidad educativa."
        ]
      }
    ]
  }
];

export default function ProyectoEducativoInstitucional() {
  const [selectedSection, setSelectedSection] = useState<string>("cap-1");
  const [isChapterOpen, setIsChapterOpen] = useState<{ [key: string]: boolean }>({});

  const handleChapterClick = (chapterId: string) => {
    setSelectedSection(chapterId);
    setIsChapterOpen(prev => ({ ...prev, [chapterId]: !prev[chapterId] }));
  };

  const handleSectionClick = (sectionId: string) => {
    setSelectedSection(sectionId);
  };

  const getCurrentContent = () => {
    for (const chapter of peiContent) {
      if (chapter.id === selectedSection) return chapter;
      for (const section of chapter.sections) {
        if (section.id === selectedSection) {
          return { ...chapter, sections: [section] };
        }
      }
    }
    return peiContent[0];
  };

  const currentContent = getCurrentContent();

  return (
    <div className="flex rounded-lg border bg-card shadow-sm overflow-hidden" style={{ height: '800px' }}>
      <aside className="w-80 border-r bg-card">
        <ScrollArea className="h-full">
          <div className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <FileText className="w-5 h-5 text-muted-foreground" data-testid="icon-file" />
              <h2 className="font-semibold text-lg" data-testid="heading-toc-pei">Tabla de Contenidos</h2>
            </div>
            
            <nav className="space-y-2">
              {peiContent.map((chapter) => (
                <Collapsible
                  key={chapter.id}
                  open={isChapterOpen[chapter.id]}
                >
                  <CollapsibleTrigger asChild>
                    <Button
                      variant={selectedSection === chapter.id ? "default" : "ghost"}
                      className="w-full justify-between text-left font-semibold"
                      onClick={() => handleChapterClick(chapter.id)}
                      data-testid={`button-pei-chapter-${chapter.id}`}
                    >
                      <span className="line-clamp-2">{chapter.title}</span>
                      <ChevronRight className={`w-4 h-4 transition-transform ${isChapterOpen[chapter.id] ? 'rotate-90' : ''}`} />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="ml-4 mt-2 space-y-1">
                    {chapter.sections.map((section) => (
                      <Button
                        key={section.id}
                        variant={selectedSection === section.id ? "secondary" : "ghost"}
                        className="w-full justify-start text-left text-sm"
                        onClick={() => handleSectionClick(section.id)}
                        data-testid={`button-pei-section-${section.id}`}
                      >
                        <span className="line-clamp-2">{section.title}</span>
                      </Button>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </nav>
          </div>
        </ScrollArea>
      </aside>

      <main className="flex-1 flex flex-col">
        <ScrollArea className="flex-1">
          <div className="p-8 max-w-4xl">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-8 h-8 text-primary" data-testid="icon-book" />
                <h1 className="text-2xl font-bold text-foreground" data-testid="heading-pei-title">
                  {currentContent.title}
                </h1>
              </div>
              <Separator className="mb-6" />
            </div>

            <div className="space-y-8">
              {currentContent.sections.map((section) => (
                <div key={section.id} className="space-y-4">
                  {section.title && (
                    <h2 className="text-xl font-semibold text-foreground" data-testid={`heading-section-${section.id}`}>
                      {section.title}
                    </h2>
                  )}
                  
                  <div className="space-y-4 text-muted-foreground">
                    {section.content.map((paragraph, index) => (
                      <p key={index} className="text-justify leading-relaxed" data-testid={`text-${section.id}-${index}`}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-6 border-t">
              <div className="text-center space-y-1 text-sm text-muted-foreground">
                <p data-testid="text-pei-institution">Proyecto Educativo Institucional</p>
                <p className="mt-1" data-testid="text-pei-institution-name">IED. Oreste Sindici</p>
                <p className="mt-1" data-testid="text-pei-year">2024 - 2028</p>
              </div>
            </div>
          </div>
        </ScrollArea>
      </main>
    </div>
  );
}
