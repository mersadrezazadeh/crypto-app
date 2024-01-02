"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";

function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemeProvider enableSystem={true} attribute="class">
      {children}
    </NextThemeProvider>
  );
}

export default ThemeProvider;
