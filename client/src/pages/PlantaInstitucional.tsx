import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, UserCheck, BookOpen, Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";

export default function PlantaInstitucional() {
  const [showDocentesPrimaria, setShowDocentesPrimaria] = useState(false);
  const [showDocentesSecundaria, setShowDocentesSecundaria] = useState(false);
  
  const staff = [
    { name: "Luz Jackelin Sanchez Solorzano", role: "Rectora", initials: "LJS" },
    { name: "Jose Fabian Agudelo Rodriguez", role: "Coordinador", initials: "JFAR" }
  ];

  const docentesPrimaria = [
    { name: "Jaqueline Salazar Alvarado", subject: "Transición", initials: "JSA" },
    { name: "Carlos Fernández Silva", subject: "2° Grado", initials: "CFS" },
    { name: "Ana Beatriz Torres", subject: "3° Grado", initials: "ABT" },
    { name: "Jorge Luis Mendoza", subject: "4° Grado", initials: "JLM" },
    { name: "Patricia Ramírez Castro", subject: "5° Grado", initials: "PRC" }
  ];

  const docentesSecundaria = [
    { name: "Diego Alejandro Martinez", subject: "601", initials: "DAM" },
    { name: "Jhonathan Chacon", subject: "602", initials: "JC" },
    { name: "Jesus Ivan Verano", subject: "603", initials: "JIV" },
    { name: "Diana Carolina Suárez", subject: "Ciencias Sociales", initials: "DCS" },
    { name: "Nelson Miranda", subject: "702", initials: "NM" },
    { name: "Janeth Rojas Lievano", subject: "703", initials: "JRL" },
    { name: "Cruz Maria Cruz Huertas", subject: "801", initials: "CMCH" },
    { name: "Carolina Amaya Bustos", subject: "802", initials: "CAB" },
    { name: "Martin Honorio Castro", subject: "803", initials: "MHC" },
    { name: "María Silva", subject: "901", initials: "MS" },
    { name: "José Ramírez", subject: "902", initials: "JR" },
    { name: "Laura Díaz", subject: "903", initials: "LD" },
    { name: "Pedro Mora", subject: "1001", initials: "PM" },
    { name: "Rosa Ortiz", subject: "1002", initials: "RO" },
    { name: "Juan Castro", subject: "1003", initials: "JC2" },
    { name: "Elena Vargas", subject: "1101", initials: "EV" },
    { name: "Mario Peña", subject: "1102", initials: "MP" },
    { name: "Sofia Mejía", subject: "1103", initials: "SM" }
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
              onClick={() => setShowDocentesPrimaria(true)}
              data-testid="card-docentes-primaria"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-chart-4 flex items-center justify-center mb-3">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Docentes Primaria</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-foreground mb-2">25</p>
                <p className="text-muted-foreground">
                  Profesionales especializados en educación básica primaria
                </p>
              </CardContent>
            </Card>

            <Card 
              className="hover-elevate cursor-pointer" 
              onClick={() => setShowDocentesSecundaria(true)}
              data-testid="card-docentes-secundaria"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-chart-4 flex items-center justify-center mb-3">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Docentes Secundaria</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-foreground mb-2">20</p>
                <p className="text-muted-foreground">
                  Profesionales especializados en educación secundaria
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

      <Dialog open={showDocentesPrimaria} onOpenChange={setShowDocentesPrimaria}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Docentes de Primaria</DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <p className="text-muted-foreground mb-6">
              Nuestro equipo de docentes de primaria está compuesto por profesionales comprometidos con la formación integral de los niños.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {docentesPrimaria.map((person) => (
                <Card key={person.name} className="hover-elevate">
                  <CardContent className="pt-4">
                    <div className="flex flex-col items-center text-center">
                      <Avatar className="w-16 h-16 mb-3">
                        <AvatarFallback className="bg-chart-2 text-white text-sm font-semibold">
                          {person.initials}
                        </AvatarFallback>
                      </Avatar>
                      <h4 className="font-semibold text-foreground text-sm">{person.name}</h4>
                      <p className="text-xs text-muted-foreground">{person.subject}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showDocentesSecundaria} onOpenChange={setShowDocentesSecundaria}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Docentes de Secundaria</DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <p className="text-muted-foreground mb-6">
              Nuestro equipo de docentes de secundaria está especializado en diferentes áreas del conocimiento.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {docentesSecundaria.map((person) => (
                <Card key={person.name} className="hover-elevate">
                  <CardContent className="pt-4">
                    <div className="flex flex-col items-center text-center">
                      <Avatar className="w-16 h-16 mb-3">
                        <AvatarFallback className="bg-chart-2 text-white text-sm font-semibold">
                          {person.initials}
                        </AvatarFallback>
                      </Avatar>
                      <h4 className="font-semibold text-foreground text-sm">{person.name}</h4>
                      <p className="text-xs text-muted-foreground">{person.subject}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
