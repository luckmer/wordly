import { DefaultButton } from '@components/Button'
import { Typography } from '@components/Typography'
import { X } from 'lucide-react-native'
import { FC } from 'react'
import { View } from 'react-native'

export interface IProps {
  title: string
  onClose: () => void
}

const ModalHeader: FC<IProps> = ({ title, onClose }) => {
  return (
    <View className='px-6'>
      <View className='flex flex-row items-center justify-between'>
        <Typography color='white' text='captionMedium'>
          {title}
        </Typography>
        <DefaultButton
          onClick={onClose}
          className='items-center justify-center bg-neutral-600 rounded-full p-[4px]'>
          <X size={18} color='#E5E5E7' />
        </DefaultButton>
      </View>
    </View>
  )
}

export default ModalHeader
