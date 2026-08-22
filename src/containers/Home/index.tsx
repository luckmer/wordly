import { gameSelector } from '@/store/game/selector'
import Home from '@pages/Home'

const HomeRoot = () => {
  const board = gameSelector.use.board()
  const setUpdateBoard = gameSelector.use.setUpdateBoard()
  const setBackspace = gameSelector.use.setBackspace()
  const setSubmitRow = gameSelector.use.setSubmitRow()

  return (
    <Home
      board={board}
      onClickKey={(key) => {
        switch (key.toLocaleLowerCase()) {
          case '<':
            return setBackspace()
          case 'enter':
            return setSubmitRow()
          default:
            return setUpdateBoard(key)
        }
      }}
    />
  )
}

export default HomeRoot
