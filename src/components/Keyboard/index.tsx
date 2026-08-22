import { KEYS, SIZE } from '@static/index'
import { Delete } from 'lucide-react-native'
import { FC } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Typography } from '../Typography'

export interface IProps {
  onClickKey: (key: string) => void
}

const Keyboard: FC<IProps> = ({ onClickKey }) => {
  const backgroundColor = (key: string) => {
    return '#6B6B6D'
  }

  return (
    <View className='flex items-center'>
      {KEYS.map((keysRow, idx) => (
        <View
          key={idx}
          className='mb-[5px] flex flex-row items-center justify-center mx-auto'
          style={{ width: SIZE * 0.95 }}>
          {keysRow.map((keyboardKey) => {
            const keyRowCount = keysRow.length + 2
            const isWide = keyboardKey === '<' || keyboardKey === 'Enter'
            return (
              <TouchableOpacity
                key={keyboardKey}
                className='m-[2px] flex items-center justify-center rounded-[6px]'
                style={{
                  backgroundColor: backgroundColor(keyboardKey),
                  height: SIZE / keyRowCount + 2 + 20,
                  flex: isWide ? 2 : 1,
                }}
                onPress={() => {
                  onClickKey(keyboardKey)
                }}>
                {keyboardKey === '<' ? (
                  <Delete size={18} color={'#E5E5E7'} />
                ) : (
                  <Typography
                    uppercase
                    color='white'
                    style={{ fontSize: keyboardKey === 'Enter' ? 12 : 18 }}>
                    {keyboardKey}
                  </Typography>
                )}
              </TouchableOpacity>
            )
          })}
        </View>
      ))}
    </View>
  )
}

export default Keyboard
