import GameOver from '@pages/GameOver'
import { gameSelector } from '@store/game/selector'

const GameOverRoot = () => {
  const restart = gameSelector.use.restart()

  return <GameOver />
}

export default GameOverRoot
