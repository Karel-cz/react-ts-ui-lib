import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app/App.tsx";
import { ThemeProvider } from "../src/app/context/themeContext.tsx";
import { LanguageProvider } from "../src/app/context/languageContext.tsx";
import { AuthProvider } from "../src/app/context/AuthContext.tsx";
import { storage } from "@react-ts-ui-lib/utilities";

const STORAGE_KEY_DARK_MODE = "app-dark-mode";
const initialDarkMode = storage.get(STORAGE_KEY_DARK_MODE, true);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <LanguageProvider>
        <ThemeProvider initialDarkMode={initialDarkMode}>
          <App />
        </ThemeProvider>
      </LanguageProvider>
    </AuthProvider>
  </StrictMode>
);
