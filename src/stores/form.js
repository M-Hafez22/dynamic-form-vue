import { defineStore } from 'pinia'

export const useFormStore = defineStore({
  id: 'form',
  state: () => ({
    form: [
      { name: "name", value: '', type: "text" },
      { name: "email", value: '', type: "email" },
      { name: "address", value: '', type: "text" },
      { name: "skills", value: '', type: "text" },
      { name: "password", value: '', type: "password" },
      // { name: 'CV', value: '', type: 'file' }
    ]
  }),
  actions: {

  }
})
