import { createSelectors } from '@store/helper'
import { settingsStore } from '.'

export const settingsSelector = createSelectors(settingsStore)
