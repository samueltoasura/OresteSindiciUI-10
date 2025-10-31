import { Phone, Mail, MapPin, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <p className="text-sm opacity-90">
                  Calle Principal #123<br />
                  Ciudad, País
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <p className="text-sm opacity-90">+123 456 7890</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <p className="text-sm opacity-90">info@orestesindici.edu</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm opacity-90 hover-elevate active-elevate-2 inline-block px-2 py-1 rounded-md" data-testid="link-footer-nosotros">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="text-sm opacity-90 hover-elevate active-elevate-2 inline-block px-2 py-1 rounded-md" data-testid="link-footer-admisiones">
                  Admisiones
                </a>
              </li>
              <li>
                <a href="#" className="text-sm opacity-90 hover-elevate active-elevate-2 inline-block px-2 py-1 rounded-md" data-testid="link-footer-calendario">
                  Calendario Académico
                </a>
              </li>
              <li>
                <a href="#" className="text-sm opacity-90 hover-elevate active-elevate-2 inline-block px-2 py-1 rounded-md" data-testid="link-footer-biblioteca">
                  Biblioteca
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover-elevate active-elevate-2"
                data-testid="link-facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover-elevate active-elevate-2"
                data-testid="link-youtube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-border">
          <p className="text-sm text-center opacity-75">
            © {new Date().getFullYear()} Institución Educativa Oreste Sindici. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
