import { DefaultButton } from '@components/Button'
import { IBoard } from '@interfaces/game/interfaces'
import { LetterStatus } from '@interfaces/static/types'
import { FLIP_DURATION, FLIP_STAGGER, KEYS, SIZE, STATUS_COLOR } from '@static/index'
import { getLetterStatus } from '@utils/index'
import { clsx } from 'clsx'
import { Delete } from 'lucide-react-native'
import { FC, useEffect, useMemo, useState } from 'react'
import { View } from 'react-native'
import { Typography } from '../Typography'

export interface IProps {
  onClickKey: (key: string) => void
  board: IBoard[]
  word: string
}

const Keyboard: FC<IProps> = ({ word, board, onClickKey }) => {
  const [delayedBoard, setDelayedBoard] = useState<IBoard[]>(board)
  const [prevBoard, setPrevBoard] = useState<IBoard[]>(board)

  const isBoardEmpty = useMemo(
    () => board.every((row) => !row.acceptedWord && row.words.every((w) => !w)),
    [board],
  )

  if (board !== prevBoard) {
    setPrevBoard(board)
    if (isBoardEmpty) {
      setDelayedBoard(board)
    }
  }

  useEffect(() => {
    if (isBoardEmpty) return

    const lastRow = [...board].reverse().find((row) => row.acceptedWord)
    if (!lastRow) return

    const timeout = setTimeout(
      () => setDelayedBoard(board),
      lastRow.words.length * FLIP_STAGGER + FLIP_DURATION,
    )

    return () => clearTimeout(timeout)
  }, [board, isBoardEmpty])

  const activeBoard = isBoardEmpty ? board : delayedBoard

  const keyStatuses = useMemo(() => {
    const statuses: Record<string, LetterStatus> = {}

    activeBoard.forEach((row) => {
      if (!row.acceptedWord) return

      row.words.forEach((letter, index) => {
        if (!letter) return

        const status = getLetterStatus(letter, index, word)
        const current = statuses[letter]

        if (current === 'correct' || (current === 'present' && status === 'absent')) {
          return
        }

        statuses[letter] = status
      })
    })

    return statuses
  }, [activeBoard, word])

  const revealedColor = (keyboardKey: string) => {
    if (!keyboardKey || keyboardKey === '<' || keyboardKey === 'Enter') {
      return 'bg-neutral-600'
    }

    return STATUS_COLOR[keyStatuses[keyboardKey]] ?? 'bg-neutral-600'
  }

  return (
    <View className='flex items-center'>
      {KEYS.map((keysRow, idx) => {
        const keyRowCount = keysRow.length + 2
        return (
          <View
            key={idx}
            className='flex-row items-center justify-center gap-6 mb-8'
            style={{ width: SIZE * 0.95 }}>
            {keysRow.map((keyboardKey) => {
              const isWide = keyboardKey === '<' || keyboardKey === 'Enter'
              return (
                <DefaultButton
                  key={keyboardKey}
                  className={clsx(
                    'flex items-center justify-center rounded-6',
                    revealedColor(keyboardKey),
                  )}
                  style={{
                    height: SIZE / keyRowCount + 2 + 12,
                    flex: isWide ? 1.5 : 1,
                  }}
                  onClick={() => onClickKey(keyboardKey)}>
                  {keyboardKey === '<' ? (
                    <Delete size={18} color='#E5E5E7' />
                  ) : (
                    <Typography
                      uppercase
                      color='white'
                      style={{
                        fontSize: keyboardKey === 'Enter' ? 12 : 14,
                      }}>
                      {keyboardKey}
                    </Typography>
                  )}
                </DefaultButton>
              )
            })}
          </View>
        )
      })}
    </View>
  )
}

export default Keyboard
