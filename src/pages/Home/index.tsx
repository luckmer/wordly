import Header from '@components/Header'
import Playground from '@components/Playground'
import { IBoard } from '@interfaces/game/interfaces'
import { FC } from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export interface IProps {
  onClickKey: (key: string) => void
  board: IBoard[]
}

const Home: FC<IProps> = ({ board, onClickKey }) => {
  const insets = useSafeAreaInsets()

  return (
    <View
      style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
      className='flex-1 items-center bg-background'>
      <Header />
      <Playground board={board} onClickKey={onClickKey} />
    </View>
  )
}

export default Home
