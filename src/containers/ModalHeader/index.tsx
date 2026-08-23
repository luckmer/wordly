import ModalHeader from '@components/ModalHeader'
import { settingsSelector } from '@store/settings/selector'
import { FC } from 'react'
import { Vibration } from 'react-native'

export interface IProps {
  title: string
  onClose?: () => void
}

const ModalHeaderRoot: FC<IProps> = ({ title, onClose }) => {
  const vibration = settingsSelector().vibrationsEnabled

  return (
    <ModalHeader
      onClose={
        typeof onClose === 'function'
          ? () => {
              if (vibration) {
                Vibration.vibrate()
              }
              onClose()
            }
          : undefined
      }
      title={title}
    />
  )
}

export default ModalHeaderRoot
