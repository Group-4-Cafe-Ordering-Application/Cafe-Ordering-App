import React, { createContext, useContext, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { defaultTheme, darkTheme } from "./theme";

const ThemeContext = createContext();

export function useThemeContext() {
  return useContext(ThemeContext);
}

export function CustomThemeProvider({ children }) {
  const getTheme = (themeName) => {
    switch (themeName) {
      case "dark":
        return darkTheme;
      default:
        return defaultTheme;
    }
  };

  const [currentTheme, setCurrentTheme] = useState(() => {
    // Check if a theme is stored in local storage
    const storedThemeName = localStorage.getItem("theme");
    // Return the stored theme, or the default theme if no theme is stored
    return storedThemeName ? getTheme(storedThemeName) : defaultTheme;
  });

  const setTheme = (themeName) => {
    setCurrentTheme(getTheme(themeName));
    localStorage.setItem("theme", themeName);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme }}>
      <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
