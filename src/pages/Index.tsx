import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Heart, Star, ArrowRight } from "lucide-react";
import { AnimatedSection, AnimatedWord } from "@/components/AnimatedSection";
import hero1 from "@/assets/lov.jpeg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/biz.jpeg";
import featured1 from "@/assets/smil.jpeg";
import featured2 from "@/assets/biz1.jpeg";
import featured3 from "@/assets/lov.jpeg";
import detail1 from "@/assets/wedding-detail-1.jpg";

const heroImages = [hero1, hero2, hero3];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white dark:bg-dark-background transition-colors duration-300">
     {/* Hero Section */}
<section className="relative h-screen overflow-hidden">
  <AnimatePresence mode="wait">
    <motion.div
      key={currentSlide}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
      className="absolute inset-0"
    >
      <img
        src={heroImages[currentSlide]}
        alt="Wedding photography"
        className="w-full h-full object-cover animate-kenburns"
      />
    </motion.div>
  </AnimatePresence>
  
  <div className="absolute inset-0 bg-black/40" />
  
  <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="text-white/80 text-sm tracking-[0.3em] uppercase mb-4 font-light"
    >
      Photographe de Mariage
    </motion.p>
    
    <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-white font-light leading-tight max-w-4xl">
      <AnimatedWord text="Capturons l'Authenticité" delay={600} />
      <br />
      <AnimatedWord text="de Votre Histoire" delay={1200} />
    </h1>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.8 }}
      className="w-16 h-px bg-white/50 mx-auto mt-8 mb-8"
    />

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2 }}
      className="flex flex-col sm:flex-row gap-4"
    >
      {/* Bouton Portfolio - Moderne avec effet de glow */}
      <Link
        to="/portfolio"
        className="group relative px-8 py-4 bg-copper/80 text-charcoal text-sm tracking-wider uppercase overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]"
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          Découvrir la Galerie
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </span>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-copper/20 to-transparent"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.6 }}
        />
      </Link>

      {/* Bouton Contact - Élégant avec bordure animée */}
      <Link
        to="/contact"
        className="group relative px-8 py-4 text-white text-sm tracking-wider uppercase transition-all duration-300"
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          Prendre Contact
          <span className="text-lg group-hover:rotate-12 transition-transform">✧</span>
        </span>
        
        {/* Bordures animées */}
        <span className="absolute inset-0 border border-white/30 group-hover:border-copper/50 transition-colors duration-300" />
        <motion.span
          className="absolute bottom-0 left-0 h-px bg-copper"
          initial={{ width: '0%' }}
          whileHover={{ width: '100%' }}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="absolute top-0 right-0 h-px bg-copper"
          initial={{ width: '0%' }}
          whileHover={{ width: '100%' }}
          transition={{ duration: 0.3 }}
        />
      </Link>
    </motion.div>

    {/* Petit texte inspirant sous les boutons */}
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.3 }}
      className="absolute bottom-24 text-white/40 text-xs tracking-wider font-light"
    >
      ✦ Émotions intemporelles ✦
    </motion.p>

    {/* Slide indicators */}
    <div className="absolute bottom-8 flex gap-3">
      {heroImages.map((_, i) => (
        <button
          key={i}
          onClick={() => setCurrentSlide(i)}
          className="group relative"
        >
          <span
            className={`block h-px transition-all duration-300 ${
              i === currentSlide 
                ? "w-12 bg-white" 
                : "w-8 bg-white/30 group-hover:bg-white/50"
            }`}
          />
          {i === currentSlide && (
            <motion.span
              layoutId="activeSlide"
              className="absolute -bottom-1 left-0 right-0 mx-auto w-1 h-1 rounded-full bg-copper"
            />
          )}
        </button>
      ))}
    </div>
  </div>
</section>

      {/* À propos - Section minimaliste */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 max-w-3xl">
          <AnimatedSection className="text-center">
            <h2 className="font-heading text-3xl md:text-4xl text-charcoal dark:text-white font-light mb-6">
              L'Art de l'Instant Présent
            </h2>
            <p className="text-charcoal/70 dark:text-white/70 leading-relaxed font-light">
              Photographe de mariage basée à Paris, je capture l'authenticité de votre journée 
              avec discrétion et sensibilité. Chaque image raconte une histoire, la vôtre.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-3 gap-8 mt-16">
            {[
              { icon: Camera, label: "8 ans", desc: "d'expérience" },
              { icon: Heart, label: "150+", desc: "mariages" },
              { icon: Star, label: "100%", desc: "satisfaction" },
            ].map((stat, i) => (
              <AnimatedSection key={i} delay={i * 100} className="text-center">
                <stat.icon className="w-5 h-5 mx-auto mb-3 text-copper" />
                <p className="font-heading text-xl text-charcoal dark:text-white">{stat.label}</p>
                <p className="text-xs text-charcoal/60 dark:text-white/60 mt-1">{stat.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio - Grille épurée */}
      <section className="py-24 bg-sand/30 dark:bg-charcoal/20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <p className="text-copper text-sm tracking-[0.2em] uppercase mb-3">Portfolio</p>
            <h2 className="font-heading text-3xl md:text-4xl text-charcoal dark:text-white font-light">
          Derniers Mariages
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { img: featured1, title: "Sophie & Marc", year: "2024" },
              { img: featured2, title: "Emma & Lucas", year: "2024" },
              { img: featured3, title: "Clara & Antoine", year: "2023" },
            ].map((wedding, i) => (
              <AnimatedSection key={i} delay={i * 150}>
                <Link to="/portfolio" className="group block">
                  <div className="overflow-hidden bg-gray-100 aspect-[4/5]">
                    <img
                      src={wedding.img}
                      alt={wedding.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <div>
                      <h3 className="font-heading text-lg text-charcoal dark:text-white">{wedding.title}</h3>
                      <p className="text-sm text-charcoal/50 dark:text-white/50">{wedding.year}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-copper opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="inline-block text-sm text-charcoal dark:text-white border-b border-copper pb-0.5 hover:text-copper transition-colors"
            >
              Voir tout →
            </Link>
          </div>
        </div>
      </section>

      {/* Témoignage unique */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-2xl">
          <AnimatedSection className="text-center">
            <div className="mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 inline-block mx-0.5 text-copper fill-copper" />
              ))}
            </div>
            <p className="font-heading text-xl md:text-2xl text-charcoal dark:text-white italic leading-relaxed">
              "Des photos d'une beauté intemporelle. Merci pour votre sensibilité et votre discrétion."
            </p>
            <p className="mt-6 text-sm text-charcoal/60 dark:text-white/60">
              — Marie & Pierre
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact - Minimal */}
      <section className="py-24 bg-charcoal dark:bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl font-light mb-6">
              Créons Ensemble
            </h2>
            <p className="text-white/70 mb-8 max-w-md mx-auto font-light">
              Racontons votre histoire à travers des images authentiques et élégantes.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 border border-white/30 text-sm tracking-wider uppercase hover:bg-white hover:text-charcoal transition-all"
            >
              Prendre Contact
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Index;