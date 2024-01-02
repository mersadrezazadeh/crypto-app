"use client";

import { useTheme } from "next-themes";

function ThemeSwitcher() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
    >
      X
    </button>
  );
}

export default ThemeSwitcher;
