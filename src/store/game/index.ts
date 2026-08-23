import { IBoard } from '@interfaces/game/interfaces'
import { BOARD } from '@static/index'
import { produce } from 'immer'
import { create } from 'zustand'

type GameStoreState = {
  rowIndex: number
  currentIndex: number
  word: string
  board: IBoard[]
}

type GameStoreActions = {
  restart: () => void
  setWord: (word: string) => void
  setUpdateBoard: (key: string) => void
  setBackspace: () => void
  setSubmitRow: () => void
}

type IGameStore = GameStoreState & GameStoreActions

export const gameStore = create<IGameStore>()((set) => ({
  board: BOARD,
  currentIndex: 0,
  rowIndex: 0,
  word: '',

  restart: () => {
    set(
      produce((state: IGameStore) => {
        state.board = JSON.parse(JSON.stringify(BOARD))
        state.word = ''
        state.currentIndex = 0
        state.rowIndex = 0
      }),
    )
  },

  setWord: (word) => {
    set(
      produce((state: IGameStore) => {
        state.word = word
        state.currentIndex = 0
        state.rowIndex = 0
        state.board = BOARD
      }),
    )
  },

  setUpdateBoard: (key) =>
    set(
      produce((state: IGameStore) => {
        if (state.currentIndex >= 5 || state.rowIndex >= state.board.length) return
        const row = state.board[state.rowIndex]
        if (!row) return

        row.words[state.currentIndex] = key
        state.currentIndex += 1
      }),
    ),

  setBackspace: () =>
    set(
      produce((state: IGameStore) => {
        if (state.currentIndex === 0 || state.rowIndex >= state.board.length) return
        const row = state.board[state.rowIndex]
        if (!row) return

        state.currentIndex -= 1
        row.words[state.currentIndex] = ''
      }),
    ),

  setSubmitRow: () =>
    set(
      produce((state: IGameStore) => {
        if (state.rowIndex >= state.board.length) return

        const currentRow = state.board[state.rowIndex]
        if (!currentRow) return

        const isRowFull = currentRow.words.every((letter) => letter !== '')
        if (!isRowFull) return

        currentRow.acceptedWord = true
        state.rowIndex = Math.min(state.rowIndex + 1, state.board.length)

        state.currentIndex = 0
      }),
    ),
}))
