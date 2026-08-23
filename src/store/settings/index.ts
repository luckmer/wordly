import { create } from 'zustand'

export interface ISettingsStore {
  setVibrations: (vibrations: boolean) => void
  vibrationsEnabled: boolean
}

export const settingsStore = create<ISettingsStore>()((set) => ({
  vibrationsEnabled: false,

  setVibrations: (vibrations) => set({ vibrationsEnabled: vibrations }),
}))
