import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-3xl font-semibold gradient-gold-text mb-4">Ô'tentik</h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Photographe de mariage basé à Saint-Étienne. Capturer l'authenticité de votre histoire avec sensibilité et élégance.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading text-xl font-semibold mb-6">Navigation</h4>
            <div className="flex flex-col gap-3">
              {[
                { to: "/", label: "Accueil" },
                { to: "/a-propos", label: "À Propos" },
                { to: "/portfolio", label: "Portfolio" },
                { to: "/services", label: "Services" },
                { to: "/temoignages", label: "Témoignages" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors tracking-wide"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-xl font-semibold mb-6">Contact</h4>
            <div className="flex flex-col gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Saint-Étienne, 42000 France</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span>contact@otentik-photo.fr</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span>+33 6 00 00 00 00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="line-elegant-wide mx-auto mt-12 mb-8" />
        <p className="text-center text-xs text-muted-foreground tracking-widest uppercase">
          © {new Date().getFullYear()} Ô'tentik Photographie — Tous droits réservés
        </p>
      </div>
    </footer>
  );
}
