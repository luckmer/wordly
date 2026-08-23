import { clsx } from 'clsx'
import { StyleProp, TextStyle, TouchableOpacity } from 'react-native'

export interface IProps {
  onClick: () => void
  children: React.ReactNode
  className?: string
  disabled?: boolean
  style?: StyleProp<TextStyle>
}

export const DefaultButton: React.FC<IProps> = ({
  children,
  onClick,
  className,
  disabled,
  style,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onClick}
      style={style}
      className={clsx('items-center justify-center', className, disabled && 'opacity-50')}>
      {children}
    </TouchableOpacity>
  )
}
