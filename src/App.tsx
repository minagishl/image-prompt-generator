import { useState, useEffect } from "react";
import type { Options } from "./context";
import { options } from "./context";
import { HiOutlineTrash } from "react-icons/hi";
import copy from "copy-to-clipboard";

function App() {
  return (
    <div className="dark h-screen">
      <Layout />
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
  return (
    <div className="flex flex-col gap-5 items-start">
      <div className="flex flex-col items-start">
        <div className="inline-flex rounded-lg border border-gray-200 p-1">
          {["EN", "JA", "ZH"].map((lang) => (
            <button
              key={lang}
              className="px-3 py-1.5 text-sm font-medium rounded-md transition-all hover:bg-gray-100 data-[state=active]:bg-white data-[state=active]:shadow-sm"
              onClick={() => setValue(lang)}
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
    <div className="flex h-full gap-8">
      <div className="sticky top-0 h-screen w-[260px] overflow-auto border-r p-6">
        <h3 className="mb-2 text-sm font-semibold">Language</h3>
        <div className="mb-6">
          <Select setValue={setLanguage} />
        </div>
        <h3 className="mb-2 text-sm font-semibold">Options</h3>
        <div className="mt-2 flex flex-col gap-0">
          {Object.entries(record).map(([key]) => (
            <div key={key} className="mt-2 flex flex-col gap-0">
              <button
                className={`flex w-full items-center justify-start rounded-md px-4 py-2 text-sm text-gray-600 transition-colors ${
                  isSelect === Number(key) ? "bg-gray-100" : "hover:bg-gray-50"
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
      <div className="flex-1 p-6">
        <div className="flex flex-wrap gap-4">
          {record[isSelect]?.map((item, index) => (
            <button
              key={index}
              className="flex h-auto w-full items-center rounded-md border p-4 transition-all hover:shadow-md active:scale-98 md:w-[calc(50%-8px)] lg:w-[calc(33.33%-11px)]"
              onClick={() => {
                setSelectTags((prev) => ({
                  ...prev,
                  [item.tag]: 0,
                }));
              }}
            >
              <span className="font-bold">
                {item[Language.toLowerCase() as "en" | "ja" | "zh"]}
              </span>
            </button>
          ))}
        </div>
        {/* Show Prompt */}
        <div className="mt-8 flex w-full gap-4">
          <input
            disabled
            placeholder="Please select a tag"
            value={prompt}
            className="flex-1 rounded-md border bg-gray-50 px-3 py-2"
          />
          <div className="flex shrink-0 gap-1">
            <button
              className="rounded-md border px-3 py-2 text-sm hover:bg-gray-50"
              onClick={() => copy(prompt)}
            >
              Copy
            </button>
            <button
              className="rounded-md border p-2 text-sm hover:bg-gray-50"
              onClick={() => setSelectTags({})}
            >
              <HiOutlineTrash className="h-4 w-4" />
            </button>
          </div>
        </div>
        {/* Remove added tags and adjust values (max: 10, min: -10) */}
        <div className="mt-6 flex flex-col gap-3">
          {Object.entries(selectTags).map(([tag, value]) => (
            <div key={tag} className="flex items-center">
              <span className="flex-1">{tag}</span>
              <div className="flex items-center gap-2">
                <button
                  className="rounded-md border px-3 py-1 text-sm hover:bg-gray-50"
                  onClick={() =>
                    setSelectTags((prev) => ({
                      ...prev,
                      [tag]: Math.max(-10, prev[tag] - 1),
                    }))
                  }
                >
                  -
                </button>
                <span className="w-[40px] text-center">{value}</span>
                <button
                  className="rounded-md border px-3 py-1 text-sm hover:bg-gray-50"
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
                  className="rounded-md border p-2 text-sm hover:bg-gray-50"
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
