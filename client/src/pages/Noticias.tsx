import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Newspaper, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";

interface Noticia {
  title: string;
  date: string;
  icon: LucideIcon;
  content: string;
}

export default function Noticias() {
  const noticias: Noticia[] = [];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="h-48 bg-chart-1 flex items-center justify-center">
        <div className="text-center">
          <Newspaper className="w-16 h-16 text-white mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-white">Noticias</h1>
        </div>
      </div>

      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Últimas Noticias</h2>
            <p className="text-lg text-muted-foreground">
              Mantente informado sobre los eventos y logros más recientes de nuestra institución.
            </p>
          </div>

          <div className="grid gap-6">
            {noticias.map((noticia, index) => (
              <Card key={index} className="hover-elevate">
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
                  <p className="text-muted-foreground">{noticia.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>

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

      <Footer />
    </div>
  );
}
