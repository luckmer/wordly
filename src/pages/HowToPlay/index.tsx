import { DefaultButton } from '@components/Button'
import { Tile } from '@components/Tile'
import { Typography } from '@components/Typography'
import { EXAMPLES, SIZE } from '@static/index'
import { FC } from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export interface IProps {
  onClose: () => void
}

const HowToPlay: FC<IProps> = ({ onClose }) => {
  const insets = useSafeAreaInsets()

  return (
    <View
      className='flex-1 mx-auto pt-48'
      style={{ width: SIZE * 0.89, paddingBottom: insets.bottom + 12, paddingTop: insets.top }}>
      <Typography color='white' text='body'>
        Guess the Wordle in 6 tries.
      </Typography>
      <View className='pt-6 flex flex-col gap-12'>
        <View className='flex flex-row gap-4'>
          <Typography color='white'>{'\u2022'}</Typography>
          <Typography color='white'>Each guess must be a valid 5-letter word.</Typography>
        </View>
        <View className='flex flex-row gap-4'>
          <Typography color='white'>{'\u2022'}</Typography>
          <Typography color='white'>
            The color of the tiles will change to show how close your guess was to the word.
          </Typography>
        </View>
      </View>
      <View className='pt-12'>
        <Typography color='white' text='captionMedium'>
          Examples
        </Typography>
        <View className='pt-24 flex flex-col gap-24'>
          {EXAMPLES.map(({ guess, keyWord, highlightIndex, description }) => (
            <View key={guess} className='flex flex-col gap-12'>
              <View className='flex flex-row gap-12'>
                {guess.split('').map((letter, i) => (
                  <Tile
                    key={i}
                    isAccepted={i === highlightIndex}
                    index={i}
                    size={SIZE * 0.11}
                    letter={letter}
                    word={keyWord}
                    animated={false}
                  />
                ))}
              </View>
              <Typography color='white'>
                <Typography color='white' text='captionMedium'>
                  {guess[highlightIndex]}
                </Typography>{' '}
                {description}
              </Typography>
            </View>
          ))}
        </View>
      </View>
      <DefaultButton
        onClick={onClose}
        className='flex-row items-center justify-center bg-neutral-600 w-full mt-auto py-14 rounded-xl'>
        <Typography color='white'>I Understand</Typography>
      </DefaultButton>
    </View>
  )
}

export default HowToPlay
