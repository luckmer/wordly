import { createSelectors } from '@store/helper'
import { gameStore } from './index'

export const gameSelector = createSelectors(gameStore)
