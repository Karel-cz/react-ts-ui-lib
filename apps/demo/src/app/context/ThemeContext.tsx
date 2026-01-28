import { createContext, useContext, useState, type ReactNode } from "react";

type ThemeContextType = {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  toggleDarkMode: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

type ThemeProviderProps = {
  children: ReactNode;
  initialDarkMode?: boolean;
};

export const ThemeProvider = ({
  children,
  initialDarkMode = true,
}: ThemeProviderProps) => {
  const [darkMode, setDarkMode] = useState<boolean>(initialDarkMode);
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
};

export default ThemeContext;
