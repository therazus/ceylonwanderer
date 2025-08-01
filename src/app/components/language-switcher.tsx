"use client";

import { Languages } from "lucide-react";
import { useLanguage } from "../context/language-context";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Languages className="h-5 w-5 text-gray-600" />
      <div className="flex rounded-full border border-gray-200 bg-white p-1">
        <button
          onClick={() => setLanguage("en")}
          className={`rounded-full px-4 py-1 text-base font-medium transition-colors ${
            language === "en"
              ? "bg-primary/10 text-primary"
              : "text-gray-600 hover:bg-gray-50"
          }`}
        >
          En
        </button>
        <button
          onClick={() => setLanguage("de")}
          className={`rounded-full px-4 py-1 text-base font-medium transition-colors ${
            language === "de"
              ? "bg-primary/10 text-primary"
              : "text-gray-600 hover:bg-gray-50"
          }`}
        >
          De
        </button>
      </div>
    </div>
  );
}
