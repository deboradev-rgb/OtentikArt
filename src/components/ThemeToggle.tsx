import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return false;
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="p-2 rounded-full transition-colors duration-300 hover:bg-secondary"
      aria-label="Toggle theme"
    >
      {dark ? <Sun className="w-5 h-5 text-gold" /> : <Moon className="w-5 h-5 text-foreground" />}
    </button>
  );
}
