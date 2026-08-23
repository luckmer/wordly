import Header from '@components/Header'
import { settingsSelector } from '@store/settings/selector'
import { FC } from 'react'
import { Vibration } from 'react-native'

export interface IProps {
  onClickNavigate: (routeName: string) => void
}

const HeaderRoot: FC<IProps> = ({ onClickNavigate }) => {
  const vibration = settingsSelector().vibrationsEnabled

  return (
    <Header
      onClickQuestionMark={() => {
        if (vibration) {
          Vibration.vibrate()
        }
        onClickNavigate('HowToPlay')
      }}
      onClickSettings={() => {
        if (vibration) {
          Vibration.vibrate()
        }
        onClickNavigate('Settings')
      }}
    />
  )
}

export default HeaderRoot
