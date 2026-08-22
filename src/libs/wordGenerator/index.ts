import { WordGeneratorCore } from './wordGeneratorCore'

let _wordGenerator: WordGeneratorCore | undefined

export const getWordGenerator = (): WordGeneratorCore => {
  if (_wordGenerator) {
    return _wordGenerator
  }

  _wordGenerator = new WordGeneratorCore()
  return _wordGenerator
}
