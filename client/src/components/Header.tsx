import { Link } from "wouter";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import logoImage from "@assets/Adobe Express - file_1761600268000.png";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [registerOpen, setRegisterOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    console.log('Register with username/password:', { username, password });
    setRegisterOpen(false);
  };

  const handleGoogleRegister = () => {
    console.log('Register with Google');
    setRegisterOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-chart-4 text-foreground shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link 
            href="/" 
            className="flex items-center gap-3 px-3 py-2 hover-elevate active-elevate-2 rounded-md"
            data-testid="link-home"
          >
            <img 
              src={logoImage} 
              alt="Escudo Institución Educativa Oreste Sindici" 
              className="w-12 h-12 object-contain"
            />
            <div className="hidden sm:block">
              <h1 className="font-semibold text-sm leading-tight text-foreground">INSTITUCIÓN EDUCATIVA</h1>
              <p className="text-xs opacity-90 text-foreground">Oreste Sindici</p>
            </div>
          </Link>
          
          <button
            onClick={() => setRegisterOpen(true)}
            className="px-6 min-h-9 rounded-md bg-chart-2 text-white font-medium hover-elevate active-elevate-2"
            data-testid="button-register"
          >
            Registrarse
          </button>
        </div>
      </div>

      <Dialog open={registerOpen} onOpenChange={setRegisterOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">Registrarse</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4 pt-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Usuario
              </label>
              <Input
                placeholder="Ingrese su usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                data-testid="input-register-username"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Contraseña
              </label>
              <Input
                type="password"
                placeholder="Ingrese su contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                data-testid="input-register-password"
              />
            </div>

            <Button
              className="w-full"
              onClick={handleRegister}
              data-testid="button-submit-register"
            >
              Registrarse
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  O
                </span>
              </div>
            </div>

            <Button
              variant="outline"
              className="w-full"
              onClick={handleGoogleRegister}
              data-testid="button-google-register"
            >
              <FcGoogle className="w-5 h-5 mr-2" />
              Continuar con Google
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </header>
  );
}
