import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from "@mui/material";

interface MuiDividerOptions {
   defaultProps?: ComponentsProps["MuiDivider"];
   styleOverrides?: ComponentsOverrides<Theme>["MuiDivider"];
   variants?: ComponentsVariants<Theme>["MuiDivider"];
}

export const MuiDivider: MuiDividerOptions = {
   defaultProps: {
      sx: {
         borderColor: "gray.300",
         // borderWidth: 1,
      },
   },
};
