import { useState, useEffect } from "react";
import {
  VStack,
  Box,
  Theme,
  Stack,
  Text,
  Input,
  Container,
  Heading,
} from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import type { Options } from "./context";
import { options } from "./context";
import { HiOutlineTrash } from "react-icons/hi";
import { Group, IconButton } from "@chakra-ui/react";
import copy from "copy-to-clipboard";
import { SegmentedControl } from "@/components/ui/segmented-control";

function App() {
  return (
    <>
      <Theme appearance="dark">
        <Container maxW="container.xl" h="100vh" p={0}>
          <Layout />
        </Container>
      </Theme>
    </>
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
    <Stack gap="5" align="flex-start">
      <VStack key="sm" align="flex-start">
        <SegmentedControl
          size="sm"
          defaultValue="EN"
          items={["EN", "JA", "ZH"]}
          onValueChange={(e) => e.value && setValue(e.value)}
        />
      </VStack>
    </Stack>
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
    <Box display="flex" h="100%" gap={8}>
      <Box
        w="260px"
        p={6}
        overflow="auto"
        borderRightWidth="1px"
        position="sticky"
        top={0}
        h="100vh"
      >
        <Heading as="h3" size="sm" mb={2}>
          Language
        </Heading>
        <Box mb={6}>
          <Select setValue={setLanguage} />
        </Box>
        <Heading as="h3" size="sm" mb={2}>
          Options
        </Heading>
        <Stack mt={2} flexDir="column" gap={0}>
          {Object.entries(record).map(([key]) => (
            <Stack key={key} mt={2} flexDir="column" gap={0}>
              <Button
                variant={isSelect === Number(key) ? "subtle" : "ghost"}
                justifyContent="start"
                size="sm"
                paddingInlineStart={4}
                color="fg.muted"
                onClick={() => setIsSelect(Number(key))}
              >
                {
                  classification.filter((item) => item.id === Number(key))[0][
                    Language.toLowerCase() as "en" | "ja" | "zh"
                  ]
                }
              </Button>
            </Stack>
          ))}
        </Stack>
      </Box>
      <Box flex="1" p={6}>
        <Stack direction="row" wrap="wrap" gap={4}>
          {record[isSelect]?.map((item, index) => (
            <Button
              variant="outline"
              alignItems={"center"}
              key={index}
              p={4}
              height="auto"
              borderWidth="1px"
              borderRadius="md"
              width={{
                base: "100%",
                md: "calc(50% - 8px)",
                lg: "calc(33.33% - 11px)",
              }}
              transition="all 0.2s"
              _active={{
                transform: "scale(0.98)",
              }}
              _hover={{ shadow: "md" }}
              onClick={() => {
                setSelectTags((prev) => ({
                  ...prev,
                  [item.tag]: 0,
                }));
              }}
              cursor="pointer"
            >
              <Text fontWeight="bold">
                {item[Language.toLowerCase() as "en" | "ja" | "zh"]}
              </Text>
            </Button>
          ))}
        </Stack>
        {/* Show Prompt */}
        <Stack mt={8} direction="row" gap={4} width="full">
          <Box flex={1}>
            <Input
              disabled
              placeholder="Please select a tag"
              value={prompt}
              width="full"
            />
          </Box>
          <Group attached flexShrink={0}>
            <Button variant="outline" size="sm" onClick={() => copy(prompt)}>
              Copy
            </Button>
            <IconButton
              variant="outline"
              size="sm"
              onClick={() => setSelectTags({})}
            >
              <HiOutlineTrash />
            </IconButton>
          </Group>
        </Stack>
        {/* Remove added tags and adjust values (max: 10, min: -10) */}
        <Stack mt={6} gap={3}>
          {Object.entries(selectTags).map(([tag, value]) => (
            <Stack key={tag} direction="row" alignItems="center">
              <Text flex="1">{tag}</Text>
              <Stack direction="row" alignItems="center">
                <Button
                  size="sm"
                  onClick={() =>
                    setSelectTags((prev) => ({
                      ...prev,
                      [tag]: Math.max(-10, prev[tag] - 1),
                    }))
                  }
                >
                  -
                </Button>
                <Text width="40px" textAlign="center">
                  {value}
                </Text>
                <Button
                  size="sm"
                  onClick={() =>
                    setSelectTags((prev) => ({
                      ...prev,
                      [tag]: Math.min(10, prev[tag] + 1),
                    }))
                  }
                >
                  +
                </Button>
                <IconButton
                  aria-label="Remove tag"
                  size="sm"
                  onClick={() =>
                    setSelectTags((prev) => {
                      const newTags = { ...prev };
                      delete newTags[tag];
                      return newTags;
                    })
                  }
                >
                  <HiOutlineTrash />
                </IconButton>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}

export default App;
