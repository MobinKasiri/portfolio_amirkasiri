import { PaletteMode, ThemeOptions, createTheme } from "@mui/material";
import { breakpoints } from "./options/breakpoints";
import { typography } from "./options/typography";
import { MuiButton } from "./options/components/MuiButton";
import { MuiCard } from "./options/components/MuiCard";
import { MuiCardMedia } from "./options/components/MuiCardMedia";
import { MuiCardContent } from "./options/components/MuiCardContent";
import { MuiCardActions } from "./options/components/MuiCardActions";
import { MuiLink } from "./options/components/MuiLink";
import { MuiContainer } from "./options/components/MuiContainer";
import { customShadows } from "./options/customShadows";
import { MuiMenuItem } from "./options/components/MuiMenuItem";
import { MuiTextField } from "./options/components/MuiTextField";
import paletteOptions from "./paletteOptions";
import { MuiMenu } from "./options/components/MuiMenu";
import { MuiAlert } from "./options/components/MuiAlert";
import { MuiTooltip } from "./options/components/MuiTooltip";
import { MuiDivider } from "./options/components/MuiDivider";
import { MuiTypography } from "./options/components/MuiTypography";
import { MuiChip } from "./options/components/MuiChip";

const getDesignTokens = (mode: PaletteMode): ThemeOptions => {
   const theme = createTheme({
      breakpoints,
   });

   const returnValue: ThemeOptions = {
      palette: { ...paletteOptions[mode], mode },
      typography: typography(theme),
      breakpoints,
      components: {
         MuiButton: MuiButton(paletteOptions[mode]),
         MuiCard,
         MuiCardMedia,
         MuiCardContent,
         MuiCardActions,
         MuiLink,
         MuiContainer: MuiContainer(theme),
         MuiMenuItem,
         MuiTextField,
         MuiMenu: MuiMenu(theme),
         MuiAlert,
         MuiTooltip,
         MuiDivider,
         MuiTypography: MuiTypography(paletteOptions[mode]),
         MuiChip: MuiChip(paletteOptions[mode]),
      },
      shadows: customShadows(theme),
   };

   return returnValue;
};

const theme = (mode: PaletteMode): ThemeOptions => createTheme(getDesignTokens(mode));

export default theme;
