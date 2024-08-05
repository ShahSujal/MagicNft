import { create } from 'zustand'

type State = {
  expand: boolean
}

type Action = {
  updateExpandState: (expand: State['expand']) => void
}

// Create your store, which includes both state and (optionally) actions
export const useExpandState = create<State & Action>((set) => ({
  expand: false,
  updateExpandState: (expand) => set((state) => ({ expand: expand })),
}))