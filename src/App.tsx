import { useState, useEffect } from "react";
import type { Options } from "./context";
import { options } from "./context";
import { HiOutlineTrash } from "react-icons/hi";
import copy from "copy-to-clipboard";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-t from-orange-100 to-gray-50 dark:from-orange-900 dark:to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-10">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Image Prompt Generator
          </h1>
          <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
            Create perfect prompts for your AI image generation
          </p>
        </div>
        <Layout />
      </div>
    </div>
  );
}

interface RecordType {
  [key: number]: {
    tag: string;
    ja: string;
    en: string;
    zh: string;
  }[];
}

const createRecordFromOptions = (options: Options): RecordType => {
  return options.tags.reduce<RecordType>((record, tagEntry) => {
    if (!record[tagEntry.class_id]) {
      record[tagEntry.class_id] = [];
    }
    record[tagEntry.class_id].push({
      tag: tagEntry.tag,
      ja: tagEntry.ja,
      en: tagEntry.en,
      zh: tagEntry.zh,
    });
    return record;
  }, {});
};

const record = createRecordFromOptions(options);
const classification = options.classification;

type selectTags = {
  [key: string]: number;
};

const Select = ({ setValue }: { setValue: (value: string) => void }) => {
  const [activeLanguage, setActiveLanguage] = useState("EN");

  return (
    <div className="flex flex-col gap-5 items-start">
      <div className="flex flex-col items-start">
        <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1 dark:border-gray-700 dark:bg-gray-800">
          {["EN", "JA", "ZH"].map((lang) => (
            <button
              key={lang}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                activeLanguage === lang
                  ? "bg-orange-500/10 text-orange-600 dark:bg-orange-400/10 dark:text-orange-400 shadow-sm"
                  : "text-gray-700 hover:bg-gray-100/70 dark:text-gray-300 dark:hover:bg-gray-700/50"
              }`}
              onClick={() => {
                setActiveLanguage(lang);
                setValue(lang);
              }}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

function Layout() {
  const [isSelect, setIsSelect] = useState<number>(0);
  const [selectTags, setSelectTags] = useState<selectTags>({});
  const [Language, setLanguage] = useState<string>("EN");
  const [prompt, setPrompt] = useState<string>("");

  useEffect(() => {
    setPrompt(
      Object.entries(selectTags)
        .map(([tag, value]) => {
          if (value === 0) return tag;
          if (value > 0) return "{".repeat(value) + tag + "}".repeat(value);
          return (
            "[".repeat(Math.abs(value)) + tag + "]".repeat(Math.abs(value))
          );
        })
        .join(", ")
    );
  }, [selectTags]);

  return (
    <div className="flex flex-col lg:flex-row h-full gap-8">
      <div className="sticky top-0 h-auto lg:h-[calc(100vh-240px)] w-full lg:w-[280px] overflow-auto rounded-lg border border-gray-200/50 bg-white/80 backdrop-blur-xl p-4 lg:p-6 dark:border-gray-800/50 dark:bg-gray-800/80 z-10">
        <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
          Language
        </h3>
        <div className="mb-8">
          <Select setValue={setLanguage} />
        </div>
        <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
          Categories
        </h3>
        <div className="mt-2 flex flex-col gap-0">
          {Object.entries(record).map(([key]) => (
            <div key={key} className="mt-2 flex flex-col gap-0">
              <button
                className={`flex w-full items-center justify-start rounded-md px-4 py-2.5 text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-700 ${
                  isSelect === Number(key)
                    ? "bg-orange-50 text-orange-600 dark:bg-gray-700 dark:text-orange-400"
                    : "text-gray-700 dark:text-gray-300"
                }`}
                onClick={() => setIsSelect(Number(key))}
              >
                {
                  classification.filter((item) => item.id === Number(key))[0][
                    Language.toLowerCase() as "en" | "ja" | "zh"
                  ]
                }
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 overflow-scroll h-auto lg:h-[calc(100vh-240px)] rounded-lg border border-gray-200/50 bg-white/80 backdrop-blur-xl p-4 lg:p-6 dark:border-gray-800/50 dark:bg-gray-800/80">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {record[isSelect]?.map((item, index) => (
            <button
              key={index}
              className="group flex h-auto w-full items-center rounded-lg border border-gray-200/50 bg-white/95 backdrop-blur-sm p-4 transition-all duration-300 hover:border-orange-500/70 hover:bg-orange-50/50 active:scale-[0.98] dark:border-gray-700/50 dark:bg-gray-800/90 dark:hover:border-orange-400/70 dark:hover:bg-orange-900/20"
              onClick={() => {
                setSelectTags((prev) => ({
                  ...prev,
                  [item.tag]: 0,
                }));
              }}
            >
              <span className="font-medium text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-all duration-300">
                {item[Language.toLowerCase() as "en" | "ja" | "zh"]}
              </span>
            </button>
          ))}
        </div>
        {/* Show Prompt */}
        <div className="mx-auto w-full rounded-xl border bg-neutral-500/5 p-4 backdrop-blur border-neutral-900/[0.05] sticky bottom-0 mt-8">
          <div className="flex flex-col sm:flex-row w-full gap-4">
            <input
              disabled
              placeholder="Please select a tag"
              value={prompt}
              className="flex-1 rounded-lg border border-gray-200/50 bg-white/95 backdrop-blur-sm px-4 py-3 text-gray-900 dark:border-gray-700/50 dark:bg-gray-800/90 dark:text-gray-100 transition-all duration-300 focus:border-orange-500/70 focus:ring-2 focus:ring-orange-500/20"
            />
            <div className="flex shrink-0 gap-2 justify-center sm:justify-start">
              <button
                className="rounded-lg border border-gray-200/50 bg-white/95 backdrop-blur-sm px-4 py-3 text-sm font-medium text-gray-700 transition-all duration-300 hover:border-orange-500/70 hover:bg-orange-50/50 dark:border-gray-700/50 dark:bg-gray-800/90 dark:text-gray-300 dark:hover:border-orange-400/70 dark:hover:bg-orange-900/20"
                onClick={() => copy(prompt)}
              >
                Copy
              </button>
              <button
                className="rounded-lg border border-gray-200/50 bg-white/95 backdrop-blur-sm p-3 text-sm text-gray-700 transition-all duration-300 hover:border-red-500/70 hover:bg-red-50/50 dark:border-gray-700/50 dark:bg-gray-800/90 dark:text-gray-300 dark:hover:border-red-400/70 dark:hover:bg-red-900/20"
                onClick={() => setSelectTags({})}
              >
                <HiOutlineTrash className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        {/* Remove added tags and adjust values (max: 10, min: -10) */}
        <div className="mt-6 flex flex-col gap-4">
          {Object.entries(selectTags).map(([tag, value]) => (
            <div
              key={tag}
              className="flex items-center rounded-lg border border-gray-200/50 bg-white/95 backdrop-blur-sm p-3 dark:border-gray-700/50 dark:bg-gray-800/90 transition-all duration-300 hover:border-orange-500/70"
            >
              <span className="flex-1 font-medium text-gray-900 dark:text-gray-100">
                {tag}
              </span>
              <div className="flex items-center gap-2">
                <button
                  className="rounded-md border border-gray-200/50 bg-white/95 backdrop-blur-sm px-3 py-1.5 text-sm font-medium text-gray-700 transition-all duration-300 hover:border-orange-500/70 hover:bg-orange-50/50 dark:border-gray-700/50 dark:bg-gray-800/90 dark:text-gray-300 dark:hover:bg-orange-900/20"
                  onClick={() =>
                    setSelectTags((prev) => ({
                      ...prev,
                      [tag]: Math.max(-10, prev[tag] - 1),
                    }))
                  }
                >
                  -
                </button>
                <span className="w-[40px] text-center font-medium text-gray-900 dark:text-gray-100">
                  {value}
                </span>
                <button
                  className="rounded-md border border-gray-200/50 bg-white/95 backdrop-blur-sm px-3 py-1.5 text-sm font-medium text-gray-700 transition-all duration-300 hover:border-orange-500/70 hover:bg-orange-50/50 dark:border-gray-700/50 dark:bg-gray-800/90 dark:text-gray-300 dark:hover:bg-orange-900/20"
                  onClick={() =>
                    setSelectTags((prev) => ({
                      ...prev,
                      [tag]: Math.min(10, prev[tag] + 1),
                    }))
                  }
                >
                  +
                </button>
                <button
                  className="rounded-md border border-gray-200/50 bg-white/95 backdrop-blur-sm p-2 text-sm text-gray-700 transition-all duration-300 hover:border-red-500/70 hover:bg-red-50/50 dark:border-gray-700/50 dark:bg-gray-800/90 dark:text-gray-300 dark:hover:bg-red-900/20"
                  onClick={() =>
                    setSelectTags((prev) => {
                      const newTags = { ...prev };
                      delete newTags[tag];
                      return newTags;
                    })
                  }
                >
                  <HiOutlineTrash className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
