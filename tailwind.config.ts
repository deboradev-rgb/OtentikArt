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

        // Palette principale - COULEURS VIVANTES
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

        terracotta: {
          DEFAULT: "#D94F1A",
          light: "#F15A24",
          dark: "#A55423",
        },

        gold: {
          DEFAULT: "#F4C542",
          light: "#FFD966",
          dark: "#DAA520",
        },

        teal: {
          DEFAULT: "#1E9AB0",
          light: "#4ECDC4",
          dark: "#1A6B7A",
        },

        navy: {
          DEFAULT: "#1A3B5C",
          light: "#2A4F73",
          dark: "#0F2A40",
        },

        rose: {
          DEFAULT: "#E66A7F",
          light: "#F4A3B8",
          dark: "#C24D62",
        },

        // Textes avec excellente lisibilité sur tous les fonds
        text: {
          light: {
            primary: "#1A1A2E",    // Texte principal sur fond clair
            secondary: "#2D4059",   // Texte secondaire sur fond clair
            muted: "#4A5568",       // Texte atténué sur fond clair
          },
          dark: {
            primary: "#F7F7F7",     // Texte principal sur fond sombre
            secondary: "#E0E0E0",    // Texte secondaire sur fond sombre
            muted: "#A0A0A0",        // Texte atténué sur fond sombre
          }
        },

        // Thème clair
        light: {
          background: "#FFF9F5",
          foreground: "#1A1A2E",
          card: "#FFFFFF",
          "card-foreground": "#1A1A2E",
          popover: "#FFFFFF",
          "popover-foreground": "#1A1A2E",
          muted: "#F0F0F0",
          "muted-foreground": "#4A5568",
          accent: "#F4C542",
          "accent-foreground": "#1A1A2E",
          border: "#E2E8F0",
          input: "#E2E8F0",
        },

        // Thème sombre
        dark: {
          background: "#0F172A",
          foreground: "#F7F7F7",
          card: "#1E293B",
          "card-foreground": "#F7F7F7",
          popover: "#1E293B",
          "popover-foreground": "#F7F7F7",
          muted: "#334155",
          "muted-foreground": "#A0A0A0",
          accent: "#F4C542",
          "accent-foreground": "#0F172A",
          border: "#334155",
          input: "#334155",
        },

        // Variables CSS - Support light/dark mode
        "--background": "0 0% 100%",
        "--foreground": "222.2 84% 4.9%",
        "--card": "0 0% 100%",
        "--card-foreground": "222.2 84% 4.9%",
        "--popover": "0 0% 100%",
        "--popover-foreground": "222.2 84% 4.9%",
        "--primary": "24 90% 55%",
        "--primary-foreground": "210 40% 98%",
        "--secondary": "210 40% 96.1%",
        "--secondary-foreground": "222.2 47.4% 11.2%",
        "--muted": "210 40% 96.1%",
        "--muted-foreground": "215.4 16.3% 46.9%",
        "--accent": "45 90% 60%",
        "--accent-foreground": "222.2 47.4% 11.2%",
        "--border": "214.3 31.8% 91.4%",
        "--input": "214.3 31.8% 91.4%",
        "--ring": "24 90% 55%",
        "--radius": "0.5rem",

        // Gradients vibrants
        "--gradient-start": "#EB7C17",
        "--gradient-mid": "#F4C542",
        "--gradient-end": "#1E9AB0",
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
        "float": { "0%, 100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-10px)" } },
        "shine": { "0%": { left: "-100%" }, "100%": { left: "200%" } },
      },

      animation: {
        "accordion-down": "accordion-down 0.3s ease-out",
        "accordion-up": "accordion-up 0.3s ease-out",
        "fade-in": "fade-in 0.9s ease-out forwards",
        "kenburns": "kenburns 18s ease-in-out infinite alternate",
        "gradient-x": "gradient-x 12s ease infinite",
        "pulse-glow": "pulse-glow 2.5s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "shine": "shine 3s ease-in-out infinite",
      },

      boxShadow: {
        luxury: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.02)",
        "luxury-lg": "0 20px 40px -10px rgba(235, 124, 23, 0.3)",
        "luxury-xl": "0 30px 60px -10px rgba(244, 197, 66, 0.4)",
        gold: "0 0 25px -5px rgba(244, 197, 66, 0.5)",
        "inner-glow": "inset 0 0 20px rgba(244, 197, 66, 0.3)",
      },

      backgroundImage: {
        "gradient-hero": "linear-gradient(to bottom right, #1A3B5C, #0F172A, #1E9AB0)",
        "gradient-gold-copper": "linear-gradient(90deg, #F4C542, #EB7C17, #E66A7F)",
        "gradient-ocean-copper": "linear-gradient(135deg, #1E9AB0, #EB7C17)",
        "gradient-sunset": "linear-gradient(135deg, #E66A7F, #F4C542, #EB7C17)",
        "gradient-shine": "linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.1) 50%, transparent 75%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;