import Board from '@components/Board'
import Keyboard from '@components/Keyboard'
import { IBoard } from '@interfaces/game/interfaces'
import { FLIP_DURATION, FLIP_STAGGER } from '@static/index'
import { FC, useEffect, useRef, useState } from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export interface IProps {
  onClickKey: (key: string) => boolean | undefined
  onClickOpenGameOver: () => void
  rowIndex: number
  board: IBoard[]
  word: string
}

const Home: FC<IProps> = ({ board, rowIndex, word, onClickKey, onClickOpenGameOver }) => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [isValid, setIsValid] = useState<boolean | null>(null)
  const [isAnimation, setIsAnimation] = useState(false)
  const insets = useSafeAreaInsets()

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

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

            const keyResult = onClickKey(key)

            if (keyResult === false) {
              setIsAnimation(true)
              setIsValid(false)
              return
            }

            if (keyResult === true) {
              setIsAnimation(true)

              const timeout = word.length * FLIP_STAGGER + FLIP_DURATION * 2

              timeoutRef.current = setTimeout(() => {
                const currentWord = board[rowIndex].words.join('')

                if (rowIndex === board.length - 1 || currentWord === word) {
                  onClickOpenGameOver()
                }
                setIsAnimation(false)
              }, timeout)
            }
          }}
        />
      </View>
    </View>
  )
}

export default Home
