import { defineStore } from 'pinia'

export const useThemeStore = defineStore({
    id: 'theme',
    state: () => ({
      theme: 'dark'
    }),
    actions: {
      toggleTheme(mode) {
        this.theme = mode
      }
    }
  })
  