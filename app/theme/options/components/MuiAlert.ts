import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from "@mui/material";

interface MuiAlertOptions {
   defaultProps?: ComponentsProps["MuiAlert"];
   styleOverrides?: ComponentsOverrides<Theme>["MuiAlert"];
   variants?: ComponentsVariants<Theme>["MuiAlert"];
}

export const MuiAlert: MuiAlertOptions = {
   defaultProps: {
      sx: {
         borderRadius: 1.5,
         py: 1,
         px: 1.5,
         alignItems: "center",
         width: 1,
         "& .MuiAlert-icon": {
            marginLeft: 0,
            marginRight: 0.5,
            width: 22,
            height: 22,
            padding: 0,
         },
         "& .MuiAlert-message": {
            p: 0.5,
         },
         "& .MuiAlert-action": {
            pt: 0,
            pr: 0.5,
         },
      },
   },
};
