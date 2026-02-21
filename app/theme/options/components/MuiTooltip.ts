import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from "@mui/material";

interface MuiTooltipOptions {
   defaultProps?: ComponentsProps["MuiTooltip"];
   styleOverrides?: ComponentsOverrides<Theme>["MuiTooltip"];
   variants?: ComponentsVariants<Theme>["MuiTooltip"];
}

export const MuiTooltip: MuiTooltipOptions = {
   defaultProps: {
      slotProps: {
         popper: {
            modifiers: [
               {
                  name: "offset",
                  options: {
                     offset: [0, -7],
                  },
               },
            ],
         },
      },
   },
};
