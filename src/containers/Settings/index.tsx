import Settings from '@pages/Settings'
import { settingsSelector } from '@store/settings/selector'
import { Vibration } from 'react-native'

const SettingsRoot = () => {
  const { vibrationsEnabled, setVibrations } = settingsSelector()

  return (
    <Settings
      vibrationsEnabled={vibrationsEnabled}
      onClickSetVibrations={(status) => {
        if (status) {
          Vibration.vibrate()
        }
        setVibrations(status)
      }}
    />
  )
}

export default SettingsRoot
