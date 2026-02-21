import {
   Color,
   ComponentsOverrides,
   ComponentsProps,
   ComponentsVariants,
   PaletteOptions,
   Theme,
} from "@mui/material";

interface MuiButtonOptions {
   defaultProps?: ComponentsProps["MuiButton"];
   styleOverrides?: ComponentsOverrides<Theme>["MuiButton"];
   variants?: ComponentsVariants<Theme>["MuiButton"];
}

export const MuiButton = (palette: PaletteOptions): MuiButtonOptions => {
   return {
      defaultProps: {
         variant: "contained",
         size: "medium",
         disableElevation: true,
      },
      styleOverrides: {
         root: {
            whiteSpace: "nowrap",
            borderRadius: 12,
            textTransform: "inherit",
            transition: "all 0.3s",
         },
         containedPrimary: {
            backgroundColor: (palette?.primary as Color)?.["900"],
            ":hover": { backgroundColor: (palette?.primary as Color)?.["600"] },
         },
         sizeLarge: {
            padding: "6px 12px",
            fontSize: "16px",
            fontWeight: 500,
            lineHeight: "28px",
         },
         sizeMedium: {
            padding: "5px 10px",
            fontSize: "14px",
            fontWeight: 500,
            lineHeight: "24px",
         },
         sizeSmall: {
            padding: "4px 8px",
            fontSize: "12px",
            fontWeight: 500,
            lineHeight: "20px",
         },
      },
   };
};
