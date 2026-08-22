import { SpellCheckerCore } from './spellCheckerCore'

let _wordGenerator: SpellCheckerCore | undefined

export const getSpellChecker = (): SpellCheckerCore => {
  if (_wordGenerator) {
    return _wordGenerator
  }

  _wordGenerator = new SpellCheckerCore()
  return _wordGenerator
}
