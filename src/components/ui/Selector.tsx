import { useState } from "react";

interface LanguageSelectorProps {
  languages?: string[];
  defaultLanguage?: string;
  onChange: (value: string) => void;
}

export function LanguageSelector({
  languages = ["EN", "JA", "ZH"],
  defaultLanguage = "EN",
  onChange,
}: LanguageSelectorProps) {
  const [activeLanguage, setActiveLanguage] = useState(defaultLanguage);

  return (
    <div className="flex flex-col gap-5 items-start">
      <div className="flex flex-col items-start">
        <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1 dark:border-gray-700 dark:bg-gray-800">
          {languages.map((lang) => (
            <button
              key={lang}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                activeLanguage === lang
                  ? "bg-orange-500/10 text-orange-600 dark:bg-orange-400/10 dark:text-orange-400 shadow-sm"
                  : "text-gray-700 hover:bg-gray-100/70 dark:text-gray-300 dark:hover:bg-gray-700/50"
              }`}
              onClick={() => {
                setActiveLanguage(lang);
                onChange(lang);
              }}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
