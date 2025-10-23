import { Link } from "wouter";
import { BookOpen, FileText, Users, Newspaper, GraduationCap, Lightbulb } from "lucide-react";

interface NavButton {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  path: string;
}

const navigationButtons: NavButton[] = [
  {
    id: "plan-estudio",
    title: "Plan de Estudio",
    icon: BookOpen,
    color: "bg-black",
    path: "/plan-de-estudio"
  },
  {
    id: "manual-convivencia",
    title: "Manual de Convivencia",
    icon: FileText,
    color: "bg-destructive",
    path: "/manual-de-convivencia"
  },
  {
    id: "planta-institucional",
    title: "Planta Institucional",
    icon: Users,
    color: "bg-chart-4",
    path: "/planta-institucional"
  },
  {
    id: "noticias",
    title: "Noticias",
    icon: Newspaper,
    color: "bg-chart-1",
    path: "/noticias"
  },
  {
    id: "plataforma-notas",
    title: "Plataforma de Notas",
    icon: GraduationCap,
    color: "bg-chart-3",
    path: "/plataforma-de-notas"
  },
  {
    id: "proyectos",
    title: "Proyectos",
    icon: Lightbulb,
    color: "bg-chart-2",
    path: "/proyectos"
  }
];

export default function NavigationButtons() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Oferta Formativa de Oreste Sindici
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explora nuestros recursos educativos y servicios institucionales
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {navigationButtons.map((button) => (
            <Link key={button.id} href={button.path}>
              <a 
                className="flex flex-col items-center group"
                data-testid={`link-${button.id}`}
              >
                <div className={`
                  w-32 h-32 md:w-36 md:h-36 rounded-full ${button.color} 
                  flex items-center justify-center
                  transition-all duration-300 ease-out
                  group-hover:scale-110 group-hover:shadow-2xl
                  group-active:scale-105
                  shadow-lg
                `}>
                  <button.icon className="w-14 h-14 md:w-16 md:h-16 text-white" />
                </div>
                <h3 className="mt-6 text-lg md:text-xl font-semibold text-foreground text-center group-hover:text-primary transition-colors">
                  {button.title}
                </h3>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
