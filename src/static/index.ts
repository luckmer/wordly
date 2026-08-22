import { IBoard } from '@/interfaces/game/interfaces'
import { Dimensions } from 'react-native'
export const { width: SIZE, height: HEIGHT } = Dimensions.get('window')

export const KEYS: string[][] = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['Enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<'],
]

export const BOARD: IBoard[] = [
  { words: ['', '', '', '', ''], acceptedWord: false },
  { words: ['', '', '', '', ''], acceptedWord: false },
  { words: ['', '', '', '', ''], acceptedWord: false },
  { words: ['', '', '', '', ''], acceptedWord: false },
  { words: ['', '', '', '', ''], acceptedWord: false },
  { words: ['', '', '', '', ''], acceptedWord: false },
]
