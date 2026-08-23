import { SHAKE_DURATION, SHAKE_OFFSET, SHAKE_STEP_DURATION } from '@static/index'
import { clsx } from 'clsx'
import { useEffect } from 'react'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated'

export interface IProps {
  children: React.ReactNode
  className?: string
  shake: boolean
  onShakeComplete?: () => void
}

export const ShakeBox: React.FC<IProps> = ({ children, className, shake, onShakeComplete }) => {
  const translateX = useSharedValue(0)

  useEffect(() => {
    if (shake) {
      translateX.value = withSequence(
        withTiming(-SHAKE_OFFSET, { duration: SHAKE_STEP_DURATION }),
        withTiming(SHAKE_OFFSET, { duration: SHAKE_STEP_DURATION }),
        withTiming(-SHAKE_OFFSET, { duration: SHAKE_STEP_DURATION }),
        withTiming(SHAKE_OFFSET, { duration: SHAKE_STEP_DURATION }),
        withTiming(0, { duration: SHAKE_STEP_DURATION }),
      )

      const timeout = setTimeout(() => onShakeComplete?.(), SHAKE_DURATION)
      return () => clearTimeout(timeout)
    }
  }, [shake, translateX, onShakeComplete])

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }))

  return (
    <Animated.View className={clsx(className)} style={animatedStyle}>
      {children}
    </Animated.View>
  )
}
