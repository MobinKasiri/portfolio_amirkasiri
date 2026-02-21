import { PaletteMode } from "@mui/material";
import { create } from "zustand";

interface ThemeStoreProps {
   mode: PaletteMode;
   toggleMode: () => void;
}

const useThemeStore = create<ThemeStoreProps>()((set) => ({
   mode: "light",
   toggleMode: () => set((state) => ({ mode: state.mode == "light" ? "dark" : "light" }), false),
}));

export default useThemeStore;
