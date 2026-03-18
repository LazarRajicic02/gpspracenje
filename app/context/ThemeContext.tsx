"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

const ThemeContext = createContext<{ theme: Theme; setTheme: (t: Theme) => void } | null>(null);

const STORAGE_KEY = "gpspracenje-theme";

function getTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  const el = document.documentElement;
  return el.getAttribute("data-theme") === "dark" || el.classList.contains("dark") ? "dark" : "light";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setThemeState(getTheme());
    setMounted(true);
  }, []);

  const setTheme = useCallback((next: Theme) => {
    if (typeof window === "undefined") return;
    const el = document.documentElement;
    setThemeState(next);
    localStorage.setItem(STORAGE_KEY, next);
    if (next === "dark") {
      el.classList.add("dark");
      el.setAttribute("data-theme", "dark");
    } else {
      el.classList.remove("dark");
      el.setAttribute("data-theme", "light");
    }
  }, []);
  const valueTheme = mounted ? theme : "dark";

  return <ThemeContext.Provider value={{ theme: valueTheme, setTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
