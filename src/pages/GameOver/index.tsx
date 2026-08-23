import { DefaultButton } from '@components/Button'
import { Tile } from '@components/Tile'
import { Typography } from '@components/Typography'
import { IBoard } from '@interfaces/game/interfaces'
import { SIZE } from '@static/index'
import { FC, useMemo } from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export interface IProps {
  board: IBoard[]
  word: string
  onClose: () => void
}

const GameOver: FC<IProps> = ({ board, word, onClose }) => {
  const insets = useSafeAreaInsets()

  const hasWon = useMemo(() => {
    return board.some((row) => row.acceptedWord && row.words.join('') === word)
  }, [board, word])

  return (
    <View
      className='flex-1 mx-auto pt-12'
      style={{ width: SIZE * 0.89, paddingBottom: insets.bottom + 12, paddingTop: insets.top }}>
      <View className='items-center mb-6 flex flex-col gap-12'>
        <Typography color='white' text='h3'>
          {hasWon ? 'Victory!' : 'Game Over'}
        </Typography>
        <Typography text='body' color='white'>
          {hasWon ? 'You successfully guessed the word!' : `The word was: ${word.toUpperCase()}`}
        </Typography>
      </View>
      <View className='flex-1 items-center justify-center gap-12'>
        <Typography color='white' text='body'>
          Your tries
        </Typography>
        <View className='items-center gap-1.5 px-4'>
          {board.map((row, rowIndex) => {
            const CELL_SIZE = (SIZE * 0.8) / row.words.length
            return (
              <View className='flex flex-row gap-1.5' key={rowIndex}>
                {row.words.map((letter, letterIndex) => (
                  <Tile
                    isAccepted={row.acceptedWord}
                    index={letterIndex}
                    key={letterIndex}
                    size={CELL_SIZE}
                    animated={false}
                    letter={letter}
                    word={word}
                  />
                ))}
              </View>
            )
          })}
        </View>
      </View>
      <DefaultButton
        onClick={onClose}
        className='flex-row items-center justify-center bg-neutral-600 w-full mt-auto py-14 rounded-xl'>
        <Typography color='white'>New game</Typography>
      </DefaultButton>
    </View>
  )
}

export default GameOver
