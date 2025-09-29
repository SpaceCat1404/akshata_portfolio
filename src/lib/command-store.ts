import { create } from 'zustand';
type CommandState = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
};
export const useCommandStore = create<CommandState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));