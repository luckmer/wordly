import { getSpellChecker } from '@libs/spellChecker'
import { getWordGenerator } from '@libs/wordGenerator'
import Home from '@pages/Home'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { gameSelector } from '@store/game/selector'
import { useEffect } from 'react'

const HomeRoot = () => {
  const navigation = useNavigation<NavigationProp<{ GameOver: undefined }>>()
  const setUpdateBoard = gameSelector.use.setUpdateBoard()
  const setWord = gameSelector.use.setWord()
  const setBackspace = gameSelector.use.setBackspace()
  const setSubmitRow = gameSelector.use.setSubmitRow()
  const spellChecker = getSpellChecker()
  const rowIndex = gameSelector.use.rowIndex()
  const board = gameSelector.use.board()
  const word = gameSelector.use.word()

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
      onClickOpenGameOver={() => navigation.navigate('GameOver')}
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
