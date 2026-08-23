import { DefaultButton } from '@components/Button'
import { Typography } from '@components/Typography'
import { SIZE } from '@static/index'
import { X } from 'lucide-react-native'
import { FC } from 'react'
import { View } from 'react-native'

export interface IProps {
  title: string
  onClose?: () => void
}

const ModalHeader: FC<IProps> = ({ title, onClose }) => {
  return (
    <View className=' mx-auto' style={{ width: SIZE * 0.9 }}>
      <View className='flex flex-row items-center justify-between'>
        <Typography color='white' text='h3'>
          {title}
        </Typography>
        {onClose && (
          <DefaultButton
            onClick={onClose}
            className='items-center justify-center bg-neutral-600 rounded-full p-4'>
            <X size={18} color='#E5E5E7' />
          </DefaultButton>
        )}
      </View>
    </View>
  )
}

export default ModalHeader
