import { IBoard } from '@/interfaces/game/interfaces'
import { BOARD } from '@/static'
import { produce } from 'immer'
import { create } from 'zustand'

type GameStoreState = {
  rowIndex: number
  currentIndex: number
  word: string
  usedKeys: Record<string, string>
  board: IBoard[]
}

type GameStoreActions = {
  setWord: (word: string) => void
  setUpdateBoard: (key: string) => void
  setBackspace: () => void
  setSubmitRow: () => void
}

type GameStore = GameStoreState & GameStoreActions

export const gameStore = create<GameStore>()((set) => ({
  board: BOARD,
  currentIndex: 0,
  rowIndex: 0,
  word: '',
  usedKeys: {},

  setWord: (word) => {
    set(
      produce((state: GameStore) => {
        state.word = word
        state.usedKeys = {}
        state.currentIndex = 0
        state.rowIndex = 0
        state.board = BOARD
      }),
    )
  },

  setUpdateBoard: (key) =>
    set(
      produce((state: GameStore) => {
        if (state.currentIndex >= 5 || state.rowIndex >= state.board.length) return
        const row = state.board[state.rowIndex]
        if (!row) return

        row.words[state.currentIndex] = key
        state.currentIndex += 1
      }),
    ),

  setBackspace: () =>
    set(
      produce((state: GameStore) => {
        if (state.currentIndex === 0 || state.rowIndex >= state.board.length) return
        const row = state.board[state.rowIndex]
        if (!row) return

        state.currentIndex -= 1
        row.words[state.currentIndex] = ''
      }),
    ),

  setSubmitRow: () =>
    set(
      produce((state: GameStore) => {
        if (state.rowIndex >= state.board.length) return

        const currentRow = state.board[state.rowIndex]
        if (!currentRow) return

        const isRowFull = currentRow.words.every((letter) => letter !== '')
        if (!isRowFull) return

        currentRow.acceptedWord = true
        state.rowIndex += 1
        state.currentIndex = 0
      }),
    ),
}))
