import { FLIP_DURATION, FLIP_STAGGER, STATUS_COLOR } from '@static/index'
import { getLetterStatus } from '@utils/index'
import { clsx } from 'clsx'
import { FC, useEffect, useMemo, useState } from 'react'
import { Animated, View } from 'react-native'
import { Typography } from '../Typography'

interface IProps {
  letter: string
  index: number
  size: number
  isAccepted: boolean
  word: string
}

export const Tile: FC<IProps> = ({ letter, index, size, isAccepted, word }) => {
  const [rotation] = useState(() => new Animated.Value(0))
  const [prevAccepted, setPrevAccepted] = useState(isAccepted)
  const [hasFlipped, setHasFlipped] = useState(false)

  if (isAccepted !== prevAccepted) {
    setPrevAccepted(isAccepted)
    if (!isAccepted) {
      setHasFlipped(false)
      rotation.setValue(0)
    }
  }

  const revealedColor = useMemo(() => {
    return letter ? STATUS_COLOR[getLetterStatus(letter, index, word)] : ''
  }, [letter, index, word])

  useEffect(() => {
    if (!isAccepted) return

    rotation.setValue(0)

    const animation = Animated.sequence([
      Animated.timing(rotation, {
        toValue: 90,
        duration: FLIP_DURATION,
        delay: index * FLIP_STAGGER,
        useNativeDriver: true,
      }),
      Animated.timing(rotation, {
        toValue: 180,
        duration: FLIP_DURATION,
        useNativeDriver: true,
      }),
    ])

    animation.start()

    const revealTimeout = setTimeout(
      () => setHasFlipped(true),
      index * FLIP_STAGGER + FLIP_DURATION,
    )

    return () => {
      animation.stop()
      clearTimeout(revealTimeout)
    }
  }, [isAccepted, index, rotation])

  const frontRotateX = rotation.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  })

  const backRotateX = rotation.interpolate({
    inputRange: [0, 180],
    outputRange: ['-180deg', '0deg'],
  })

  return (
    <View style={{ width: size, height: size }}>
      <Animated.View
        style={[
          { width: size, height: size, backfaceVisibility: 'hidden' },
          { transform: [{ perspective: 800 }, { rotateX: frontRotateX }] },
        ]}
        className={clsx(
          'flex items-center justify-center rounded-md border-2 absolute',
          letter ? 'border-neutral-400' : 'border-neutral-700',
        )}>
        <Typography
          color='white'
          class='text-[14px] font-[400]'
          style={{ fontSize: size * 0.3 }}
          uppercase
          text='custom'>
          {letter}
        </Typography>
      </Animated.View>
      <Animated.View
        style={[
          { width: size, height: size, backfaceVisibility: 'hidden' },
          { transform: [{ perspective: 800 }, { rotateX: backRotateX }] },
        ]}
        className={clsx(
          hasFlipped ? revealedColor : '',
          'flex items-center justify-center rounded-md border-2 border-neutral-400 absolute',
        )}>
        <Typography
          color='white'
          class='text-[14px] font-[400]'
          style={{ fontSize: size * 0.3 }}
          uppercase
          text='custom'>
          {letter}
        </Typography>
      </Animated.View>
    </View>
  )
}
