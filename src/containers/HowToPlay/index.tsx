import HowToPlay from '@pages/HowToPlay'
import { useNavigation } from '@react-navigation/native'
import { settingsSelector } from '@store/settings/selector'
import { Vibration } from 'react-native'

const HowToPlayRoot = () => {
  const navigation = useNavigation()
  const vibration = settingsSelector().vibrationsEnabled

  return (
    <HowToPlay
      onClose={() => {
        if (vibration) {
          Vibration.vibrate()
        }
        navigation.goBack()
      }}
    />
  )
}

export default HowToPlayRoot
