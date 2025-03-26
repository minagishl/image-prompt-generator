import { useState, useEffect } from 'react'
import type { TagGroup } from './context'
import { options } from './context'
import copy from 'copy-to-clipboard'

// Import components
import { Background } from './components/ui/Background'
import { Container } from './components/ui/Container'
import { Header } from './components/ui/Header'
import { LanguageSelector } from './components/ui/Selector'
import { Button, ButtonGroup, CategoryButton } from './components/ui/Button'
import { Card } from './components/ui/Card'
import { Input, InputContainer } from './components/ui/Input'

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
  )
}

interface RecordType {
  [key: number]: {
    tag: string
    ja: string
    en: string
    zh: string
  }[]
}

const createRecordFromOptions = (options: TagGroup[]): RecordType => {
  return options.reduce<RecordType>((record, group, index) => {
    record[index] = group.tags.map((tagEntry) => ({
      tag: tagEntry.tag,
      ja: tagEntry.name.ja,
      en: tagEntry.name.en,
      zh: tagEntry.name.zh,
    }))
    return record
  }, {})
}

const record = createRecordFromOptions(options)

type selectTags = {
  [key: string]: number
}

function Layout() {
  const [isSelect, setIsSelect] = useState<number>(0)
  const [selectTags, setSelectTags] = useState<selectTags>({})
  const [Language, setLanguage] = useState<string>('EN')
  const [prompt, setPrompt] = useState<string>('')

  useEffect(() => {
    setPrompt(
      Object.entries(selectTags)
        .map(([tag, value]) => {
          if (value === 0) return tag
          if (value > 0) return '{'.repeat(value) + tag + '}'.repeat(value)
          return '['.repeat(Math.abs(value)) + tag + ']'.repeat(Math.abs(value))
        })
        .join(', '),
    )
  }, [selectTags])

  return (
    <div className="flex h-full flex-col gap-8 lg:flex-row">
      <div className="sticky top-0 z-10 h-auto w-full overflow-auto rounded-lg border border-gray-200/50 bg-white/80 p-4 backdrop-blur-xl lg:h-[calc(100vh-240px)] lg:w-[280px] lg:p-6">
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
                  options[Number(key)].name[
                    Language.toLowerCase() as 'en' | 'ja' | 'zh'
                  ]
                }
              </CategoryButton>
            </div>
          ))}
        </div>
      </div>
      <div className="h-auto flex-1 overflow-scroll rounded-lg border border-gray-200/50 bg-white/80 p-4 backdrop-blur-xl lg:h-[calc(100vh-240px)] lg:p-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {record[isSelect]?.map((item, index) => (
            <Card
              key={index}
              onClick={() => {
                setSelectTags((prev) => {
                  if (item.tag in prev) {
                    const newTags = { ...prev }
                    delete newTags[item.tag]
                    return newTags
                  }
                  return {
                    ...prev,
                    [item.tag]: 0,
                  }
                })
              }}
            >
              {item[Language.toLowerCase() as 'en' | 'ja' | 'zh']}
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
              className="flex items-center rounded-lg border border-gray-200/50 bg-white/95 p-3 backdrop-blur-sm transition-all duration-300 hover:border-orange-500/70"
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
                      const newTags = { ...prev }
                      delete newTags[tag]
                      return newTags
                    })
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
