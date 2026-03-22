"use client";

import { Moon, Sun } from "lucide-react";

interface ThemeToggleProps {
  isDark: boolean;
  toggleTheme: () => void;
  showLabel?: boolean;
}

export function ThemeToggle({ isDark, toggleTheme, showLabel = false }: ThemeToggleProps) {
  return (
    <button
      onClick={toggleTheme}
      className={
        showLabel
          ? "flex items-center gap-2 text-muted hover:text-emerald-400 transition-colors py-2"
          : "p-2 rounded-lg text-muted hover:text-emerald-400 hover:bg-card transition-all"
      }
      aria-label="Toggle theme"
      aria-pressed={isDark}
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
      {showLabel && (isDark ? "Light Mode" : "Dark Mode")}
    </button>
  );
}
