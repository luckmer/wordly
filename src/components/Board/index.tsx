import { IBoard } from '@/interfaces/game/interfaces'
import { SIZE } from '@static/index'
import { FC } from 'react'
import { View } from 'react-native'
import { Typography } from '../Typography'

export interface IProps {
  board: IBoard[]
}

const Board: FC<IProps> = ({ board }) => {
  return (
    <View className='items-center gap-1.5 px-4'>
      {board.map((row, rowIndex) => {
        const CELL_SIZE = (SIZE * 0.7) / row.words.length

        return (
          <View key={rowIndex} className='flex-row gap-1.5'>
            {row.words.map((letter, letterIndex) => (
              <View
                key={letterIndex}
                style={{ width: CELL_SIZE, height: CELL_SIZE }}
                className={`flex items-center justify-center rounded-md border-2 ${
                  letter ? 'border-neutral-400' : 'border-neutral-700'
                }`}>
                <Typography
                  color='white'
                  class='text-[14px] font-[400]'
                  style={{ fontSize: CELL_SIZE * 0.3 }}
                  uppercase
                  text='custom'>
                  {letter}
                </Typography>
              </View>
            ))}
          </View>
        )
      })}
    </View>
  )
}

export default Board
