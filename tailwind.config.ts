import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        heading: ['"Cormorant Garamond"', "Georgia", "serif"],
        body: ['"Montserrat"', "system-ui", "sans-serif"],
      },

      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        // Palette existante (conservée)
        copper: {
          DEFAULT: "#EB7C17",
          50: "#FEF3E9",
          100: "#FEE8D2",
          200: "#FCD1A5",
          300: "#F9BA78",
          400: "#F6A34B",
          500: "#EB7C17",
          600: "#C96612",
          700: "#A7520E",
          800: "#853E0A",
          900: "#632A06",
        },

        beigeGold: "#EDD098",
        terracotta: "#A55423",
        deepBrown: "#290E18",
        navyDeep: "#1B2A48",
        tealOcean: "#1E729E",

        gold: {
          DEFAULT: "#EDD098",
          light: "#F5E8C8",
          dark: "#A55423",
        },

        // Améliorations lisibilité – couleurs texte dédiées
        text: {
          primary: "#FDFBF7",       // blanc chaud → excellent sur fond sombre
          secondary: "#F0E4D0",     // beige clair lisible (au lieu de trop clair)
          muted: "#D4C5B0",         // gris-beige doux, contraste ≥ 4.5:1 sur navy/deepBrown
          dark: "#2A1A10",          // brun très foncé pour textes sur fond clair
          inverse: "#0F0F0F",       // noir quasi-pur quand besoin max contraste
        },

        primary: {
          DEFAULT: "#EB7C17",
          foreground: "#FFFFFF",    // toujours blanc sur boutons primary
        },

        secondary: {
          DEFAULT: "#290E18",
          foreground: "#FDFBF7",    // texte clair forcé
        },

        muted: {
          DEFAULT: "#3A4759",       // gris-bleu plus clair que navyDeep pur
          foreground: "#E5E7EB",
        },

        accent: {
          DEFAULT: "#1E729E",
          foreground: "#FFFFFF",
        },

        card: {
          DEFAULT: "#252F3F",       // navyDeep un peu éclairci → meilleur contraste texte
          foreground: "#F3F4F6",
        },

        popover: {
          DEFAULT: "#2C1F19",
          foreground: "#F5E8D0",
        },

        // Variables CSS – lisibilité prioritaire
        "--background": "220 25% 9%",
        "--foreground": "40 20% 98%",
        "--card": "220 28% 16%",          // un peu plus clair que #1B2A48
        "--card-foreground": "0 0% 98%",
        "--popover": "220 35% 13%",
        "--popover-foreground": "40 15% 96%",
        "--primary": "30 90% 55%",
        "--primary-foreground": "0 0% 100%",
        "--secondary": "220 40% 13%",
        "--secondary-foreground": "40 20% 97%",
        "--muted": "220 18% 22%",
        "--muted-foreground": "40 15% 78%",   // plus clair que 65%
        "--accent": "197 60% 48%",
        "--accent-foreground": "0 0% 100%",
        "--border": "220 20% 24%",
        "--input": "220 20% 24%",
        "--ring": "30 90% 55%",
        "--radius": "0.5rem",

        // Gradients
        "--gradient-start": "#EB7C17",
        "--gradient-mid": "#A55423",
        "--gradient-end": "#1E729E",
      },

      // Ajout direct pour usage facile
      textColor: {
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
        muted: "var(--text-muted)",
        dark: "var(--text-dark)",
        inverse: "var(--text-inverse)",
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        pill: "9999px",
      },

      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
        "fade-in": { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "kenburns": { "0%": { transform: "scale(1)" }, "100%": { transform: "scale(1.12)" } },
        "gradient-x": { "0%, 100%": { backgroundPosition: "0% 50%" }, "50%": { backgroundPosition: "100% 50%" } },
        "pulse-glow": { "0%, 100%": { boxShadow: "0 0 0 0 rgba(235,124,23,0.4)" }, "70%": { boxShadow: "0 0 0 15px rgba(235,124,23,0)" } },
      },

      animation: {
        "accordion-down": "accordion-down 0.3s ease-out",
        "accordion-up": "accordion-up 0.3s ease-out",
        "fade-in": "fade-in 0.9s ease-out forwards",
        "kenburns": "kenburns 18s ease-in-out infinite alternate",
        "gradient-x": "gradient-x 12s ease infinite",
        "pulse-glow": "pulse-glow 2.5s ease-in-out infinite",
      },

      boxShadow: {
        luxury: "0 10px 25px -5px rgba(41, 14, 24, 0.25)",
        "luxury-lg": "0 20px 40px -10px rgba(235, 124, 23, 0.3)",
        gold: "0 0 25px -5px rgba(237, 208, 152, 0.5)",
      },

      backgroundImage: {
        "gradient-hero": "linear-gradient(to bottom right, #290E18, #1B2A48, #1E729E)",
        "gradient-gold-copper": "linear-gradient(90deg, #EDD098, #EB7C17, #A55423)",
        "gradient-ocean-copper": "linear-gradient(135deg, #1E729E, #EB7C17)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;