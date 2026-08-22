import { clsx } from 'clsx'
import { TouchableOpacity } from 'react-native'

export interface IProps {
  onClick: () => void
  children: React.ReactNode
  className?: string
  disabled?: boolean
}

export const DefaultButton: React.FC<IProps> = ({ children, onClick, className, disabled }) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onClick}
      className={clsx('items-center justify-center', className, disabled && 'opacity-50')}>
      {children}
    </TouchableOpacity>
  )
}
