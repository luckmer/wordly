import { IBoard } from '@interfaces/game/interfaces'
import { LetterStatus } from '@interfaces/static/types'
import { Dimensions } from 'react-native'
export const { width: SIZE, height: HEIGHT } = Dimensions.get('window')
export const SHAKE_OFFSET = 8
export const SHAKE_DURATION = 300
export const SHAKE_STEP_DURATION = SHAKE_DURATION / 5
export const FLIP_DURATION = 200
export const FLIP_STAGGER = 120

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

export const STATUS_COLOR: Record<LetterStatus, string> = {
  correct: 'bg-green-500',
  present: 'bg-yellow-500',
  absent: 'bg-neutral-600',
}
