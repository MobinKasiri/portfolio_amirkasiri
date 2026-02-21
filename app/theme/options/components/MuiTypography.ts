import {
   Color,
   ComponentsOverrides,
   ComponentsProps,
   ComponentsVariants,
   PaletteOptions,
   Theme,
} from "@mui/material";

interface MuiTypographyOptions {
   defaultProps?: ComponentsProps["MuiTypography"];
   styleOverrides?: ComponentsOverrides<Theme>["MuiTypography"];
   variants?: ComponentsVariants<Theme>["MuiTypography"];
}

export const MuiTypography = (palette: PaletteOptions): MuiTypographyOptions => ({
   defaultProps: {
      color: (palette?.primary as Color)?.["900"],
   },
   styleOverrides: {
      root: {
         transition: "all 0.3s",
      },
   },
});
