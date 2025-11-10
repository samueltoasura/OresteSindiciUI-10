import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, UserCheck, BookOpen, Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";

export default function PlantaInstitucional() {
  const [showDocentes, setShowDocentes] = useState(false);
  const staff = [
    { name: "Luz Jackelin Sanchez Solorzano", role: "Rectora", initials: "LJS" },
    { name: "Jose Fabian Agudelo Rodriguez", role: "Coordinador", initials: "JFAR" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="h-48 bg-chart-4 flex items-center justify-center">
        <div className="text-center">
          <Users className="w-16 h-16 text-white mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-white">Planta Institucional</h1>
        </div>
      </div>

      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Nuestro Equipo</h2>
            <p className="text-lg text-muted-foreground">
              Contamos con un equipo de profesionales comprometidos con la excelencia educativa 
              y el desarrollo integral de nuestros estudiantes.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Directivos</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {staff.map((person) => (
                <Card key={person.name} className="hover-elevate">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <Avatar className="w-20 h-20 mb-4">
                        <AvatarFallback className="bg-chart-4 text-white text-lg font-semibold">
                          {person.initials}
                        </AvatarFallback>
                      </Avatar>
                      <h4 className="font-semibold text-foreground">{person.name}</h4>
                      <p className="text-sm text-muted-foreground">{person.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card 
              className="hover-elevate cursor-pointer" 
              onClick={() => setShowDocentes(true)}
              data-testid="card-docentes"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-chart-4 flex items-center justify-center mb-3">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Docentes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-foreground mb-2">45</p>
                <p className="text-muted-foreground">
                  Profesionales especializados en diferentes áreas del conocimiento
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-chart-4 flex items-center justify-center mb-3">
                  <UserCheck className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Personal de Apoyo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-foreground mb-2">12</p>
                <p className="text-muted-foreground">
                  Psicólogos, orientadores y personal especializado
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-chart-4 flex items-center justify-center mb-3">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Personal Administrativo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-foreground mb-2">8</p>
                <p className="text-muted-foreground">
                  Equipo dedicado a la gestión y servicios institucionales
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />

      <Dialog open={showDocentes} onOpenChange={setShowDocentes}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Docentes</DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <p className="text-muted-foreground mb-4">
              Nuestro equipo de 45 docentes está compuesto por profesionales altamente calificados y comprometidos con la excelencia educativa.
            </p>
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Áreas de conocimiento:</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Matemáticas y Ciencias Exactas</li>
                <li>Ciencias Naturales y Educación Ambiental</li>
                <li>Lenguaje y Literatura</li>
                <li>Ciencias Sociales e Historia</li>
                <li>Educación Física y Deportes</li>
                <li>Artes y Cultura</li>
                <li>Tecnología e Informática</li>
                <li>Idiomas Extranjeros</li>
              </ul>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
