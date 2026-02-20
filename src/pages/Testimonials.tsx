import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, ArrowRight, Quote } from "lucide-react";
import { AnimatedSection, AnimatedWord } from "@/components/AnimatedSection";
import testimonial1 from "@/assets/Mokup.jpeg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import flowersBg from "@/assets/flowers-bg.jpg";

const heroImages = [testimonial1, testimonial2, testimonial3];

const testimonials = [
  { quote: "Des photos d'une beauté à couper le souffle. Chaque image raconte notre histoire avec une sensibilité incroyable. On revit chaque émotion en les regardant.", name: "Marie & Pierre", date: "Mariage à Lyon, 2024", rating: 5 },
  { quote: "Un artiste discret et talentueux qui a su capturer les moments les plus précieux de notre journée. Ses photos sont de véritables œuvres d'art.", name: "Camille & Thomas", date: "Mariage en Provence, 2023", rating: 5 },
  { quote: "Nous cherchions un photographe capable de raconter notre histoire. Le résultat a dépassé toutes nos attentes. Merci pour ces souvenirs intemporels.", name: "Léa & Julien", date: "Mariage à Saint-Étienne, 2024", rating: 5 },
  { quote: "Sa capacité à capter l'authenticité de chaque moment est exceptionnelle. Les photos reflètent parfaitement l'ambiance magique de notre mariage.", name: "Sarah & Maxime", date: "Mariage Destination, 2023", rating: 5 },
  { quote: "Un professionnel d'exception. Son travail est empreint d'une élégance rare. Chaque photo est un trésor que nous chérirons toute notre vie.", name: "Anaïs & Hugo", date: "Mariage au Château, 2024", rating: 5 },
  { quote: "Dès le premier contact, nous avons ressenti sa passion et son dévouement. Le jour J, il s'est fondu dans le décor tout en capturant l'essentiel.", name: "Clara & Antoine", date: "Mariage Côte d'Azur, 2023", rating: 5 },
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((p) => (p + 1) % heroImages.length), 4000);
    return () => clearInterval(timer);
  }, []);

  const nextT = () => setCurrentTestimonial((p) => (p + 1) % testimonials.length);
  const prevT = () => setCurrentTestimonial((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide}
            src={heroImages[currentSlide]}
            alt="Testimonials"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-heading text-4xl md:text-7xl text-ivory font-light">
            <AnimatedWord text="Témoignages" delay={500} />
          </h1>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1.2, duration: 0.8 }} className="line-elegant-wide mt-6 mb-6" />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 1 }}
            className="text-ivory/70 max-w-xl text-lg font-light font-heading italic"
          >
            Les mots de ceux qui nous ont fait confiance pour immortaliser leurs plus beaux moments.
          </motion.p>
        </div>
      </section>

      {/* Featured Testimonial Carousel */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <Quote className="w-12 h-12 mx-auto mb-8 text-primary/30" />
                <div className="flex justify-center gap-1 mb-8">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="font-heading text-2xl md:text-4xl font-light italic leading-relaxed mb-8 text-foreground/90">
                  "{testimonials[currentTestimonial].quote}"
                </p>
                <div className="line-elegant mx-auto mb-6" />
                <p className="font-heading text-xl font-semibold">{testimonials[currentTestimonial].name}</p>
                <p className="text-muted-foreground text-sm mt-1">{testimonials[currentTestimonial].date}</p>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center items-center gap-6 mt-12">
              <button onClick={prevT} className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentTestimonial(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === currentTestimonial ? "bg-primary w-6" : "bg-border"
                    }`}
                  />
                ))}
              </div>
              <button onClick={nextT} className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-light">
              Tous les <span className="italic gradient-gold-text">Avis</span>
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} delay={i * 100} animation="scale-in">
                <motion.div whileHover={{ y: -5 }} className="p-8 bg-background rounded-xl border border-border h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground/80 italic font-heading text-base leading-relaxed mb-6">"{t.quote}"</p>
                  <div className="line-elegant mb-4" />
                  <p className="font-heading text-lg font-semibold">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.date}</p>
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
              Créons Ensemble <span className="italic">Votre Histoire</span>
            </h2>
            <p className="text-ivory/70 max-w-xl mx-auto mb-8 font-light">
              Rejoignez les centaines de couples qui nous ont fait confiance.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 gradient-gold text-primary-foreground text-sm tracking-widest uppercase rounded-sm hover:shadow-luxury-lg transition-all duration-500 hover:-translate-y-1"
            >
              Commencer Votre Histoire <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
