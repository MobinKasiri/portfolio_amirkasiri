import { Color, PaletteColor } from "@mui/material";

type additionalTypes = { 950: string; default: string };
type CustomPaletteColor = PaletteColor & Color & additionalTypes;

export const primary: Partial<CustomPaletteColor> = {
   main: "#1d4ed8",
   50: "#eff6ff",
   100: "#dbeafe",
   200: "#bfdbfe",
   300: "#93c5fd",
   400: "#60a5fa",
   500: "#3b82f6",
   600: "#2563eb",
   700: "#1d4ed8",
   800: "#1e40af",
   900: "#1e3a8a",
   950: "#172554",
   default: "#ffffff",
   A100: "#eff6ff1a",
};

export const dark_primary: Partial<CustomPaletteColor> = {
   main: "#60a5fa",
   50: "#172554",
   100: "#1e3a8a",
   200: "#1e40af",
   300: "#1d4ed8",
   400: "#2563eb",
   500: "#3b82f6",
   600: "#60a5fa",
   700: "#93c5fd",
   800: "#bfdbfe",
   900: "#dbeafe",
   950: "#eff6ff",
   A100: "#172554",
   default: "#0a1220",
};

export const emerald: Partial<CustomPaletteColor> = {
   main: "#10b981",
   500: "#10b981",
};

export const error: Partial<CustomPaletteColor> = {
   main: "#D12D2E",
};

export const warning: Partial<CustomPaletteColor> = {
   main: "#EE6A20",
};

export const info: Partial<CustomPaletteColor> = {
   main: "#0284c7",
};

export const success: Partial<CustomPaletteColor> = {
   main: "#059669",
};

export const dark_error: Partial<CustomPaletteColor> = {
   main: "#D32F2F",
};

export const dark_warning: Partial<CustomPaletteColor> = {
   main: "#FFA726",
};

export const dark_info: Partial<CustomPaletteColor> = {
   main: "#38bdf8",
};

export const dark_success: Partial<CustomPaletteColor> = {
   main: "#34d399",
};
