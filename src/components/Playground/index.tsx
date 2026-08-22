import Board from '@components/Board'
import Keyboard from '@components/Keyboard'
import { IBoard } from '@interfaces/game/interfaces'
import { FC } from 'react'
import { View } from 'react-native'

export interface IProps {
  onClickKey: (key: string) => void
  board: IBoard[]
}

const Playground: FC<IProps> = ({ board, onClickKey }) => {
  return (
    <View className='items-center justify-between h-full py-6'>
      <View className='flex-1 items-center justify-center'>
        <Board board={board} />
      </View>
      <Keyboard onClickKey={onClickKey} />
    </View>
  )
}

export default Playground
