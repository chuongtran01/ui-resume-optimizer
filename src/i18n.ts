import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpApi) // Loads translations from backend
  .use(LanguageDetector) // Detects user language
  .use(initReactI18next) // Integrates with React
  .init({
    fallbackLng: "en", // Default language
    supportedLngs: ["en", "fr", "es"], // List of supported languages
    interpolation: {
      escapeValue: false, // React already protects from XSS
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json", // Path to translation files
    },
    detection: {
      order: ["cookie", "localStorage", "navigator", "htmlTag"], // Language detection order
      caches: ["cookie"], // Cache user language in cookies
    },
  });

export default i18n;
