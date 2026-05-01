import { useCallback, useEffect, useState } from "react";
import type { Language } from "../types/language";

const LANGUAGE_STORAGE_KEY = "portfolio-language";
const LANGUAGE_CHANGE_EVENT = "portfolio-language-change";

function readLanguage(): Language {
  try {
    const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return storedLanguage === "EN" ? "EN" : "KR";
  } catch {
    return "KR";
  }
}

export function useLanguage() {
  const [language, setLanguageState] = useState<Language>(readLanguage);

  useEffect(() => {
    const syncLanguage = () => setLanguageState(readLanguage());

    window.addEventListener("storage", syncLanguage);
    window.addEventListener(LANGUAGE_CHANGE_EVENT, syncLanguage);

    return () => {
      window.removeEventListener("storage", syncLanguage);
      window.removeEventListener(LANGUAGE_CHANGE_EVENT, syncLanguage);
    };
  }, []);

  const setLanguage = useCallback((nextLanguage: Language) => {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
    window.dispatchEvent(new Event(LANGUAGE_CHANGE_EVENT));
  }, []);

  return { language, setLanguage };
}
