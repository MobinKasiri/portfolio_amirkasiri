import {
   Color,
   ComponentsOverrides,
   ComponentsProps,
   ComponentsVariants,
   PaletteOptions,
   Theme,
} from "@mui/material";

interface MuiChipOptions {
   defaultProps?: ComponentsProps["MuiChip"];
   styleOverrides?: ComponentsOverrides<Theme>["MuiChip"];
   variants?: ComponentsVariants<Theme>["MuiChip"];
}

export const MuiChip = (palette: PaletteOptions): MuiChipOptions => ({
   styleOverrides: {
      colorPrimary: {
         backgroundColor: (palette?.primary as Color)?.["200"],
         color: (palette?.primary as Color)?.["600"],
      },
      outlinedPrimary: {
         backgroundColor: "white",
         borderColor: (palette?.primary as Color)?.["300"],
      },
   },
});
