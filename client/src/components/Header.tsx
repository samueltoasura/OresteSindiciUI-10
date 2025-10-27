import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Inicio", path: "/" },
    { name: "Nosotros", path: "#" },
    { name: "Admisiones", path: "#" },
    { name: "Contacto", path: "#" }
  ];

  return (
    <header className="sticky top-0 z-50 bg-chart-4 text-foreground shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <Link href="/" className="hover-elevate active-elevate-2 rounded-md">
            <a className="flex items-center gap-3 px-3 py-2" data-testid="link-home">
              <div className="w-10 h-10 bg-foreground rounded-full flex items-center justify-center">
                <span className="text-background font-bold text-lg">OS</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="font-semibold text-sm leading-tight text-foreground">INSTITUCIÓN EDUCATIVA</h1>
                <p className="text-xs opacity-90 text-foreground">Oreste Sindici</p>
              </div>
            </a>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link key={item.name} href={item.path}>
                <a 
                  className="px-4 py-2 rounded-md text-sm font-medium text-foreground hover-elevate active-elevate-2"
                  data-testid={`link-${item.name.toLowerCase()}`}
                >
                  {item.name}
                </a>
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md hover-elevate active-elevate-2"
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-foreground/20">
          <nav className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <Link key={item.name} href={item.path}>
                <a 
                  className="block px-4 py-2 rounded-md text-sm font-medium text-foreground hover-elevate active-elevate-2"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-${item.name.toLowerCase()}`}
                >
                  {item.name}
                </a>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
