import { useState, useEffect } from "react";
import type { Options } from "./context";
import { options } from "./context";
import copy from "copy-to-clipboard";

// Import components
import { Background } from "./components/ui/Background";
import { Container } from "./components/ui/Container";
import { Header } from "./components/ui/Header";
import { LanguageSelector } from "./components/ui/Selector";
import { Button, ButtonGroup, CategoryButton } from "./components/ui/Button";
import { Card } from "./components/ui/Card";
import { Input, InputContainer } from "./components/ui/Input";

function App() {
  return (
    <Background>
      <Container>
        <Header
          title="Image Prompt Generator"
          description="Create perfect prompts for your AI image generation"
        />
        <Layout />
      </Container>
    </Background>
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
      <div className="sticky top-0 h-auto lg:h-[calc(100vh-240px)] w-full lg:w-[280px] overflow-auto rounded-lg border border-gray-200/50 bg-white/80 backdrop-blur-xl p-4 lg:p-6 z-10">
        <h3 className="mb-3 text-lg font-semibold text-gray-900">Language</h3>
        <div className="mb-8">
          <LanguageSelector onChange={setLanguage} />
        </div>
        <h3 className="mb-3 text-lg font-semibold text-gray-900">Categories</h3>
        <div className="mt-2 flex flex-col gap-0">
          {Object.entries(record).map(([key]) => (
            <div key={key} className="mt-2 flex flex-col gap-0">
              <CategoryButton
                active={isSelect === Number(key)}
                onClick={() => setIsSelect(Number(key))}
              >
                {
                  classification.filter((item) => item.id === Number(key))[0][
                    Language.toLowerCase() as "en" | "ja" | "zh"
                  ]
                }
              </CategoryButton>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 overflow-scroll h-auto lg:h-[calc(100vh-240px)] rounded-lg border border-gray-200/50 bg-white/80 backdrop-blur-xl p-4 lg:p-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {record[isSelect]?.map((item, index) => (
            <Card
              key={index}
              onClick={() => {
                setSelectTags((prev) => {
                  if (item.tag in prev) {
                    const newTags = { ...prev };
                    delete newTags[item.tag];
                    return newTags;
                  }
                  return {
                    ...prev,
                    [item.tag]: 0,
                  };
                });
              }}
            >
              {item[Language.toLowerCase() as "en" | "ja" | "zh"]}
            </Card>
          ))}
        </div>
        <InputContainer>
          <Input disabled placeholder="Please select a tag" value={prompt} />
          <ButtonGroup>
            <Button onClick={() => copy(prompt)}>Copy</Button>
            <Button variant="danger" icon onClick={() => setSelectTags({})} />
          </ButtonGroup>
        </InputContainer>
        {/* Remove added tags and adjust values (max: 10, min: -10) */}
        <div className="mt-6 flex flex-col gap-4">
          {Object.entries(selectTags).map(([tag, value]) => (
            <div
              key={tag}
              className="flex items-center rounded-lg border border-gray-200/50 bg-white/95 backdrop-blur-sm p-3 transition-all duration-300 hover:border-orange-500/70"
            >
              <span className="flex-1 font-medium text-gray-900">{tag}</span>
              <div className="flex items-center gap-2">
                <Button
                  variant="secondary"
                  onClick={() =>
                    setSelectTags((prev) => ({
                      ...prev,
                      [tag]: Math.max(-10, prev[tag] - 1),
                    }))
                  }
                >
                  -
                </Button>
                <span className="w-[40px] text-center font-medium text-gray-900">
                  {value}
                </span>
                <Button
                  variant="secondary"
                  onClick={() =>
                    setSelectTags((prev) => ({
                      ...prev,
                      [tag]: Math.min(10, prev[tag] + 1),
                    }))
                  }
                >
                  +
                </Button>
                <Button
                  variant="danger"
                  icon
                  onClick={() =>
                    setSelectTags((prev) => {
                      const newTags = { ...prev };
                      delete newTags[tag];
                      return newTags;
                    })
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
