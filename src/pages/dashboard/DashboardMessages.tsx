import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MailOpen, Reply, Trash2, Search, Eye } from "lucide-react";

const mockMessages = [
  { id: 1, name: "Sophie Dupont", email: "sophie@email.com", date: "2026-02-19", message: "Bonjour, nous souhaiterions réserver vos services pour notre mariage prévu en juin 2026. Pouvez-vous nous envoyer vos disponibilités ?", status: "unread" as const, location: "Lyon" },
  { id: 2, name: "Marc Laurent", email: "marc@email.com", date: "2026-02-19", message: "Je souhaite avoir plus d'informations sur vos tarifs pour un mariage intimiste.", status: "unread" as const, location: "Saint-Étienne" },
  { id: 3, name: "Emma Martin", email: "emma@email.com", date: "2026-02-18", message: "Nous planifions un mariage destination en Italie. Êtes-vous disponible en septembre ?", status: "read" as const, location: "Paris" },
  { id: 4, name: "Lucas Petit", email: "lucas@email.com", date: "2026-02-17", message: "Merci pour les magnifiques photos ! Nous aimerions commander un album supplémentaire.", status: "replied" as const, location: "Marseille" },
];

export default function DashboardMessages() {
  const [messages, setMessages] = useState(mockMessages);
  const [selectedMsg, setSelectedMsg] = useState<typeof mockMessages[0] | null>(null);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = messages.filter((m) => {
    if (filter !== "all" && m.status !== filter) return false;
    if (search && !m.name.toLowerCase().includes(search.toLowerCase()) && !m.message.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const markAsRead = (id: number) => {
    setMessages((prev) => prev.map((m) => m.id === id ? { ...m, status: "read" as const } : m));
  };

  const statusColors = { unread: "bg-primary", read: "bg-muted-foreground/30", replied: "bg-green-500" };
  const statusLabels = { unread: "Non lu", read: "Lu", replied: "Répondu" };

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input value={search} onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-card border border-border rounded-lg text-sm focus:border-primary outline-none" placeholder="Rechercher..." />
        </div>
        <div className="flex gap-2">
          {[
            { key: "all", label: "Tous" },
            { key: "unread", label: "Non lus" },
            { key: "read", label: "Lus" },
            { key: "replied", label: "Répondus" },
          ].map((f) => (
            <button key={f.key} onClick={() => setFilter(f.key)}
              className={`px-4 py-2 text-xs tracking-wider uppercase rounded-lg transition-all ${filter === f.key ? "gradient-gold text-primary-foreground" : "bg-card border border-border text-muted-foreground hover:text-foreground"}`}>
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Messages list */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-3">
          {filtered.map((msg, i) => (
            <motion.div key={msg.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
              onClick={() => { setSelectedMsg(msg); markAsRead(msg.id); }}
              className={`p-4 bg-card rounded-lg border border-border hover:shadow-luxury cursor-pointer transition-all ${selectedMsg?.id === msg.id ? "ring-1 ring-primary" : ""} ${msg.status === "unread" ? "border-l-4 border-l-primary" : ""}`}>
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-sm">{msg.name}</span>
                <span className="text-xs text-muted-foreground">{msg.date}</span>
              </div>
              <p className="text-sm text-muted-foreground truncate">{msg.message}</p>
              <div className="flex items-center gap-2 mt-2">
                <span className={`w-2 h-2 rounded-full ${statusColors[msg.status]}`} />
                <span className="text-xs text-muted-foreground">{statusLabels[msg.status]}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Message detail */}
        {selectedMsg && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
            className="bg-card rounded-xl border border-border p-6 sticky top-4">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-heading text-xl font-semibold">{selectedMsg.name}</h3>
              <div className="flex gap-2">
                <button className="p-2 rounded-lg hover:bg-secondary"><Reply className="w-4 h-4" /></button>
                <button className="p-2 rounded-lg hover:bg-destructive/10 text-destructive"><Trash2 className="w-4 h-4" /></button>
              </div>
            </div>
            <div className="space-y-3 text-sm mb-6">
              <div className="flex gap-2"><span className="text-muted-foreground">Email:</span>{selectedMsg.email}</div>
              <div className="flex gap-2"><span className="text-muted-foreground">Date:</span>{selectedMsg.date}</div>
              <div className="flex gap-2"><span className="text-muted-foreground">Lieu:</span>{selectedMsg.location}</div>
            </div>
            <div className="line-elegant mb-6" />
            <p className="text-foreground/80 leading-relaxed">{selectedMsg.message}</p>
            <button className="mt-6 w-full py-3 gradient-gold text-primary-foreground text-sm tracking-widest uppercase rounded-sm">
              Répondre
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
