import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

// Import correct du logo (ajuste le chemin/nom si besoin)
import logo from "@/assets/logo.png"; // ou "@/assets/Logo.png" selon ton fichier exact

const navLinks = [
  { to: "/", label: "Accueil" },
  { to: "/a-propos", label: "À Propos" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/services", label: "Services" },
  { to: "/temoignages", label: "Témoignages" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  const isActive = useCallback((path: string) => location.pathname === path, [location.pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/90 backdrop-blur-md shadow-luxury py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo + lien vers accueil */}
          <Link to="/" className="flex items-center relative group">
            <motion.img
              src={logo}
              alt="Logo Photographe de Mariage"
              className={`
                h-14 sm:h-16 md:h-18 lg:h-${scrolled ? '20' : '24'} 
                w-auto object-contain 
                transition-all duration-300 ease-out
                group-hover:scale-110 group-hover:rotate-[3deg] group-hover:drop-shadow-xl
                drop-shadow-lg
              `}
              initial={{ opacity: 0, scale: 0.88, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            />

            {/* Petit effet underline ou glow optionnel au hover */}
            <motion.div
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 bg-gradient-to-r from-primary/60 to-transparent rounded-full blur-sm"
              initial={{ width: "0%" }}
              whileHover={{ width: "70%" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium tracking-widest uppercase transition-all duration-300 hover:text-primary relative
                  ${isActive(link.to) ? "text-primary" : "text-foreground/70"}
                `}
              >
                {link.label}
                {isActive(link.to) && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-primary"
                  />
                )}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-3">
            <ThemeToggle />
            <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2">
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-xl pt-24 px-8"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.to}
                    className={`font-heading text-3xl tracking-wide transition-colors ${
                      isActive(link.to) ? "text-primary" : "text-foreground/70 hover:text-primary"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}