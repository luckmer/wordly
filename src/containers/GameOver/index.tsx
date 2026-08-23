import GameOver from '@pages/GameOver'
import { useNavigation } from '@react-navigation/native'
import { gameSelector } from '@store/game/selector'
import { useEffect } from 'react'
import { View } from 'react-native'

const GameOverRoot = () => {
  const restart = gameSelector.use.restart()
  const navigate = useNavigation()
  const board = gameSelector.use.board()
  const word = gameSelector.use.word()

  useEffect(() => {
    const unsubscribe = navigate.addListener('beforeRemove', (e) => {
      restart()
    })

    return () => {
      unsubscribe()
      restart()
    }
  }, [navigate, restart])

  return (
    <View className='flex-1 bg-black'>
      <GameOver
        board={board}
        word={word}
        onClose={() => {
          restart()
          navigate.goBack()
        }}
      />
    </View>
  )
}

export default GameOverRoot
