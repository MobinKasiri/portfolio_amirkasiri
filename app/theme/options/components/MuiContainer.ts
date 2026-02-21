import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from "@mui/material";

interface MuiCardContainerOptions {
   defaultProps?: ComponentsProps["MuiContainer"];
   styleOverrides?: ComponentsOverrides<Theme>["MuiContainer"];
   variants?: ComponentsVariants<Theme>["MuiContainer"];
}

export const MuiContainer = (theme: Theme): MuiCardContainerOptions => ({
   styleOverrides: {
      maxWidthLg: {
         paddingLeft: 16,
         paddingRight: 16,
         [theme?.breakpoints?.up("desktopS")]: {
            maxWidth: "1280px",
            paddingLeft: 32,
            paddingRight: 32,
         },
      },
   },
});
