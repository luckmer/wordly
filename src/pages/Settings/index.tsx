import { Typography } from '@components/Typography'
import { SIZE } from '@static/index'
import { FC } from 'react'
import { Switch, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export interface IProps {
  vibrationsEnabled: boolean
  onClickSetVibrations: (vibrations: boolean) => void
}

const Settings: FC<IProps> = ({ vibrationsEnabled, onClickSetVibrations }) => {
  const insets = useSafeAreaInsets()

  return (
    <View
      className='flex-1 bg-black mx-auto pt-48'
      style={{ width: SIZE * 0.9, paddingTop: insets.top }}>
      <View className='flex-row items-center justify-between px-4 py-4 border-y-[0.9px] border-neutral-600'>
        <Typography color='white'>Vibrations</Typography>
        <Switch
          value={vibrationsEnabled}
          onValueChange={onClickSetVibrations}
          trackColor={{ false: '#27272a', true: '#34c759' }}
          thumbColor='#ffffff'
          ios_backgroundColor='#27272a'
        />
      </View>
    </View>
  )
}

export default Settings
