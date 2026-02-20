import { motion } from "framer-motion";
import { MessageSquare, Image, Bell, Eye, Users, TrendingUp, ArrowUpRight, ArrowDownRight } from "lucide-react";

const stats = [
  { label: "Visiteurs ce mois", value: "2,847", change: "+12.5%", up: true, icon: Eye },
  { label: "Messages reçus", value: "23", change: "+5", up: true, icon: MessageSquare },
  { label: "Photos publiées", value: "1,245", change: "+48", up: true, icon: Image },
  { label: "Notifications", value: "8", change: "3 non lues", up: false, icon: Bell },
];

const recentMessages = [
  { name: "Sophie Dupont", email: "sophie@email.com", subject: "Demande de réservation - Juin 2026", date: "Il y a 2h", read: false },
  { name: "Marc Laurent", email: "marc@email.com", subject: "Question sur les tarifs", date: "Il y a 5h", read: false },
  { name: "Emma Martin", email: "emma@email.com", subject: "Mariage destination Italie", date: "Hier", read: true },
  { name: "Lucas Petit", email: "lucas@email.com", subject: "Reportage anniversaire de mariage", date: "Il y a 2 jours", read: true },
];

const recentActivity = [
  { action: "Nouveau message de Sophie Dupont", time: "Il y a 2h", type: "message" },
  { action: "3 nouvelles photos ajoutées à 'Mariage Provence'", time: "Il y a 6h", type: "upload" },
  { action: "Réponse envoyée à Emma Martin", time: "Hier", type: "reply" },
  { action: "Nouvelle galerie créée : Mariage Hiver 2024", time: "Il y a 2 jours", type: "gallery" },
  { action: "Connexion administrateur", time: "Il y a 3 jours", type: "login" },
];

export default function DashboardHome() {
  return (
    <div className="space-y-8">
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-6 bg-card rounded-xl border border-border hover:shadow-luxury transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 rounded-lg gradient-gold flex items-center justify-center">
                <stat.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className={`text-xs flex items-center gap-1 ${stat.up ? "text-green-600" : "text-muted-foreground"}`}>
                {stat.up ? <ArrowUpRight className="w-3 h-3" /> : null}
                {stat.change}
              </span>
            </div>
            <p className="font-heading text-3xl font-semibold">{stat.value}</p>
            <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Messages */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          className="bg-card rounded-xl border border-border p-6">
          <h2 className="font-heading text-xl font-semibold mb-4">Messages Récents</h2>
          <div className="space-y-3">
            {recentMessages.map((msg, i) => (
              <div key={i} className={`flex items-start gap-3 p-3 rounded-lg transition-all hover:bg-secondary/50 ${!msg.read ? "bg-primary/5" : ""}`}>
                <div className={`w-2 h-2 mt-2 rounded-full flex-shrink-0 ${!msg.read ? "bg-primary" : "bg-transparent"}`} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium truncate">{msg.name}</p>
                    <span className="text-xs text-muted-foreground flex-shrink-0">{msg.date}</span>
                  </div>
                  <p className="text-sm text-muted-foreground truncate">{msg.subject}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
          className="bg-card rounded-xl border border-border p-6">
          <h2 className="font-heading text-xl font-semibold mb-4">Activité Récente</h2>
          <div className="space-y-4">
            {recentActivity.map((act, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0" />
                <div>
                  <p className="text-sm">{act.action}</p>
                  <p className="text-xs text-muted-foreground">{act.time}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
