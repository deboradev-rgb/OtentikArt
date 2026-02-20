import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; // ← CORRIGÉ ICI
import { Camera, Award, Heart, Star, ChevronRight, ArrowRight } from "lucide-react";
import { AnimatedSection, AnimatedWord } from "@/components/AnimatedSection";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import featured1 from "@/assets/smil.jpeg";
import featured2 from "@/assets/biz1.jpeg";
import featured3 from "@/assets/lov.jpeg";
import detail1 from "@/assets/wedding-detail-1.jpg";
import detail2 from "@/assets/wedding-detail-2.jpg";

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
    <div className="bg-gradient-to-b from-navyDeep/20 via-white to-beigeGold/10 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={heroImages[currentSlide]}
              alt="Wedding photography"
              className="w-full h-full object-cover animate-kenburns brightness-90"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-deepBrown/50 via-navyDeep/40 to-black/65" />
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-copper text-sm md:text-base tracking-[0.4em] uppercase mb-6 font-body font-light"
          >
            Photographe de Mariage
          </motion.p>
          
          <h1 className="font-heading text-4xl md:text-6xl lg:text-8xl text-beigeGold font-light leading-tight max-w-5xl drop-shadow-md">
            <AnimatedWord text="Capturons l'Authenticité" delay={600} />
            <br />
            <AnimatedWord text="de Votre Histoire" delay={1200} />
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="h-0.5 w-48 mx-auto mt-8 mb-8 bg-gradient-to-r from-beigeGold via-copper to-terracotta rounded-full"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.3, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/portfolio"
              className="px-8 py-4 bg-gradient-to-r from-copper to-terracotta text-white font-body text-sm tracking-widest uppercase rounded-sm hover:brightness-110 hover:shadow-luxury-lg transition-all duration-500 hover:-translate-y-1"
            >
              Voir le Portfolio
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border border-beigeGold/60 text-beigeGold font-body text-sm tracking-widest uppercase rounded-sm hover:bg-beigeGold/10 hover:border-copper transition-all duration-500"
            >
              Réserver une Séance
            </Link>
          </motion.div>

          {/* Slide indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            className="absolute bottom-8 flex gap-3"
          >
            {heroImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-12 h-0.5 transition-all duration-500 rounded-full ${
                  i === currentSlide 
                    ? "bg-gradient-to-r from-beigeGold to-copper shadow-sm" 
                    : "bg-tealOcean/40"
                }`}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Les autres sections restent identiques à la version précédente */}
      {/* Unique Style Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <p className="text-copper text-sm tracking-[0.3em] uppercase mb-4 font-body">L'Art de l'Instant</p>
            <h2 className="font-heading text-3xl md:text-5xl font-light mb-6">
              Une Approche <span className="italic bg-gradient-to-r from-copper to-terracotta bg-clip-text text-transparent">Authentique</span>
            </h2>
            <div className="h-0.5 w-32 mx-auto mb-8 bg-gradient-to-r from-beigeGold via-copper to-terracotta rounded-full" />
            <p className="text-muted-foreground leading-relaxed text-lg font-light">
              Mon approche allie discrétion, justesse et exigence artistique, pour créer un récit visuel 
              qui vous ressemble vraiment. Chaque photographie reflète votre essence avec élégance et sincérité.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {[
              { icon: Camera, label: "5+ Ans", desc: "D'expérience" },
              { icon: Heart, label: "200+", desc: "Mariages" },
              { icon: Award, label: "Élu 2023", desc: "Meilleur Photographe" },
              { icon: Star, label: "100%", desc: "Satisfaction" },
            ].map((stat, i) => (
              <AnimatedSection key={i} delay={i * 150} animation="slide-up" className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-navyDeep flex items-center justify-center text-beigeGold group-hover:bg-copper group-hover:text-white transition-all duration-500">
                  <stat.icon className="w-6 h-6" />
                </div>
                <p className="font-heading text-2xl md:text-3xl font-semibold">{stat.label}</p>
                <p className="text-muted-foreground text-sm mt-1">{stat.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Weddings */}
      <section className="py-24 bg-deepBrown">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <p className="text-copper text-sm tracking-[0.3em] uppercase mb-4">Portfolio</p>
            <h2 className="font-heading text-3xl md:text-5xl font-light text-beigeGold">
              Mariages <span className="italic bg-gradient-to-r from-copper to-terracotta bg-clip-text text-transparent">d'Exception</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { img: featured1, title: "Sophie & Marc", location: "Provence, France" },
              { img: featured2, title: "Emma & Lucas", location: "Château de Loire" },
              { img: featured3, title: "Clara & Antoine", location: "Côte d'Azur" },
            ].map((wedding, i) => (
              <AnimatedSection key={i} delay={i * 200} animation="scale-in">
                <Link to="/portfolio" className="group block relative overflow-hidden rounded-lg aspect-[3/4]">
                  <img
                    src={wedding.img}
                    alt={wedding.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deepBrown/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <h3 className="font-heading text-2xl text-beigeGold">{wedding.title}</h3>
                    <p className="text-copper text-sm tracking-wider mt-1">{wedding.location}</p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-copper hover:gap-4 transition-all duration-300 tracking-widest text-sm uppercase hover:text-terracotta"
            >
              Voir tout le portfolio <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-24 md:py-32 bg-navyDeep/5">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <p className="text-copper text-sm tracking-[0.3em] uppercase mb-4">Témoignages</p>
            <h2 className="font-heading text-3xl md:text-5xl font-light text-beigeGold">
              Ce Qu'ils <span className="italic bg-gradient-to-r from-copper to-terracotta bg-clip-text text-transparent">Disent</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                quote: "Des photos d'une beauté à couper le souffle. Chaque image raconte notre histoire avec une sensibilité incroyable.",
                name: "Marie & Pierre",
                date: "Mariage 2024",
              },
              {
                quote: "Un artiste discret et talentueux qui a su capturer les moments les plus précieux de notre journée. Un vrai magicien.",
                name: "Camille & Thomas",
                date: "Mariage 2023",
              },
            ].map((testimonial, i) => (
              <AnimatedSection key={i} delay={i * 200} animation="slide-up">
                <div className="p-8 bg-navyDeep/60 rounded-lg border border-tealOcean/30 hover:border-copper/50 hover:shadow-luxury transition-all duration-500 h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-copper text-copper" />
                    ))}
                  </div>
                  <p className="text-beigeGold/90 italic font-light leading-relaxed mb-6 font-heading text-lg">
                    "{testimonial.quote}"
                  </p>
                  <div className="h-0.5 w-24 mx-auto mb-4 bg-gradient-to-r from-beigeGold via-copper to-terracotta rounded-full" />
                  <p className="font-heading text-lg font-semibold text-beigeGold">{testimonial.name}</p>
                  <p className="text-tealOcean text-sm">{testimonial.date}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={detail1} alt="Wedding details" className="w-full h-full object-cover brightness-75" />
          <div className="absolute inset-0 bg-gradient-to-t from-deepBrown/80 via-navyDeep/70 to-black/60" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <AnimatedSection>
            <p className="text-copper text-sm tracking-[0.3em] uppercase mb-4">Votre Histoire Commence Ici</p>
            <h2 className="font-heading text-3xl md:text-6xl text-beigeGold font-light mb-8 max-w-3xl mx-auto">
              Prêt à Créer Votre <span className="italic bg-gradient-to-r from-copper to-terracotta bg-clip-text text-transparent">Héritage Visuel</span> ?
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-copper via-terracotta to-copper text-white font-body text-sm tracking-widest uppercase rounded-sm hover:brightness-110 hover:shadow-luxury-lg transition-all duration-500 hover:-translate-y-1"
            >
              Commencer Votre Histoire <ChevronRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Index;