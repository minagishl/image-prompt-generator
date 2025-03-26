import { useState } from "react";
import { tv } from "tailwind-variants";

const rootStyles = tv({
  base: "flex flex-col gap-5 items-start",
});

const containerStyles = tv({
  base: "flex flex-col items-start",
});

const buttonGroupStyles = tv({
  base: "inline-flex rounded-lg border border-gray-200 bg-white p-1 dark:border-gray-700 dark:bg-gray-800",
});

const languageButtonStyles = tv({
  base: "px-4 py-2 text-sm font-medium rounded-md transition-all duration-300",
  variants: {
    active: {
      true: "bg-orange-500/10 text-orange-600 dark:bg-orange-400/10 dark:text-orange-400 shadow-sm",
      false:
        "text-gray-700 hover:bg-gray-100/70 dark:text-gray-300 dark:hover:bg-gray-700/50",
    },
  },
  defaultVariants: {
    active: false,
  },
});

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
    <div className={rootStyles()}>
      <div className={containerStyles()}>
        <div className={buttonGroupStyles()}>
          {languages.map((lang) => (
            <button
              key={lang}
              className={languageButtonStyles({
                active: activeLanguage === lang,
              })}
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
