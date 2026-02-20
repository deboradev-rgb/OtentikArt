import { AnimatedSection, AnimatedWord } from "@/components/AnimatedSection";
import { Award, GraduationCap, Camera, Eye, Heart, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import photographer1 from "@/assets/photo1.jpeg";
import photographer2 from "@/assets/photo2.jpeg";
import hero3 from "@/assets/smill.jpeg";

const photographerImages = [photographer1, photographer2];

const About = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrentPhoto((p) => (p + 1) % photographerImages.length), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* Hero with video-style background */}
      <section className="relative h-[70vh] overflow-hidden">
        <img src={hero3} alt="Wedding dance" className="absolute inset-0 w-full h-full object-cover animate-kenburns" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-gold-light text-sm tracking-[0.4em] uppercase mb-6">
            Le Photographe
          </motion.p>
          <h1 className="font-heading text-4xl md:text-7xl text-ivory font-light">
            <AnimatedWord text="À Propos" delay={500} />
          </h1>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1.2, duration: 0.8 }} className="line-elegant-wide mt-8" />
        </div>
      </section>

      {/* Photographer Bio */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Photo slider */}
            <AnimatedSection animation="slide-in-left" className="relative">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-luxury-lg">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentPhoto}
                    src={photographerImages[currentPhoto]}
                    alt="Photographe"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.8 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {photographerImages.map((_, i) => (
                    <button key={i} onClick={() => setCurrentPhoto(i)}
                      className={`w-8 h-0.5 transition-all ${i === currentPhoto ? "bg-gold" : "bg-ivory/40"}`} />
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-gold/30 rounded-lg hidden lg:block" />
            </AnimatedSection>

            {/* Bio text */}
            <AnimatedSection animation="slide-in-right" delay={200}>
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Mon Histoire</p>
              <h2 className="font-heading text-3xl md:text-5xl font-light mb-8">
                L'Artisan de <span className="italic gradient-gold-text">Vos Souvenirs</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed font-light">
                <p>
                  Je suis photographe de mariage parce que je crois aux histoires qui se vivent pleinement, 
                  avec authenticité et sensibilité. Les instants vrais, les regards échangés, les gestes spontanés 
                  — ce sont eux qui font la beauté d'une journée unique.
                </p>
                <p>
                  Depuis 2020, je partage ma passion à travers Ô'tentik Photographie. En 2023, j'ai eu l'honneur 
                  d'être élu meilleur photographe béninois de la diaspora. Diplômé d'une école de photographie à Lyon, 
                  j'allie formation professionnelle et sensibilité artistique.
                </p>
                <p>
                  Basé à Saint-Étienne, j'accompagne des couples à la recherche d'une photographie de mariage raffinée, 
                  en Loire, en France et à l'international.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Parcours & Distinctions */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Excellence</p>
            <h2 className="font-heading text-3xl md:text-5xl font-light">
              Parcours & <span className="italic gradient-gold-text">Distinctions</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: GraduationCap, title: "Formation", desc: "Diplômé de l'école de photographie de Lyon", year: "2019" },
              { icon: Camera, title: "Ô'tentik", desc: "Création du studio de photographie de mariage", year: "2020" },
              { icon: Award, title: "Prix d'Excellence", desc: "Élu meilleur photographe béninois de la diaspora", year: "2023" },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 200} animation="slide-up">
                <motion.div
                  whileHover={{ y: -8, boxShadow: "0 20px 60px -15px hsl(38 65% 50% / 0.2)" }}
                  className="p-8 bg-background rounded-xl border border-border text-center group cursor-default transition-colors"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full gradient-gold flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <span className="text-primary text-sm tracking-wider font-medium">{item.year}</span>
                  <h3 className="font-heading text-2xl font-semibold mt-2 mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophie */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Vision</p>
            <h2 className="font-heading text-3xl md:text-5xl font-light">
              Ma <span className="italic gradient-gold-text">Philosophie</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-5xl mx-auto">
            {[
              { icon: Eye, title: "Discrétion", desc: "Le jour J, je me fais invisible pour mieux capter l'essentiel : la lumière, les émotions, les détails subtils." },
              { icon: Heart, title: "Authenticité", desc: "Je prends le temps de vous connaître, de comprendre votre univers, afin que chaque photographie reflète votre essence." },
              { icon: Sparkles, title: "Excellence", desc: "Mon objectif est simple : vous offrir des souvenirs élégants, sincères et durables, qui traversent le temps." },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 200} animation="fade-in">
                <div className={`relative p-10 text-center group h-full ${
                  i < 2 ? "md:border-r border-border" : ""
                }`}>
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-gold/30 flex items-center justify-center group-hover:border-gold transition-colors duration-500"
                  >
                    <item.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  <h3 className="font-heading text-2xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed font-light text-sm">{item.desc}</p>
                  <div className="line-elegant mx-auto mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
