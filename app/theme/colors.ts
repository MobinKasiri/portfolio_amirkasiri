import { Color, PaletteColor } from "@mui/material";

type additionalTypes = { 950: string; default: string };
type CustomPaletteColor = PaletteColor & Color & additionalTypes;

export const primary: Partial<CustomPaletteColor> = {
   main: "#334155",
   50: "#f8fafc",
   100: "#f1f5f9",
   200: "#e2e8f0",
   300: "#cbd5e1",
   400: "#94a3b8",
   500: "#64748b",
   600: "#475569",
   700: "#334155",
   800: "#1e293b",
   900: "#0f172a",
   950: "#020617",
   default: "#ffffff",
   A100: "#f8fafc1a",
};

export const dark_primary: Partial<CustomPaletteColor> = {
   main: "#94a3b8",
   50: "#0f172a",
   100: "#1e293b",
   200: "#334155",
   300: "#475569",
   400: "#64748b",
   500: "#94a3b8",
   600: "#cbd5e1",
   700: "#e2e8f0",
   800: "#f1f5f9",
   900: "#f8fafc",
   950: "#ffffff",
   A100: "#020617",
   default: "#020617",
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
   main: "#475569",
};

export const success: Partial<CustomPaletteColor> = {
   main: "#317D3C",
};

export const dark_error: Partial<CustomPaletteColor> = {
   main: "#D32F2F",
};

export const dark_warning: Partial<CustomPaletteColor> = {
   main: "#FFA726",
};

export const dark_info: Partial<CustomPaletteColor> = {
   main: "#94a3b8",
};

export const dark_success: Partial<CustomPaletteColor> = {
   main: "#66BB6A",
};
