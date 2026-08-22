import { getWordGenerator } from '@/libs/wordGenerator'
import { gameSelector } from '@/store/game/selector'
import Home from '@pages/Home'
import { useEffect } from 'react'

const HomeRoot = () => {
  const board = gameSelector.use.board()
  const word = gameSelector.use.word()
  const setUpdateBoard = gameSelector.use.setUpdateBoard()
  const setBackspace = gameSelector.use.setBackspace()
  const setSubmitRow = gameSelector.use.setSubmitRow()
  const setWord = gameSelector.use.setWord()

  useEffect(() => {
    if (!word.trim().length) {
      const wordGenerator = getWordGenerator()
      setWord(wordGenerator.generateRandomWord())
    }
  }, [word, setWord])

  return (
    <Home
      board={board}
      onClickKey={(key) => {
        switch (key.toLocaleLowerCase()) {
          case '<':
            return setBackspace()
          case 'enter':
            return setSubmitRow()
          default:
            return setUpdateBoard(key)
        }
      }}
    />
  )
}

export default HomeRoot
