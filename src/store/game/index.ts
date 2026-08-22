import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

export interface IGameStore {}

export const gameStore = create<IGameStore>()(
  persist((set) => ({}), {
    name: 'notifications',
    storage: createJSONStorage(() => localStorage),
    partialize: (state) => ({}),
  }),
)
