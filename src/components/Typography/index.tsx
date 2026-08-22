import { typography } from '@/common/Typography'
import type { VariantProps } from 'class-variance-authority'
import type { ReactNode } from 'react'
import type { StyleProp, TextStyle } from 'react-native'
import { Text } from 'react-native'

export interface IProps {
  class?: string
  children: ReactNode
  style?: StyleProp<TextStyle>
}

export interface TypographyProps extends IProps, VariantProps<typeof typography> {}

export const Typography: React.FC<TypographyProps> = (props) => (
  <Text
    style={props.style}
    className={typography({
      ...props,
      class: props.class,
    })}>
    {props.children}
  </Text>
)
