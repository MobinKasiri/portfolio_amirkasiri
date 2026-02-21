import { PaletteOptions } from "@mui/material";
import {
   // default
   error,
   info,
   primary,
   success,
   warning,
   dark_error,
   dark_info,
   dark_primary,
   dark_success,
   dark_warning,
} from "./colors";

// default theme for design_system -------------------
const light: PaletteOptions = {
   primary,
   error,
   warning,
   info,
   success,
};
const dark: PaletteOptions = {
   error: dark_error,
   info: dark_info,
   primary: dark_primary,
   success: dark_success,
   warning: dark_warning,
   background: {
      default: dark_primary["default"],
      paper: dark_primary[100],
   },
};

const paletteOptions = {
   light,
   dark,
};

export default paletteOptions;
