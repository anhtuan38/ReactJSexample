import { useState, createContext } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  const context = {
    theme,
    toggleTheme,
  };
  return (
    <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext };
