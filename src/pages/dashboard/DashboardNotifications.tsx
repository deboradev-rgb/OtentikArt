import { useState } from "react";
import { motion } from "framer-motion";
import { Bell, MessageSquare, Image, LogIn, Reply, CheckCheck } from "lucide-react";

const mockNotifications = [
  { id: 1, type: "message", text: "Nouveau message de Sophie Dupont", time: "Il y a 2h", read: false, icon: MessageSquare },
  { id: 2, type: "upload", text: "3 nouvelles photos ajoutées à 'Mariage Provence'", time: "Il y a 6h", read: false, icon: Image },
  { id: 3, type: "message", text: "Nouveau message de Marc Laurent", time: "Il y a 8h", read: false, icon: MessageSquare },
  { id: 4, type: "reply", text: "Réponse envoyée à Emma Martin", time: "Hier", read: true, icon: Reply },
  { id: 5, type: "login", text: "Connexion administrateur détectée", time: "Hier", read: true, icon: LogIn },
  { id: 6, type: "message", text: "Nouveau message de Lucas Petit", time: "Il y a 2 jours", read: true, icon: MessageSquare },
  { id: 7, type: "upload", text: "Galerie 'Mariage Hiver 2024' créée", time: "Il y a 3 jours", read: true, icon: Image },
];

export default function DashboardNotifications() {
  const [notifications, setNotifications] = useState(mockNotifications);
  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAllRead = () => setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-muted-foreground text-sm">{unreadCount} notification{unreadCount > 1 ? "s" : ""} non lue{unreadCount > 1 ? "s" : ""}</p>
        <button onClick={markAllRead} className="flex items-center gap-2 px-4 py-2 text-sm text-primary hover:bg-primary/10 rounded-lg transition-all">
          <CheckCheck className="w-4 h-4" /> Tout marquer comme lu
        </button>
      </div>

      <div className="space-y-3 max-w-3xl">
        {notifications.map((notif, i) => (
          <motion.div key={notif.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}
            className={`flex items-start gap-4 p-4 rounded-lg border transition-all hover:shadow-luxury cursor-default ${
              !notif.read ? "bg-primary/5 border-primary/20" : "bg-card border-border"
            }`}
            onClick={() => setNotifications((prev) => prev.map((n) => n.id === notif.id ? { ...n, read: true } : n))}
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${!notif.read ? "gradient-gold" : "bg-secondary"}`}>
              <notif.icon className={`w-5 h-5 ${!notif.read ? "text-primary-foreground" : "text-muted-foreground"}`} />
            </div>
            <div className="flex-1">
              <p className={`text-sm ${!notif.read ? "font-medium" : ""}`}>{notif.text}</p>
              <p className="text-xs text-muted-foreground mt-1">{notif.time}</p>
            </div>
            {!notif.read && <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
