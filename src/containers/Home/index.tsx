import { getSpellChecker } from '@libs/spellChecker'
import { getWordGenerator } from '@libs/wordGenerator'
import Home from '@pages/Home'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { gameSelector } from '@store/game/selector'
import { settingsSelector } from '@store/settings/selector'
import { useEffect } from 'react'
import { Vibration } from 'react-native'

const HomeRoot = () => {
  const navigation = useNavigation<NavigationProp<{ GameOver: undefined }>>()
  const setUpdateBoard = gameSelector.use.setUpdateBoard()
  const setWord = gameSelector.use.setWord()
  const setBackspace = gameSelector.use.setBackspace()
  const vibration = settingsSelector().vibrationsEnabled
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
        if (vibration) {
          Vibration.vibrate()
        }

        const normalizedKey = key.toLocaleLowerCase()

        if (normalizedKey === '<') {
          setBackspace()
          return
        }

        if (normalizedKey === 'enter') {
          const currentWord = board[rowIndex].words.join('')

          if (!spellChecker.isValid(currentWord)) {
            return false
          }

          setSubmitRow()
          return true
        }

        setUpdateBoard(key)
      }}
    />
  )
}

export default HomeRoot
