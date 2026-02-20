import { useState, useEffect } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatedSection, AnimatedWord } from "@/components/AnimatedSection";

// ────────────────────────────────────────────────
// IMPORTS IMAGES (seulement ceux qui existent vraiment)
import hero1 from "@/assets/biz3.jpeg";
import hero2 from "@/assets/biz.jpeg";
import hero3 from "@/assets/lov1.jpeg";
import featured1 from "@/assets/lov2.jpeg";
import featured2 from "@/assets/biz1.jpeg";
import featured3 from "@/assets/biz.jpeg";
import preparatif from "@/assets/prepa.jpg";
import preparatif1 from "@/assets/preparatif.jpg";
import preparatif2 from "@/assets/preparatif1.jpg";
import preparatif3 from "@/assets/preparatif2.jpg";
import preparatif4 from "@/assets/preparatif3.jpg";
import preparatif5 from "@/assets/preparatif5.jpg";
import detail1 from "@/assets/wedding-detail-1.jpg";
import detail2 from "@/assets/wedding-detail-2.jpg";
import detail3 from "@/assets/detaiill.jpg";
import detail4 from "@/assets/detail.jpg";
import detail5 from "@/assets/detail4.jpg";
import detail6 from "@/assets/detaill.jpg";
import detail7 from "@/assets/wedding-detail-2.jpg";
import reception from "@/assets/recep.jpg";
import reception1 from "@/assets/receptio.jpg";
import reception2 from "@/assets/reception.jpg";
import reception3 from "@/assets/reception0.jpg";
import reception4 from "@/assets/reception1.jpg";
import reception5 from "@/assets/receptionn.jpg";
import reception6 from "@/assets/gateau.jpg";
import reception7 from "@/assets/gateau1.jpg";
import ceremonie from "@/assets/ceremonie.jpg";
import ceremonie1 from "@/assets/ceremo.jpg";
import ceremonie2 from "@/assets/ceremonie3.jpg";
import servicePrestige from "@/assets/reception.jpg";
import serviceDestination from "@/assets/destination.jpg";
import service from "@/assets/destination0.jpg";
import service1 from "@/assets/destination1.jpg";
import service2 from "@/assets/destination2.jpg";
import service3 from "@/assets/destination4.jpg";
import process1 from "@/assets/mariee.jpeg";
import process2 from "@/assets/portrait.jpg";
import process3 from "@/assets/portrait2.jpg";
import process4 from "@/assets/portraitt.jpg";
import process5 from "@/assets/portrait6.jpg";
import process6 from "@/assets/Mokup.jpeg";
import process7 from "@/assets/smill.jpeg";
import process8 from "@/assets/smi.jpeg";
import process9 from "@/assets/smilll.jpeg";

// ────────────────────────────────────────────────
// TABLEAU DES IMAGES – catégories cohérentes
const galleryImages = [
  // Cérémonie
  { src: hero1, title: "Cérémonie au jardin", category: "Cérémonie" },
  { src: ceremonie, title: "Échange des vœux", category: "Cérémonie" },
  { src: ceremonie1, title: "Moment solennel", category: "Cérémonie" },
  { src: ceremonie2, title: "Bénédiction sous arche", category: "Cérémonie" },

  // Préparatifs
  { src: preparatif, title: "Préparatifs mariée", category: "Préparatifs" },
  { src: preparatif1, title: "Coiffure et maquillage", category: "Préparatifs" },
  { src: preparatif2, title: "Moments complices", category: "Préparatifs" },
  { src: preparatif3, title: "Robe en cours", category: "Préparatifs" },
  { src: preparatif4, title: "Détails avant cérémonie", category: "Préparatifs" },
  { src: preparatif5, title: "Préparation du marié", category: "Préparatifs" },

  // Détails
  { src: detail1, title: "Alliances sur roses", category: "Détails" },
  { src: detail2, title: "Décoration de table", category: "Détails" },
  { src: detail3, title: "Bague et bouquet", category: "Détails" },
  { src: detail4, title: "Chaussures et bijoux", category: "Détails" },
  { src: detail5, title: "Détail de robe", category: "Détails" },
  { src: detail6, title: "Invitation & fleurs", category: "Détails" },
  { src: detail7, title: "Menu et détails floraux", category: "Détails" },

  // Réception
  { src: reception, title: "Première danse", category: "Réception" },
  { src: reception1, title: "Table d’honneur", category: "Réception" },
  { src: reception2, title: "Gâteau de mariage", category: "Réception" },
  { src: reception3, title: "Ambiance festive", category: "Réception" },
  { src: reception4, title: "Ouverture du bal", category: "Réception" },
  { src: reception5, title: "Lumières romantiques", category: "Réception" },
  { src: reception6, title: "Pièce montée", category: "Réception" },
  { src: reception7, title: "Toast des mariés", category: "Réception" },

  // Destination
  { src: servicePrestige, title: "Réception prestige", category: "Destination" },
  { src: serviceDestination, title: "Mariage sur falaise", category: "Destination" },
  { src: service, title: "Vue panoramique mer", category: "Destination" },
  { src: service1, title: "Plage privée", category: "Destination" },
  { src: service2, title: "Coucher de soleil", category: "Destination" },
  { src: service3, title: "Décor exotique", category: "Destination" },

  // Portrait
  { src: process1, title: "Portrait mariée", category: "Portrait" },
  { src: process2, title: "Couple complice", category: "Portrait" },
  { src: process3, title: "Regard intense", category: "Portrait" },
  { src: process4, title: "Sourire naturel", category: "Portrait" },
  { src: process5, title: "Portrait romantique", category: "Portrait" },
  { src: process6, title: "Mockup portrait", category: "Portrait" },
  { src: process7, title: "Sourire joyeux", category: "Portrait" },
  { src: process8, title: "Portrait doux", category: "Portrait" },
  { src: process9, title: "Expression marquante", category: "Portrait" },

  // Bonus / divers
  { src: hero2, title: "Portrait des mariés", category: "Portrait" },
  { src: featured1, title: "Escapade romantique", category: "Portrait" },
  { src: featured2, title: "Moment tendre", category: "Portrait" },
  { src: featured3, title: "Arche face à la mer", category: "Destination" },
  { src: hero3, title: "Ambiance romantique", category: "Cérémonie" },
];

const categories = ["Tout", "Cérémonie", "Portrait", "Détails", "Destination", "Réception", "Préparatifs"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("Tout");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = activeCategory === "Tout"
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! - 1 + filteredImages.length) % filteredImages.length);
  };

  const nextImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! + 1) % filteredImages.length);
  };

  // Fermeture par touche Échap
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100">
      {/* Hero */}
      <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src={detail2}
          alt="Portfolio hero"
          className="absolute inset-0 w-full h-full object-cover animate-kenburns brightness-75"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/75" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-amber-300 text-sm sm:text-base tracking-[0.5em] uppercase mb-6 font-medium"
          >
            Collection
          </motion.p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl text-white font-light leading-tight drop-shadow-2xl">
            <AnimatedWord text="Galerie" delay={600} />
          </h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.2, duration: 0.9 }}
            className="w-32 sm:w-48 h-1 mx-auto mt-6 mb-6 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-full"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 1 }}
            className="text-white/90 max-w-xl md:max-w-2xl text-base sm:text-lg md:text-xl font-light"
          >
            Chaque cliché capture l'essence de votre jour J avec élégance et authenticité.
          </motion.p>
        </div>
      </section>

      {/* Filtres – sticky sur scroll */}
      <section className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm py-4 md:py-5">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 md:gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 sm:px-6 sm:py-2.5 text-xs sm:text-sm md:text-base tracking-wider uppercase rounded-full font-medium transition-all duration-300 shadow-sm ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-md scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-amber-50 hover:text-amber-700 hover:shadow"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section className="py-10 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          {filteredImages.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-24 text-gray-500 text-xl md:text-2xl font-light"
            >
              Aucune photo disponible dans cette catégorie pour le moment.
            </motion.div>
          ) : (
            <LayoutGroup>
              <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                <AnimatePresence mode="wait">
                  {filteredImages.map((img, i) => (
                    <motion.div
                      key={img.src}
                      layoutId={`card-${img.src}`}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30, transition: { duration: 0.3 } }}
                      transition={{ duration: 0.5, delay: i * 0.05, type: "spring", stiffness: 120 }}
                      className="group relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300"
                      onClick={() => openLightbox(i)}
                    >
                      <img
                        src={img.src}
                        alt={img.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <h3 className="font-heading text-lg sm:text-xl text-white drop-shadow-lg line-clamp-2">
                          {img.title}
                        </h3>
                        <p className="text-amber-300 text-xs sm:text-sm tracking-wide mt-1">{img.category}</p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </LayoutGroup>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center px-2 sm:px-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 sm:top-8 sm:right-8 text-white/90 hover:text-white z-50 transition-colors"
            >
              <X className="w-10 h-10 sm:w-12 sm:h-12" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-2 sm:left-6 md:left-12 text-white/90 hover:text-white z-50 transition-colors"
            >
              <ChevronLeft className="w-12 h-12 sm:w-16 sm:h-16" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-2 sm:right-6 md:right-12 text-white/90 hover:text-white z-50 transition-colors"
            >
              <ChevronRight className="w-12 h-12 sm:w-16 sm:h-16" />
            </button>

            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
              src={filteredImages[lightboxIndex].src}
              alt={filteredImages[lightboxIndex].title}
              className="max-w-[94vw] sm:max-w-[88vw] max-h-[80vh] sm:max-h-[85vh] object-contain rounded-2xl shadow-2xl"
              loading="eager"
              onClick={(e) => e.stopPropagation()}
            />

            <div className="absolute bottom-4 sm:bottom-8 left-0 right-0 text-center text-white px-4">
              <h3 className="font-heading text-xl sm:text-2xl md:text-3xl drop-shadow-xl line-clamp-2">
                {filteredImages[lightboxIndex].title}
              </h3>
              <p className="text-amber-300 text-sm sm:text-base md:text-lg tracking-wide mt-2">
                {filteredImages[lightboxIndex].category}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;