import { LetterStatus } from '@interfaces/static/types'

export const getLetterStatus = (letter: string, index: number, word: string): LetterStatus => {
  if (word[index] === letter) return 'correct'
  if (word.includes(letter)) return 'present'
  return 'absent'
}
