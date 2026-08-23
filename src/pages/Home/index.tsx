import Board from '@components/Board'
import Keyboard from '@components/Keyboard'
import { IBoard } from '@interfaces/game/interfaces'
import { FLIP_DURATION, FLIP_STAGGER } from '@static/index'
import { FC, useState } from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export interface IProps {
  onClickKey: (key: string) => boolean | undefined
  rowIndex: number
  board: IBoard[]
  word: string
}

const Home: FC<IProps> = ({ board, rowIndex, word, onClickKey }) => {
  const insets = useSafeAreaInsets()
  const [isValid, setIsValid] = useState<boolean | null>(null)
  const [isAnimation, setIsAnimation] = useState(false)

  return (
    <View
      style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
      className='flex-1 items-center bg-background'>
      <View className='items-center justify-between h-full'>
        <View className='flex-1 items-center justify-center'>
          <Board
            board={board}
            word={word}
            isValid={isValid}
            activeRow={rowIndex}
            onShakeComplete={() => {
              setIsAnimation(false)
              setIsValid(null)
            }}
          />
        </View>
        <Keyboard
          board={board}
          word={word}
          onClickKey={(key) => {
            if (isAnimation) return
            const isValid = onClickKey(key)
            if (isValid === false) {
              setIsAnimation(true)
              setIsValid(false)
            }

            if (isValid === true) {
              setIsAnimation(true)

              const timeout = board[0].words.length * FLIP_STAGGER + FLIP_DURATION * 2
              setTimeout(() => setIsAnimation(false), timeout)
            }
          }}
        />
      </View>
    </View>
  )
}

export default Home
