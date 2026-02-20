import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Image, Trash2, Edit, Upload } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import featured1 from "@/assets/wedding-featured-1.jpg";
import featured2 from "@/assets/wedding-featured-2.jpg";
import featured3 from "@/assets/wedding-featured-3.jpg";

const mockGalleries = [
  { id: 1, title: "Mariage Provence 2024", count: 145, cover: featured1, date: "2024-06-15" },
  { id: 2, title: "Sophie & Marc - Lyon", count: 220, cover: hero1, date: "2024-09-20" },
  { id: 3, title: "Mariage Destination - Italie", count: 310, cover: featured3, date: "2024-07-10" },
  { id: 4, title: "Emma & Lucas - Château", count: 185, cover: hero2, date: "2024-05-22" },
  { id: 5, title: "Mariage Intimiste - Beaujolais", count: 95, cover: featured2, date: "2024-08-03" },
];

export default function DashboardGalleries() {
  const [galleries] = useState(mockGalleries);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-muted-foreground text-sm">{galleries.length} galeries • {galleries.reduce((a, g) => a + g.count, 0)} photos</p>
        <button className="flex items-center gap-2 px-6 py-3 gradient-gold text-primary-foreground text-sm tracking-widest uppercase rounded-sm hover:shadow-luxury transition-all">
          <Plus className="w-4 h-4" /> Nouvelle Galerie
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleries.map((gallery, i) => (
          <motion.div key={gallery.id} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }}
            className="bg-card rounded-xl border border-border overflow-hidden group hover:shadow-luxury transition-all duration-300">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={gallery.cover} alt={gallery.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="flex gap-2">
                  <button className="p-3 bg-background/90 rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
                    <Upload className="w-4 h-4" />
                  </button>
                  <button className="p-3 bg-background/90 rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="p-3 bg-background/90 rounded-full hover:bg-destructive hover:text-destructive-foreground transition-all">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="absolute top-3 right-3 px-3 py-1 bg-background/80 rounded-full text-xs flex items-center gap-1">
                <Image className="w-3 h-3" /> {gallery.count}
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-heading text-lg font-semibold">{gallery.title}</h3>
              <p className="text-muted-foreground text-xs mt-1">{gallery.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
