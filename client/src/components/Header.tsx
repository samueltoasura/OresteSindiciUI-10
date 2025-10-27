import { Link } from "wouter";
import logoImage from "@assets/Adobe Express - file_1761600268000.png";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-chart-4 text-foreground shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="hover-elevate active-elevate-2 rounded-md">
            <a className="flex items-center gap-3 px-3 py-2" data-testid="link-home">
              <img 
                src={logoImage} 
                alt="Escudo Institución Educativa Oreste Sindici" 
                className="w-12 h-12 object-contain"
              />
              <div className="hidden sm:block">
                <h1 className="font-semibold text-sm leading-tight text-foreground">INSTITUCIÓN EDUCATIVA</h1>
                <p className="text-xs opacity-90 text-foreground">Oreste Sindici</p>
              </div>
            </a>
          </Link>
          
          <button
            onClick={() => console.log('Registrarse clicked')}
            className="px-6 min-h-9 rounded-md bg-foreground text-background font-medium hover-elevate active-elevate-2"
            data-testid="button-register"
          >
            Registrarse
          </button>
        </div>
      </div>
    </header>
  );
}
