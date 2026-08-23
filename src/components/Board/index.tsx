import { ShakeBox } from '@components/shakeBox'
import { Tile } from '@components/Tile'
import { IBoard } from '@interfaces/game/interfaces'
import { SIZE } from '@static/index'
import { FC } from 'react'
import { View } from 'react-native'

export interface IProps {
  board: IBoard[]
  isValid: boolean | null
  activeRow: number
  word: string
  onShakeComplete?: () => void
}

const Board: FC<IProps> = ({ board, isValid, activeRow, word, onShakeComplete }) => {
  return (
    <View className='items-center gap-1.5 px-4'>
      {board.map((row, rowIndex) => {
        const CELL_SIZE = (SIZE * 0.7) / row.words.length
        return (
          <ShakeBox
            key={rowIndex}
            className='flex-row gap-1.5'
            shake={rowIndex === activeRow && isValid === false}
            onShakeComplete={onShakeComplete}>
            {row.words.map((letter, letterIndex) => (
              <Tile
                isAccepted={row.acceptedWord}
                index={letterIndex}
                key={letterIndex}
                size={CELL_SIZE}
                letter={letter}
                word={word}
              />
            ))}
          </ShakeBox>
        )
      })}
    </View>
  )
}

export default Board
