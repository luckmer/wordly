import { DefaultButton } from '@components/Button'
import { SIZE } from '@static/index'
import { ChartPie, CircleQuestionMark, Settings } from 'lucide-react-native'
import { FC } from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export interface IProps {
  onClickQuestionMark: () => void
  onClickSettings: () => void
  onClickChart: () => void
}

const Header: FC<IProps> = ({ onClickChart, onClickQuestionMark, onClickSettings }) => {
  const insets = useSafeAreaInsets()
  return (
    <View className='w-screen bg-background'>
      <View
        style={{ width: SIZE * 0.95, paddingTop: insets.top }}
        className='flex flex-row items-center justify-between mx-auto'>
        <DefaultButton onClick={onClickQuestionMark}>
          <CircleQuestionMark color={'#E5E5E7'} />
        </DefaultButton>
        <View className='flex flex-row gap-6'>
          <DefaultButton onClick={onClickChart}>
            <ChartPie color={'#E5E5E7'} />
          </DefaultButton>
          <DefaultButton onClick={onClickSettings}>
            <Settings color={'#E5E5E7'} />
          </DefaultButton>
        </View>
      </View>
    </View>
  )
}

export default Header
