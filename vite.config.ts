import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(), 
    mode === "development" && componentTagger()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // AJOUTEZ CES LIGNES POUR LA PRODUCTION :
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
    // Important pour le routage
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  // Important pour le déploiement sur Vercel
  base: "/",
}));