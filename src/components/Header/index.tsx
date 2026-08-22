import { SIZE } from '@/static'
import { DefaultButton } from '@components/Button'
import { ChartPie, CircleQuestionMark, Settings } from 'lucide-react-native'
import { View } from 'react-native'

const Header = () => {
  return (
    <View className='flex w-screen flex-row justify-between mx-auto' style={{ width: SIZE * 0.95 }}>
      <DefaultButton onClick={() => {}}>
        <CircleQuestionMark color={'#E5E5E7'} />
      </DefaultButton>
      <View className='flex flex-row gap-6'>
        <DefaultButton onClick={() => {}}>
          <ChartPie color={'#E5E5E7'} />
        </DefaultButton>
        <DefaultButton onClick={() => {}}>
          <Settings color={'#E5E5E7'} />
        </DefaultButton>
      </View>
    </View>
  )
}

export default Header
