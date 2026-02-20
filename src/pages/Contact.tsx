import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Mail, Phone, Instagram, Facebook, Send } from "lucide-react";
import { AnimatedSection, AnimatedWord } from "@/components/AnimatedSection";
import { useToast } from "@/hooks/use-toast";
import contact1 from "@/assets/contact-1.jpg";
import contact2 from "@/assets/contact-2.jpg";

const heroImages = [contact1, contact2];

const Contact = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "", date: "", location: "Saint-Étienne 42000", message: "" });
  const [sending, setSending] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((p) => (p + 1) % heroImages.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Simulate send
    await new Promise((r) => setTimeout(r, 1500));
    toast({ title: "Message envoyé !", description: "Nous vous répondrons dans les plus brefs délais." });
    setFormData({ name: "", email: "", date: "", location: "Saint-Étienne 42000", message: "" });
    setSending(false);
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 h-full">
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentSlide}
                src={heroImages[currentSlide]}
                alt="Contact"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="hidden md:flex flex-col items-center justify-center bg-card relative">
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-card/80" />
            <div className="relative z-10 px-12 text-center">
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-primary text-sm tracking-[0.4em] uppercase mb-4">
                Écrivons Votre Histoire
              </motion.p>
              <h1 className="font-heading text-5xl lg:text-6xl font-light mb-6">
                <AnimatedWord text="Contact" delay={500} />
              </h1>
              <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1, duration: 0.8 }} className="line-elegant-wide mx-auto mb-6" />
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="text-muted-foreground font-light">
                Racontez-nous votre projet et commençons cette belle aventure ensemble.
              </motion.p>
            </div>
          </div>
        </div>
        {/* Mobile title overlay */}
        <div className="md:hidden absolute inset-0 flex items-center justify-center bg-black/50 z-10">
          <h1 className="font-heading text-4xl text-ivory font-light">
            <AnimatedWord text="Contact" delay={500} />
          </h1>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <AnimatedSection animation="slide-in-left">
              <div className="bg-card rounded-xl border border-border p-8 md:p-10">
                <h2 className="font-heading text-3xl font-light mb-2">Commencer Votre <span className="italic gradient-gold-text">Histoire</span></h2>
                <p className="text-muted-foreground text-sm mb-8">Remplissez ce formulaire et nous vous répondrons rapidement.</p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="text-sm font-medium tracking-wider uppercase mb-2 block">Nom</label>
                    <input
                      type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-border rounded-md text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      placeholder="Votre nom complet"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium tracking-wider uppercase mb-2 block">Email</label>
                    <input
                      type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-border rounded-md text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      placeholder="votre@email.com"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-medium tracking-wider uppercase mb-2 block">Date de l'événement</label>
                      <input
                        type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-4 py-3 bg-background border border-border rounded-md text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium tracking-wider uppercase mb-2 block">Localisation</label>
                      <input
                        type="text" value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-4 py-3 bg-background border border-border rounded-md text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium tracking-wider uppercase mb-2 block">Message</label>
                    <textarea
                      required rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-border rounded-md text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                      placeholder="Parlez-nous de votre mariage..."
                    />
                  </div>
                  <button
                    type="submit" disabled={sending}
                    className="w-full flex items-center justify-center gap-3 px-8 py-4 gradient-gold text-primary-foreground text-sm tracking-widest uppercase rounded-sm hover:shadow-luxury-lg transition-all duration-500 disabled:opacity-50"
                  >
                    {sending ? "Envoi en cours..." : <><Send className="w-4 h-4" /> Commencer Votre Histoire</>}
                  </button>
                </form>
              </div>
            </AnimatedSection>

            {/* Map */}
            <AnimatedSection animation="slide-in-right" delay={200}>
              <div className="rounded-xl overflow-hidden shadow-luxury h-[400px] lg:h-full min-h-[400px]">
                <iframe
                  title="Localisation"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44632.89812091087!2d4.3408547!3d45.4397359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f5abece0e03847%3A0x40819a5fd979a30!2sSaint-%C3%89tienne!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </AnimatedSection>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-12">
            {[
              { icon: MapPin, label: "Localisation", value: "Saint-Étienne, 42000" },
              { icon: Mail, label: "Email", value: "contact@otentik-photo.fr" },
              { icon: Phone, label: "Téléphone", value: "+33 6 00 00 00 00" },
              { icon: Instagram, label: "Suivez-moi", value: "@otentik_photo", isLink: true },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 100} animation="slide-up">
                <motion.div whileHover={{ y: -3 }} className="p-6 bg-card rounded-lg border border-border text-center hover:shadow-luxury transition-all duration-500">
                  <item.icon className="w-6 h-6 mx-auto mb-3 text-primary" />
                  <p className="text-xs tracking-widest uppercase text-muted-foreground mb-1">{item.label}</p>
                  <p className="text-sm font-medium">{item.value}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
