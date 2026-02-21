import { Shadows, ThemeOptions } from "@mui/material";

export const customShadows = (theme: ThemeOptions): Shadows =>
   (theme?.shadows
      ? [
           ...theme?.shadows.map((item, index) => {
              switch (index) {
                 case 1: // md shadow
                    return "0 1px 6px rgba(0, 0, 0, 0.1)";
                 case 2: // lg shadow
                    return "0px 10px 8px 0px rgba(0, 0, 0, 0.04), 0px 4px 3px 0px rgba(0, 0, 0, 0.10)";
                 case 3: // 2xl shadow
                    return "0px 25px 25px 0px rgba(0, 0, 0, 0.15)";
                 default:
                    return item; // Keep the default shadows for other indices
              }
           }),
        ]
      : []) as Shadows;
