import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, Camera, Heart, Sparkles, Users, Clock, Image, Video, BookOpen } from "lucide-react";
import { AnimatedSection, AnimatedWord } from "@/components/AnimatedSection";
import serviceHero from "@/assets/preparatif2.jpg";
import serviceIntimate from "@/assets/mariee.jpeg";
import servicePrestige from "@/assets/biz.jpeg";
import serviceDestination from "@/assets/lov.jpeg";
import process1 from "@/assets/date.jpeg";
import process2 from "@/assets/balade.jpeg";
import process3 from "@/assets/pho.jpeg";
import process4 from "@/assets/process-4.jpg";
import flowersBg from "@/assets/flowers-bg.jpg";

const services = [
  {
    title: "Mariage Intimiste",
    desc: "Pour les couples qui rêvent d'un mariage en petit comité, empreint d'émotion et de proximité.",
    img: serviceIntimate,
    features: ["Couverture de 6 heures", "200+ photos retouchées", "Galerie en ligne privée", "Séance couple incluse", "Album photo 20 pages"],
  },
  {
    title: "Mariage Prestige",
    desc: "L'expérience complète pour les célébrations d'exception qui méritent une couverture photographique exhaustive.",
    img: servicePrestige,
    features: ["Couverture journée complète", "500+ photos retouchées", "Séance engagement offerte", "Album premium 40 pages", "Tirages d'art signés", "Second photographe"],
  },
  {
    title: "Mariage Destination",
    desc: "Pour les couples aventuriers qui choisissent de célébrer leur amour dans un cadre exceptionnel, en France ou à l'international.",
    img: serviceDestination,
    features: ["Déplacement international inclus", "2 jours de couverture", "700+ photos retouchées", "Repérage des lieux", "Album collector", "Film teaser 3min"],
  },
];

const processSteps = [
  { title: "Premier Contact", desc: "Échangeons autour de votre vision, vos envies et votre histoire. Apprenons à nous connaître.", img: process1 },
  { title: "Séance Engagement", desc: "Une séance photo en amont pour briser la glace et créer des images authentiques de votre complicité.", img: process2 },
  { title: "Le Jour J", desc: "Discret et attentif, je capture chaque émotion, chaque détail qui rend votre journée unique.", img: process3 },
  { title: "Livraison", desc: "Vos photos retouchées avec soin, livrées dans une galerie en ligne élégante et un album premium.", img: process4 },
];

const Services = () => {
  const [openService, setOpenService] = useState<number | null>(null);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <img src={serviceHero} alt="Services" className="absolute inset-0 w-full h-full object-cover animate-kenburns" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-heading text-4xl md:text-7xl text-ivory font-light">
            <AnimatedWord text="Services" delay={500} />
          </h1>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slide-in-left">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-luxury-lg">
                <img src={serviceHero} alt="Experience" className="w-full h-full object-cover" />
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slide-in-right" delay={200}>
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Sur Mesure</p>
              <h2 className="font-heading text-3xl md:text-5xl font-light mb-6">
                Une Expérience Photographique <span className="italic gradient-gold-text">Sur-Mesure</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed font-light mb-8">
                Chaque mariage est unique, et votre couverture photographique doit l'être tout autant. 
                Je propose des expériences personnalisées qui s'adaptent parfaitement à votre vision, 
                votre style et votre histoire.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 text-primary tracking-widest text-sm uppercase hover:gap-4 transition-all duration-300">
                Discutons de votre projet <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-light">
              Nos <span className="italic gradient-gold-text">Formules</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, i) => (
              <AnimatedSection key={i} delay={i * 200} animation="slide-up">
                <div className="bg-background rounded-xl border border-border overflow-hidden h-full flex flex-col hover:shadow-luxury transition-all duration-500">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={service.img} alt={service.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="font-heading text-2xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">{service.desc}</p>
                    <button
                      onClick={() => setOpenService(openService === i ? null : i)}
                      className="w-full px-6 py-3 gradient-gold text-primary-foreground text-sm tracking-widest uppercase rounded-sm hover:shadow-luxury transition-all duration-300"
                    >
                      Voir Plus
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {openService !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
            onClick={() => setOpenService(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              className="bg-background rounded-xl max-w-3xl w-full max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="aspect-square md:aspect-auto overflow-hidden">
                  <img src={services[openService].img} alt={services[openService].title} className="w-full h-full object-cover" />
                </div>
                <div className="p-8">
                  <h3 className="font-heading text-3xl font-semibold mb-4">{services[openService].title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{services[openService].desc}</p>
                  <div className="line-elegant mb-6" />
                  <h4 className="font-heading text-lg font-semibold mb-4">Inclus dans cette formule</h4>
                  <div className="space-y-3">
                    {services[openService].features.map((f, j) => (
                      <motion.div
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: j * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-5 h-5 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-primary-foreground" />
                        </div>
                        <span className="text-sm">{f}</span>
                      </motion.div>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    className="mt-8 inline-flex items-center gap-2 px-8 py-3 gradient-gold text-primary-foreground text-sm tracking-widest uppercase rounded-sm w-full justify-center"
                  >
                    Demander un Devis
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Process */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Étape par Étape</p>
            <h2 className="font-heading text-3xl md:text-5xl font-light">
              Le <span className="italic gradient-gold-text">Processus</span>
            </h2>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto space-y-16">
            {processSteps.map((step, i) => (
              <AnimatedSection key={i} delay={i * 150} animation={i % 2 === 0 ? "slide-in-left" : "slide-in-right"}>
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "md:direction-rtl" : ""}`}>
                  <div className={i % 2 === 1 ? "md:order-2" : ""}>
                    <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-luxury">
                      <img src={step.img} alt={step.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                    </div>
                  </div>
                  <div className={i % 2 === 1 ? "md:order-1" : ""}>
                    <span className="text-primary/50 font-heading text-6xl font-light">0{i + 1}</span>
                    <h3 className="font-heading text-2xl md:text-3xl font-semibold mt-2 mb-4">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed font-light">{step.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Options Complémentaires */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-light">
              Options <span className="italic gradient-gold-text">Complémentaires</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Image, title: "Tirages d'Art", desc: "Impressions fine art sur papier museum" },
              { icon: BookOpen, title: "Albums Premium", desc: "Albums photo cousus main, reliure luxe" },
              { icon: Video, title: "Film Teaser", desc: "Court-métrage cinématographique de 3-5 min" },
              { icon: Users, title: "Second Photographe", desc: "Double couverture pour ne rien manquer" },
            ].map((opt, i) => (
              <AnimatedSection key={i} delay={i * 100} animation="scale-in">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="p-6 bg-background rounded-lg border border-border text-center hover:shadow-luxury transition-all duration-500 cursor-default"
                >
                  <opt.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
                  <h4 className="font-heading text-lg font-semibold mb-2">{opt.title}</h4>
                  <p className="text-muted-foreground text-xs">{opt.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={flowersBg} alt="Flowers" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-5xl text-ivory font-light mb-6">
              Discutons de Votre <span className="italic">Projet</span>
            </h2>
            <p className="text-ivory/70 max-w-xl mx-auto mb-8 font-light">
              Chaque mariage mérite une approche unique. Racontez-moi votre histoire et créons ensemble des souvenirs inoubliables.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 gradient-gold text-primary-foreground text-sm tracking-widest uppercase rounded-sm hover:shadow-luxury-lg transition-all duration-500 hover:-translate-y-1"
            >
              Commencer <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Services;
