import { create } from "zustand";

interface HamburgerState {
   open: boolean;
   switchHamburgerMode: () => void;
   openHamburgerMode: () => void;
   closeHamburgerMode: () => void;
}

export const useHamburgerStore = create<HamburgerState>((set) => ({
   open: false,
   switchHamburgerMode: () => set((state) => ({ open: !state.open })),
   openHamburgerMode: () => set({ open: true }),
   closeHamburgerMode: () => set({ open: false }),
}));
