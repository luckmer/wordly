import { getSpellChecker } from '@libs/spellChecker'
import { getWordGenerator } from '@libs/wordGenerator'
import Home from '@pages/Home'
import { gameSelector } from '@store/game/selector'
import { useEffect } from 'react'

const HomeRoot = () => {
  const board = gameSelector.use.board()
  const word = gameSelector.use.word()
  const rowIndex = gameSelector.use.rowIndex()
  const setUpdateBoard = gameSelector.use.setUpdateBoard()
  const setBackspace = gameSelector.use.setBackspace()
  const setSubmitRow = gameSelector.use.setSubmitRow()
  const setWord = gameSelector.use.setWord()
  const spellChecker = getSpellChecker()

  useEffect(() => {
    if (!word.trim().length) {
      const wordGenerator = getWordGenerator()
      setWord(wordGenerator.generateRandomWord())
    }
  }, [word, setWord])

  return (
    <Home
      rowIndex={rowIndex}
      board={board}
      word={word}
      onClickKey={(key) => {
        const normalizedKey = key.toLocaleLowerCase()
        const boardWord = board[rowIndex].words.join('')

        if (normalizedKey === 'enter' && !spellChecker.isValid(boardWord)) {
          return false
        }

        switch (normalizedKey) {
          case '<':
            setBackspace()
            break
          case 'enter':
            setSubmitRow()
            break
          default:
            setUpdateBoard(key)
            break
        }

        const isWord = board[rowIndex].words.every((letter) => letter !== '')
        if (isWord) {
          return true
        }
      }}
    />
  )
}

export default HomeRoot
