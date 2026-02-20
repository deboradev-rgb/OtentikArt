import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import hero2 from "@/assets/hero-2.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    // Mock auth - in production connect to Laravel API
    if (email === "admin@otentik.fr" && password === "admin123") {
      localStorage.setItem("otentik_auth", "true");
      navigate("/dashboard");
    } else {
      toast({ title: "Erreur", description: "Email ou mot de passe incorrect", variant: "destructive" });
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Image side */}
      <div className="hidden lg:block relative overflow-hidden">
        <img src={hero2} alt="Wedding" className="absolute inset-0 w-full h-full object-cover animate-kenburns" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        <div className="relative z-10 h-full flex flex-col justify-end p-16">
          <h2 className="font-heading text-5xl text-ivory font-light mb-4">Ô'tentik</h2>
          <p className="text-ivory/70 font-light max-w-md">Espace d'administration pour gérer votre portfolio, vos messages et votre contenu.</p>
        </div>
      </div>

      {/* Form side */}
      <div className="flex items-center justify-center p-8 bg-background">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          <div className="text-center mb-10">
            <h1 className="font-heading text-4xl font-semibold gradient-gold-text mb-2">Ô'tentik</h1>
            <p className="text-muted-foreground text-sm">Connectez-vous à votre espace admin</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="text-sm font-medium tracking-wider uppercase mb-2 block">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-card border border-border rounded-md text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  placeholder="admin@otentik.fr"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium tracking-wider uppercase mb-2 block">Mot de passe</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type={showPassword ? "text" : "password"} required value={password} onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-11 pr-11 py-3 bg-card border border-border rounded-md text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  placeholder="••••••••"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
            <button
              type="submit" disabled={loading}
              className="w-full py-4 gradient-gold text-primary-foreground text-sm tracking-widest uppercase rounded-sm hover:shadow-luxury-lg transition-all duration-500 disabled:opacity-50"
            >
              {loading ? "Connexion..." : "Se Connecter"}
            </button>
          </form>

          <p className="text-center text-xs text-muted-foreground mt-8">
            Identifiants démo : admin@otentik.fr / admin123
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
