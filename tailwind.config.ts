import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      height: {
        screen: "100dvh",
      },
    },
    container: { center: true },
    fontFamily: {
      sans: ["var(--font-inter)"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      brand: {
        100: "#ebebfd",
        400: "#7878fa",
        600: "#424286",
        700: "#353570",
        900: "#1e1932",
      },
      gray: {
        0: "#ffffff",
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        850: "#18212f",
        900: "#111827",
      },
      green: { 100: "#01f1e3", 200: "#00b1a7" },
      red: { 200: "#fe2264" },
      orange: { 200: "#f7931A" },
      blue: { 200: "#627eea" },
      pink: { 200: "#D878FA" },
    },
  },
  plugins: [],
};
export default config;
