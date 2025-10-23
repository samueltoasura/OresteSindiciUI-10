import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import PlanDeEstudio from "@/pages/PlanDeEstudio";
import ManualDeConvivencia from "@/pages/ManualDeConvivencia";
import PlantaInstitucional from "@/pages/PlantaInstitucional";
import Noticias from "@/pages/Noticias";
import PlataformaDeNotas from "@/pages/PlataformaDeNotas";
import Proyectos from "@/pages/Proyectos";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/plan-de-estudio" component={PlanDeEstudio} />
      <Route path="/manual-de-convivencia" component={ManualDeConvivencia} />
      <Route path="/planta-institucional" component={PlantaInstitucional} />
      <Route path="/noticias" component={Noticias} />
      <Route path="/plataforma-de-notas" component={PlataformaDeNotas} />
      <Route path="/proyectos" component={Proyectos} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
