import { create } from 'zustand'

export const users = create((set)=>({
  name: '',
  nameSetting: (val) => set(()=>({ name : val}))
}))