import dictionary from "@json/dictionary.json";

const dictionarySet = new Set<string>(dictionary);

export class SpellCheckerCore {
  public isValid(word: string): boolean {
    return dictionarySet.has(word);
  }
}