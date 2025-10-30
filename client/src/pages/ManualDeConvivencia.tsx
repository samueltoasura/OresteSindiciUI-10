import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookOpen, ChevronRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface Chapter {
  id: string;
  title: string;
  articles?: Article[];
}

interface Article {
  id: string;
  title: string;
  content: string[];
}

interface Title {
  id: string;
  title: string;
  chapters: Chapter[];
}

const manualContent: Title[] = [
  {
    id: "preamble",
    title: "PREÁMBULO",
    chapters: [{
      id: "preamble-content",
      title: "",
      articles: [{
        id: "preamble-intro",
        title: "",
        content: [
          "El consejo Directivo de la IED. ORESTE SINDICI del municipio de Nilo Cundinamarca como instancia directiva de participación de la comunidad educativa y de orientación académica y administrativa de la institución en sesión ordinaria del día 16 de marzo de 2022, estudió y APROBÓ la ACTUALIZACIÓN del texto del Manual de convivencia de la IED Oreste Sindici, el cual había sido ADOPTADO según acta No. 023, el día 24 de abril de 2017.",
          "La convivencia escolar en la IED. Oreste Sindici tiene un enfoque eminentemente FORMATIVO, privilegiando el ejercicio de la ciudadanía a partir de la enseñanza y práctica de conocimientos, habilidades y valores que permitan una convivencia pacífica y armoniosa con los otros(as), construyendo relaciones de respeto mutuo y solidaridad recíproca que faciliten el cumplimiento de los objetivos educativos en un clima que propicie el desarrollo integral de los estudiantes."
        ]
      }]
    }]
  },
  {
    id: "titulo-1",
    title: "TÍTULO I - PRINCIPIOS LEGALES Y RESPONSABILIDADES",
    chapters: [
      {
        id: "cap-1-1",
        title: "CAPÍTULO 1 - PRINCIPIOS LEGALES",
        articles: [
          {
            id: "art-6",
            title: "ARTÍCULO 6. Principio de favorabilidad",
            content: [
              "Según el Artículo 29 de la Constitución Política de Colombia: El debido proceso se aplicará a toda clase de actuaciones judiciales y administrativas. Nadie podrá ser juzgado sino conforme a leyes preexistentes al acto que se le imputa, ante juez o tribunal competente y con observancia de la plenitud de las formas propias de cada juicio.",
              "En materia penal, la ley permisiva o favorable, aun cuando sea posterior, se aplicará de preferencia a la restrictiva o desfavorable. Toda persona se presume inocente mientras no se la haya declarado judicialmente culpable."
            ]
          },
          {
            id: "art-7",
            title: "ARTÍCULO 7. Principio de publicidad",
            content: [
              "Todo proceso sancionatorio adelantado dentro de la Comunidad Educativa, contará con la debida garantía de publicidad y de conocimiento para las partes interesadas, no pudiendo existir proceso y no habiendo situaciones en firme, mientras no sean debidamente notificadas."
            ]
          }
        ]
      },
      {
        id: "cap-1-2",
        title: "CAPÍTULO 2 - RESPONSABILIDADES",
        articles: [
          {
            id: "art-8",
            title: "ARTÍCULO 8. Responsabilidades de los padres de familia",
            content: [
              "Según el artículo 53 del Decreto 1965 de 2013, la familia como núcleo fundamental de la sociedad es parte esencial del fortalecimiento de la formación para la ciudadanía y el ejercicio de los derechos humanos, sexuales y reproductivos.",
              "• Matricular oportunamente a sus hijos en establecimientos educativos debidamente reconocidos por el Estado",
              "• Proveer a sus hijos espacios y ambientes en el hogar, que generen confianza, ternura, cuidado y protección",
              "• Contribuir en la construcción de un clima de respeto, tolerancia y responsabilidad mutua",
              "• Comunicar oportunamente las irregularidades de que tengan conocimiento",
              "• Acompañar de forma permanente y activa a sus hijos en el proceso pedagógico"
            ]
          },
          {
            id: "art-9",
            title: "ARTÍCULO 9. Responsabilidades de los estudiantes Orestianos(as)",
            content: [
              "• Conocer y acatar el Manual de Convivencia",
              "• Asistir puntualmente al desarrollo de las clases y actividades programadas",
              "• Portar permanentemente el carné estudiantil",
              "• Presentarse con el uniforme correspondiente en condiciones de aseo y decoro",
              "• Cumplir con las tareas, lecciones, proyectos y trabajos señalados",
              "• Cuidar los recursos y observar un comportamiento adecuado"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "titulo-2",
    title: "TÍTULO II - PRINCIPIOS RECTORES DE LA CONVIVENCIA ESCOLAR",
    chapters: [
      {
        id: "cap-2-1",
        title: "CAPÍTULO 1 - PRINCIPIOS RECTORES",
        articles: [
          {
            id: "art-10",
            title: "ARTÍCULO 10. Principios del sistema",
            content: [
              "De acuerdo a la ley 1620 del 15 de marzo del 2013, el manual de convivencia orestiano desarrolla la convivencia escolar, rigiéndose por los siguientes principios que hacen parte del Sistema Nacional de Convivencia Escolar."
            ]
          },
          {
            id: "art-11",
            title: "ARTÍCULO 11. Participación",
            content: [
              "Las entidades y establecimientos educativos deben garantizar la participación activa para la coordinación y armonización de acciones, en el ejercicio de sus respectivas funciones."
            ]
          },
          {
            id: "art-12",
            title: "ARTÍCULO 12. Corresponsabilidad",
            content: [
              "La familia, los establecimientos educativos, la sociedad y el Estado son corresponsables de la formación ciudadana, la promoción de la convivencia escolar y la educación para el ejercicio de los derechos humanos."
            ]
          },
          {
            id: "art-13",
            title: "ARTÍCULO 13. Autonomía",
            content: [
              "Los individuos, entidades territoriales e instituciones educativas son autónomos en concordancia con la Constitución Política y dentro de los límites fijados por las leyes, normas y disposiciones."
            ]
          },
          {
            id: "art-14",
            title: "ARTÍCULO 14. Diversidad",
            content: [
              "El Sistema se fundamenta en el reconocimiento, respeto y valoración de la dignidad propia y ajena, sin discriminación por razones de género, orientación o identidad sexual, etnia o condición física, social o cultural."
            ]
          },
          {
            id: "art-15",
            title: "ARTÍCULO 15. Integralidad",
            content: [
              "La filosofía del sistema será integral y estará orientada hacia la promoción de la educación para la autorregulación del individuo, de la educación para la sanción social y de la educación en el respeto a la Constitución y las leyes."
            ]
          }
        ]
      },
      {
        id: "cap-2-2",
        title: "CAPÍTULO 2 - PROCESO DE ADMISIÓN Y MATRÍCULA",
        articles: [
          {
            id: "art-16",
            title: "ARTÍCULO 16. La matrícula",
            content: [
              "Es un acuerdo para la prestación de servicios y un compromiso bilateral, firmado entre los padres del o la estudiante, su representante legal o acudientes y el representante legal de la Institución en beneficio del o la estudiante.",
              "Con la firma de la matrícula, el o la estudiante y sus padres entran a formar parte de la familia Orestiana con todos los derechos y obligaciones que ello implica."
            ]
          },
          {
            id: "art-17",
            title: "ARTÍCULO 17. Estudiantes nuevos",
            content: [
              "Documentos requeridos:",
              "• Registro civil de nacimiento o NUIP",
              "• Fotocopia de la Tarjeta de Identidad a partir de los 7 años",
              "• Boletín de calificaciones final original",
              "• Certificado de estudios de los grados anteriores",
              "• Paz y salvo de la institución de la cual proviene",
              "• Certificado de la entidad prestadora de salud",
              "• Carné de vacunación (Preescolar)"
            ]
          },
          {
            id: "art-18",
            title: "ARTÍCULO 18. Pérdida de la calidad de estudiante orestiano",
            content: [
              "• Finalización del año escolar sin renovación de la matrícula",
              "• Cuando se haya utilizado medios fraudulentos para matricularse",
              "• Cuando se retira voluntariamente de la Institución",
              "• Cuando mediante resolución rectoral, luego del debido proceso, así se disponga"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "titulo-4",
    title: "TÍTULO IV - GOBIERNO ESCOLAR",
    chapters: [
      {
        id: "cap-4-1",
        title: "CAPÍTULO 1 - CONSEJO DIRECTIVO",
        articles: [
          {
            id: "art-20",
            title: "ARTÍCULO 20. Conformación",
            content: [
              "Es el máximo órgano del Gobierno escolar en el cual confluye la participación democrática de la comunidad educativa.",
              "Conformación:",
              "• La rectora quien lo presidirá y convocará",
              "• Dos representantes de los Docentes",
              "• Dos Representantes de los padres de familia",
              "• Un estudiante del grado undécimo",
              "• Un representante de los egresados",
              "• Un representante del Sector Productivo"
            ]
          },
          {
            id: "art-21",
            title: "ARTÍCULO 21. Perfiles de los integrantes",
            content: [
              "Los representantes deben reunir los siguientes requisitos:",
              "• Demostrar sentido de pertenencia y servicio",
              "• Identificarse con la filosofía de la Institución",
              "• Disponer del tiempo necesario para las reuniones",
              "• Ejercer liderazgo positivo"
            ]
          }
        ]
      },
      {
        id: "cap-4-2",
        title: "CAPÍTULO 2 - CONSEJO ACADÉMICO",
        articles: [
          {
            id: "art-23",
            title: "ARTÍCULO 23. Conformación",
            content: [
              "Es el órgano del Gobierno escolar encargado de la organización académica y curricular.",
              "Conformado por:",
              "• La rectora quien lo preside",
              "• Coordinador general",
              "• Docentes jefes de área"
            ]
          },
          {
            id: "art-24",
            title: "ARTÍCULO 24. Funciones",
            content: [
              "• Organizar y orientar la acción pedagógica",
              "• Designar docentes para comités de evaluación",
              "• Estudiar ajustes e innovaciones a los currículos",
              "• Supervisar seguimientos de estudiantes con dificultades académicas"
            ]
          }
        ]
      },
      {
        id: "cap-4-3",
        title: "CAPÍTULO 3 - COMITÉ DE CONVIVENCIA ESCOLAR",
        articles: [
          {
            id: "art-25",
            title: "ARTÍCULO 25. Conformación",
            content: [
              "El comité escolar de convivencia estará conformado por:",
              "• El Rector(a), quien preside el comité",
              "• El Coordinador(a) General",
              "• Un(a) docente que lidere procesos de convivencia escolar",
              "• El personero(a) estudiantil",
              "• Un representante de los Padres de familia",
              "• El presidente(a) del consejo de estudiantes"
            ]
          },
          {
            id: "art-26",
            title: "ARTÍCULO 26. Funciones",
            content: [
              "• Identificar, documentar, analizar y resolver conflictos",
              "• Liderar acciones que fomenten la convivencia",
              "• Promover la vinculación a estrategias de construcción de ciudadanía",
              "• Convocar espacios de conciliación",
              "• Activar la Ruta de Atención Integral para la Convivencia Escolar"
            ]
          }
        ]
      },
      {
        id: "cap-4-4",
        title: "CAPÍTULO 4 - CONSEJO DE ESTUDIANTES",
        articles: [
          {
            id: "art-27",
            title: "ARTÍCULO 27. Definición",
            content: [
              "Es el organismo participativo de los estudiantes, que tiene como función especial escuchar, analizar, y hacer propuestas de carácter general, en favor de todo el Institución.",
              "Está integrado por un(a) representante de cada grado, de Tercero a Once."
            ]
          },
          {
            id: "art-28",
            title: "ARTÍCULO 28. Perfil",
            content: [
              "• Antigüedad en la Institución mínima de 1 año",
              "• Demostrar sentido de pertenencia",
              "• Ser aceptado y apoyado por los estudiantes de su grado",
              "• Demostrar buen rendimiento académico y disciplinario"
            ]
          }
        ]
      },
      {
        id: "cap-4-5",
        title: "CAPÍTULO 5 - PERSONERO ESTUDIANTIL",
        articles: [
          {
            id: "art-30",
            title: "ARTÍCULO 30. Definición",
            content: [
              "Es un estudiante del grado Once, elegido democrática y participativamente por todos los estudiantes del plantel, por el sistema de mayoría simple y mediante voto universal y secreto."
            ]
          },
          {
            id: "art-31",
            title: "ARTÍCULO 31. Perfil del personero Orestiano",
            content: [
              "• Mínimo 2 años de antigüedad en la Institución",
              "• Buen desempeño académico y disciplinario",
              "• No haber iniciado el año escolar con compromiso de convivencia",
              "• Conocer, cumplir y aplicar el manual de convivencia",
              "• Demostrar interés por la filosofía del Institución"
            ]
          },
          {
            id: "art-32",
            title: "ARTÍCULO 32. Funciones",
            content: [
              "• Representar a los estudiantes en la solución de problemas",
              "• Promover el ejercicio de los derechos y el cumplimiento de los deberes estudiantiles",
              "• Recibir y evaluar los reclamos presentados por los alumnos",
              "• Apelar ante el Consejo Directivo sus decisiones",
              "• Fiscalizar las reuniones del consejo de estudiantes"
            ]
          }
        ]
      },
      {
        id: "cap-4-6",
        title: "CAPÍTULO 6 - CONTRALORÍA ESCOLAR",
        articles: [
          {
            id: "art-33",
            title: "ARTÍCULO 33. Definición",
            content: [
              "Dando cumplimiento a la Ordenanza 182 de 2013 de la Asamblea de Cundinamarca, la Contraloría Escolar será la Encargada de promover y actuar como veedora del buen uso de los recursos y de los bienes públicos de la institución educativa."
            ]
          },
          {
            id: "art-34",
            title: "ARTÍCULO 34. Objetivos",
            content: [
              "• Incrementar las competencias de los estudiantes en el ejercicio del control social",
              "• Lograr el reconocimiento de los jóvenes como actores de la cultura política",
              "• Contribuir a la eficacia de la transparencia en la gestión educativa",
              "• Generar una cultura participativa e incluyente"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "titulo-5",
    title: "TÍTULO V - DERECHOS Y RESPONSABILIDADES",
    chapters: [
      {
        id: "cap-5-1",
        title: "CAPÍTULO 1 - DE LOS PADRES DE FAMILIA",
        articles: [
          {
            id: "art-41",
            title: "ARTÍCULO 41. Derechos de los padres de familia",
            content: [
              "Los padres de familia tienen derecho a:",
              "• Conocer el manual de convivencia y el PEI",
              "• Recibir información sobre el rendimiento académico y comportamiento",
              "• Conocer las estrategias pedagógicas de la Institución",
              "• Participar en las instancias de participación",
              "• Ser atendidos oportunamente por directivos y docentes"
            ]
          },
          {
            id: "art-42",
            title: "ARTÍCULO 42. Deberes de los padres de familia",
            content: [
              "• Matricular oportunamente a sus hijos",
              "• Proveer espacios y ambientes en el hogar que generen confianza",
              "• Contribuir en la construcción de un clima de respeto y tolerancia",
              "• Comunicar oportunamente las irregularidades",
              "• Acompañar de forma permanente y activa a sus hijos",
              "• Cumplir con las condiciones y obligaciones del manual de convivencia"
            ]
          }
        ]
      },
      {
        id: "cap-5-2",
        title: "CAPÍTULO 2 - DE LOS ESTUDIANTES",
        articles: [
          {
            id: "art-48",
            title: "ARTÍCULO 48. Perfil del estudiante orestiano",
            content: [
              "El estudiante Orestiano se caracteriza por ser una persona:",
              "• Respetuosa de sí misma y de los demás",
              "• Responsable con sus deberes académicos y convivenciales",
              "• Comprometida con su formación integral",
              "• Con sentido de pertenencia institucional",
              "• Participativa y proactiva en las actividades escolares"
            ]
          },
          {
            id: "art-49",
            title: "ARTÍCULO 49. Deberes y responsabilidades",
            content: [
              "• Conocer y acatar el Manual de Convivencia",
              "• Asistir puntualmente a clases y actividades",
              "• Portar permanentemente el carné estudiantil",
              "• Presentarse con el uniforme correspondiente",
              "• Cumplir con tareas y trabajos académicos",
              "• Respetar a todos los miembros de la comunidad educativa",
              "• Cuidar los bienes y recursos institucionales"
            ]
          },
          {
            id: "art-50",
            title: "ARTÍCULO 50. Presentación personal y porte de uniformes",
            content: [
              "Uniforme de diario para mujeres: Jardinera con pechera y falda de siete pliegues en tela escocesa a cuadros pequeños en colores blanco y azul. Camibuso blanco con cuello azul oscuro. Medias totalmente blancas a media pierna, zapato colegial negro.",
              "Uniforme de diario para Hombres: Camibuso blanco con cuello azul oscuro. Pantalón de lino azul oscuro, bota recta portado a la cintura, cinturón negro o azul oscuro, medias de color azul oscuro y zapato colegial negro.",
              "Uniforme para educación física: Buso blanco cuello redondo con estampado del escudo. Pantalón de sudadera azul oscuro con franjas amarillo y blanco, medias blancas deportivas, tenis totalmente blancos."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "titulo-6",
    title: "TÍTULO VI - NORMAS Y PROCEDIMIENTOS",
    chapters: [
      {
        id: "cap-6-1",
        title: "CAPÍTULO 1 - CONCEPTOS Y DEFINICIONES",
        articles: [
          {
            id: "art-51",
            title: "ARTÍCULO 51. Definiciones según Decreto 1965 de 2013",
            content: [
              "Conflictos: Situaciones que se caracterizan porque hay una incompatibilidad real o percibida entre una o varias personas frente a sus intereses.",
              "Agresión escolar: Toda acción realizada por uno o varios integrantes de la comunidad educativa que busca afectar negativamente a otros miembros.",
              "Acoso escolar: Conducta negativa, intencional metódica y sistemática de agresión, intimidación, humillación o ridiculización.",
              "Violencia sexual: Todo acto o comportamiento de tipo sexual ejercido sobre un niño, niña o adolescente, utilizando la fuerza o cualquier forma de coerción."
            ]
          }
        ]
      },
      {
        id: "cap-6-2",
        title: "CAPÍTULO 2 - NORMAS",
        articles: [
          {
            id: "art-52",
            title: "ARTÍCULO 52. Fundamento de las normas",
            content: [
              "Las normas son los acuerdos básicos para la convivencia y el buen funcionamiento de la Institución que favorecen el desarrollo integral del proceso formativo.",
              "Las normas encuentran su fundamento en los principios, en los deberes, derechos y funciones enunciados, en la propuesta educativa del Institución y en el P.E.I."
            ]
          },
          {
            id: "art-53",
            title: "ARTÍCULO 53. Normas para la cafetería y restaurante escolar",
            content: [
              "• Hacer la fila en los lugares asignados",
              "• Mantener el orden en la fila, respetar el turno",
              "• Ser cordiales al solicitar el servicio",
              "• No dirigirse a la cafetería una vez suene el timbre",
              "• Hacer uso de las canecas",
              "• Mantener en orden y aseo la zona de la cafetería"
            ]
          },
          {
            id: "art-54",
            title: "ARTÍCULO 54. Normas para el uso de la sala de sistemas",
            content: [
              "• Hacer uso de ella en clases previstas para su servicio",
              "• No se permite ingerir alimentos o bebidas",
              "• Se puede recurrir a ella solicitándola con antelación",
              "• Se requiere de buenos modales y colaboración",
              "• No se permite la instalación de software no autorizado",
              "• Solo se permite el ingreso a páginas web autorizadas por el docente"
            ]
          },
          {
            id: "art-55",
            title: "ARTÍCULO 55. Normas para el uso del laboratorio",
            content: [
              "• Se exige portar elementos de protección personal (bata, lentes, guantes)",
              "• No se permite fumar, introducir o consumir alimentos y bebidas",
              "• No se permite ingerir o inhalar sustancias o reactivos químicos",
              "• Se prohíbe desechar sustancias sin seguir las normas para residuos peligrosos",
              "• Abstenerse de practicar cualquier tipo de juego dentro del laboratorio"
            ]
          },
          {
            id: "art-56",
            title: "ARTÍCULO 56. Reglamento para el uso de tabletas electrónicas",
            content: [
              "• Cada estudiante recibirá la tableta numerada según su número de lista",
              "• Cualquier daño físico será responsabilidad del estudiante",
              "• Las tabletas se conectarán en clase solo cuando el profesor lo indique",
              "• No se permite el acceso a contenidos no autorizados",
              "• No se permite la descarga de aplicaciones no autorizadas",
              "• El uso de tabletas se limita al trabajo en la institución"
            ]
          }
        ]
      },
      {
        id: "cap-6-3",
        title: "CAPÍTULO 3 - MEDIDAS PEDAGÓGICAS",
        articles: [
          {
            id: "art-57",
            title: "ARTÍCULO 57. Incumplimiento a los deberes",
            content: [
              "• Falta de puntualidad en el horario de ingreso",
              "• Inasistencia injustificada al colegio",
              "• Incumplimiento de los deberes académicos",
              "• No entregar oportunamente las citaciones o comunicados",
              "• No utilizar el uniforme en los días que corresponda",
              "• Indebida presentación personal",
              "• Ausentarse del salón sin autorización",
              "• Dañar intencionalmente bienes o elementos del colegio"
            ]
          },
          {
            id: "art-58",
            title: "ARTÍCULO 58. Medidas pedagógicas",
            content: [
              "Las Medidas pedagógicas son la consecuencia de una conducta que constituye infracción del Manual de Convivencia.",
              "Los correctivos son de carácter educativo y deben garantizar el respeto de los derechos de todos los integrantes de la comunidad educativa.",
              "Tendrán una escala de valor ascendente frente al incumplimiento de deberes y responsabilidades."
            ]
          }
        ]
      },
      {
        id: "cap-6-4",
        title: "CAPÍTULO 4 - IDENTIFICACIÓN Y CLASIFICACIÓN DE SITUACIONES",
        articles: [
          {
            id: "art-60",
            title: "ARTÍCULO 60. Situaciones Tipo I",
            content: [
              "Corresponden a este tipo los conflictos manejados inadecuadamente y aquellas situaciones esporádicas que inciden negativamente en el clima escolar, y que en ningún caso generan daños al cuerpo o a la salud."
            ]
          },
          {
            id: "art-61",
            title: "ARTÍCULO 61. Protocolo para Situaciones Tipo I",
            content: [
              "• Mediar de manera pedagógica con las personas involucradas",
              "• Fijar la forma de solución de manera imparcial y equitativa",
              "• Establecer compromisos y hacer seguimiento",
              "• Dejar constancia en el observador del estudiante"
            ]
          },
          {
            id: "art-62",
            title: "ARTÍCULO 62. Situaciones Tipo II",
            content: [
              "Corresponden a este tipo las situaciones de agresión escolar, acoso escolar y ciberacoso, que no revistan las características de la comisión de un delito y que cumplan con cualquiera de las siguientes características:",
              "• Que se presenten de manera repetida o sistemática",
              "• Que causen daños al cuerpo o a la salud sin generar incapacidad alguna"
            ]
          },
          {
            id: "art-63",
            title: "ARTÍCULO 63. Protocolo para Situaciones Tipo II",
            content: [
              "• Brindar atención inmediata a las personas afectadas",
              "• Remitir la situación a las instancias correspondientes",
              "• Adoptar las medidas para proteger a los involucrados",
              "• Generar espacios de diálogo para exponer y precisar lo acontecido",
              "• Determinar acciones restaurativas para la reparación de los daños causados"
            ]
          },
          {
            id: "art-64",
            title: "ARTÍCULO 64. Acciones Restaurativas",
            content: [
              "Son acciones que buscan reparar el daño causado y restablecer las relaciones entre las partes afectadas.",
              "Incluyen: reflexión sobre los hechos, disculpas públicas, trabajos comunitarios, compromisos de no repetición, entre otras."
            ]
          },
          {
            id: "art-65",
            title: "ARTÍCULO 65. Situaciones Tipo III",
            content: [
              "Corresponden a este tipo las situaciones de agresión escolar que sean constitutivas de presuntos delitos contra la libertad, integridad y formación sexual.",
              "También incluyen situaciones que causen daños al cuerpo o a la salud física o mental de cualquier miembro de la comunidad educativa."
            ]
          },
          {
            id: "art-66",
            title: "ARTÍCULO 66. Protocolo para Situaciones Tipo III",
            content: [
              "• Informar de manera inmediata a la Policía Nacional",
              "• Informar a los padres o acudientes de las personas involucradas",
              "• Citar a los integrantes del Comité de Convivencia Escolar",
              "• Adoptar las medidas propias para proteger a la víctima y al agresor",
              "• Realizar el reporte en el Sistema de Información Unificado de Convivencia Escolar"
            ]
          },
          {
            id: "art-67",
            title: "ARTÍCULO 67. Ruta de atención integral",
            content: [
              "La Ruta de Atención Integral para la Convivencia Escolar define los procesos y los protocolos que deberán seguir las entidades e instituciones para la promoción, prevención, atención y seguimiento de situaciones que afecten la convivencia escolar.",
              "Componentes: Promoción, Prevención, Atención y Seguimiento."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "titulo-7",
    title: "TÍTULO VII - PROCEDIMIENTOS DE AJUSTES Y ACTUALIZACIÓN",
    chapters: [
      {
        id: "cap-7-1",
        title: "CAPÍTULO 1 - PROCEDIMIENTO DE AJUSTES",
        articles: [
          {
            id: "art-68",
            title: "ARTÍCULO 68. Procedimiento",
            content: [
              "El manual de convivencia podrá ser ajustado anualmente, teniendo en cuenta las sugerencias de la comunidad educativa y los cambios normativos que así lo requieran.",
              "Los ajustes serán aprobados por el Consejo Directivo."
            ]
          }
        ]
      },
      {
        id: "cap-7-2",
        title: "CAPÍTULO 2 - PROCEDIMIENTO DE ACTUALIZACIÓN",
        articles: [
          {
            id: "art-69",
            title: "ARTÍCULO 69. Actualización",
            content: [
              "La actualización del manual se realizará cuando existan cambios sustanciales en la normatividad o cuando la comunidad educativa así lo considere necesario.",
              "Deberá contar con la participación de todos los estamentos de la comunidad educativa."
            ]
          }
        ]
      },
      {
        id: "cap-7-3",
        title: "CAPÍTULO 3 - DIVULGACIÓN DE LA INFORMACIÓN",
        articles: [
          {
            id: "art-70",
            title: "ARTÍCULO 70. Divulgación",
            content: [
              "El manual de convivencia será divulgado a toda la comunidad educativa al inicio de cada año escolar.",
              "Estará disponible en la página web institucional y en forma física en la biblioteca del plantel.",
              "Cada estudiante y padre de familia deberá firmar el acta de conocimiento y aceptación del manual."
            ]
          }
        ]
      }
    ]
  }
];

export default function ManualDeConvivencia() {
  const [selectedSection, setSelectedSection] = useState<string>("preamble");
  const [isSidebarOpen, setIsSidebarOpen] = useState<{ [key: string]: boolean }>({});

  const handleTitleClick = (titleId: string) => {
    setSelectedSection(titleId);
    setIsSidebarOpen(prev => ({ ...prev, [titleId]: !prev[titleId] }));
  };

  const getCurrentContent = () => {
    for (const title of manualContent) {
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
    return manualContent[0];
  };

  const currentContent = getCurrentContent();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <div className="bg-gradient-to-r from-primary via-primary/90 to-primary/80 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <BookOpen className="w-12 h-12 text-primary-foreground" data-testid="icon-book" />
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground" data-testid="heading-main-title">
              Manual de Convivencia
            </h1>
          </div>
          <p className="text-xl text-primary-foreground/90 text-center max-w-3xl mx-auto" data-testid="text-subtitle">
            IED. ORESTE SINDICI - "Construyendo Ciudadanía para Convivir en Paz"
          </p>
        </div>
      </div>

      <div className="flex-1 flex">
        <aside className="w-80 border-r bg-card">
          <ScrollArea className="h-[calc(100vh-20rem)]">
            <div className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <Home className="w-5 h-5 text-muted-foreground" data-testid="icon-home" />
                <h2 className="font-semibold text-lg" data-testid="heading-toc">Tabla de Contenidos</h2>
              </div>
              
              <nav className="space-y-2">
                {manualContent.map((title) => (
                  <Collapsible
                    key={title.id}
                    open={isSidebarOpen[title.id]}
                  >
                    <CollapsibleTrigger asChild>
                      <Button
                        variant={selectedSection === title.id ? "default" : "ghost"}
                        className="w-full justify-between text-left font-semibold"
                        onClick={() => handleTitleClick(title.id)}
                        data-testid={`button-title-${title.id}`}
                      >
                        <span className="line-clamp-2">{title.title}</span>
                        <ChevronRight className={`w-4 h-4 transition-transform ${isSidebarOpen[title.id] ? 'rotate-90' : ''}`} />
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="ml-4 mt-2 space-y-2">
                      {title.chapters.map((chapter) => (
                        <div key={chapter.id}>
                          {chapter.title && (
                            <Button
                              variant={selectedSection === chapter.id ? "secondary" : "ghost"}
                              className="w-full justify-start text-left text-sm"
                              onClick={() => setSelectedSection(chapter.id)}
                              data-testid={`button-chapter-${chapter.id}`}
                            >
                              {chapter.title}
                            </Button>
                          )}
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
          <ScrollArea className="h-[calc(100vh-20rem)]">
            <div className="max-w-4xl mx-auto p-8 md:p-12">
              <div className="bg-card rounded-lg border p-8 md:p-12 shadow-sm">
                <h2 className="text-3xl font-bold mb-6 text-foreground" data-testid="text-current-title">
                  {currentContent.title}
                </h2>
                <Separator className="mb-8" />

                {currentContent.chapters.map((chapter) => (
                  <div key={chapter.id} className="mb-12" data-testid={`chapter-${chapter.id}`}>
                    {chapter.title && (
                      <h3 className="text-2xl font-semibold mb-6 text-foreground" data-testid={`heading-chapter-${chapter.id}`}>
                        {chapter.title}
                      </h3>
                    )}

                    {chapter.articles?.map((article) => (
                      <div key={article.id} className="mb-8" data-testid={`article-${article.id}`}>
                        {article.title && (
                          <h4 className="text-xl font-semibold mb-4 text-foreground" data-testid={`heading-article-${article.id}`}>
                            {article.title}
                          </h4>
                        )}
                        <div className="space-y-4 text-muted-foreground leading-relaxed">
                          {article.content.map((paragraph, idx) => (
                            <p key={idx} className={paragraph.startsWith('•') ? 'ml-4' : ''} data-testid={`text-content-${article.id}-${idx}`}>
                              {paragraph}
                            </p>
                          ))}
                        </div>
                        {article.id !== chapter.articles?.[chapter.articles.length - 1]?.id && (
                          <Separator className="mt-6" data-testid={`separator-${article.id}`} />
                        )}
                      </div>
                    ))}
                  </div>
                ))}

                <div className="mt-12 pt-6 border-t text-center text-sm text-muted-foreground" data-testid="footer-info">
                  <p data-testid="text-institution-name">Manual de Convivencia IED. Oreste Sindici</p>
                  <p className="mt-1" data-testid="text-update-year">Actualización 2023</p>
                </div>
              </div>
            </div>
          </ScrollArea>
        </main>
      </div>

      <Footer />
    </div>
  );
}
