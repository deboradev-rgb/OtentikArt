import { useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  LayoutDashboard, MessageSquare, Image, Bell, BarChart3,
  LogOut, Menu, X, ChevronRight
} from "lucide-react";

const sidebarLinks = [
  { to: "/dashboard", label: "Tableau de bord", icon: LayoutDashboard },
  { to: "/dashboard/messages", label: "Messages", icon: MessageSquare },
  { to: "/dashboard/galleries", label: "Galeries", icon: Image },
  { to: "/dashboard/notifications", label: "Notifications", icon: Bell },
  { to: "/dashboard/stats", label: "Statistiques", icon: BarChart3 },
];

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("otentik_auth");
    navigate("/login");
  };

  const isActive = (path: string) => location.pathname === path;

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      <div className="p-6 border-b border-border">
        <Link to="/" className="font-heading text-2xl font-semibold gradient-gold-text">Ô'tentik</Link>
        <p className="text-muted-foreground text-xs mt-1">Administration</p>
      </div>
      <nav className="flex-1 p-4 space-y-1">
        {sidebarLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            onClick={() => setMobileSidebarOpen(false)}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-all duration-200 ${
              isActive(link.to)
                ? "bg-primary text-primary-foreground shadow-luxury"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary"
            }`}
          >
            <link.icon className="w-5 h-5" />
            {(sidebarOpen || mobileSidebarOpen) && <span>{link.label}</span>}
          </Link>
        ))}
      </nav>
      <div className="p-4 border-t border-border space-y-2">
        <Link to="/" className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-all">
          <ChevronRight className="w-5 h-5" />
          {(sidebarOpen || mobileSidebarOpen) && <span>Voir le site</span>}
        </Link>
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-destructive hover:bg-destructive/10 transition-all w-full"
        >
          <LogOut className="w-5 h-5" />
          {(sidebarOpen || mobileSidebarOpen) && <span>Déconnexion</span>}
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex bg-background">
      {/* Desktop Sidebar */}
      <aside
        className={`hidden lg:flex flex-col border-r border-border bg-card transition-all duration-300 ${
          sidebarOpen ? "w-64" : "w-20"
        }`}
      >
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar */}
      {mobileSidebarOpen && (
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          className="fixed inset-0 z-50 lg:hidden"
        >
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileSidebarOpen(false)} />
          <div className="relative w-64 h-full bg-card border-r border-border">
            <SidebarContent />
          </div>
        </motion.div>
      )}

      {/* Main */}
      <div className="flex-1 flex flex-col min-h-screen">
        <header className="h-16 border-b border-border bg-card flex items-center justify-between px-4 lg:px-8">
          <div className="flex items-center gap-3">
            <button onClick={() => { setSidebarOpen(!sidebarOpen); setMobileSidebarOpen(!mobileSidebarOpen); }} className="p-2 hover:bg-secondary rounded-lg transition-all">
              {mobileSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <h1 className="font-heading text-xl font-semibold hidden sm:block">
              {sidebarLinks.find((l) => isActive(l.to))?.label || "Dashboard"}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <div className="w-8 h-8 rounded-full gradient-gold flex items-center justify-center text-primary-foreground text-sm font-semibold">
              A
            </div>
          </div>
        </header>
        <main className="flex-1 p-4 lg:p-8 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
