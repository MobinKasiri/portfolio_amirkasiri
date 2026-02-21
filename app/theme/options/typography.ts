import { Theme } from "@mui/material";
import { TypographyOptions } from "@mui/material/styles/createTypography";

export const fontName = "Inter";

export const typography = (theme: Theme): TypographyOptions => ({
   fontFamily: fontName,
   allVariants: {
      fontFamily: fontName,
   },
   h1: {
      fontSize: "60px",
      fontWeight: 700,
      lineHeight: "72px",
      letterSpacing: "-2%",
      [theme?.breakpoints?.down("desktopS")]: {
         fontSize: "48px",
         lineHeight: "48px",
      },
      [theme?.breakpoints?.down("zero")]: {
         fontSize: "36px",
         fontWeight: 600,
         lineHeight: "40px",
         letterSpacing: "0%",
      },
   },
   h2: {
      fontSize: "36px",
      fontWeight: 600,
      lineHeight: "40px",
      letterSpacing: "-2%",
      [theme?.breakpoints?.down("desktopS")]: {
         fontSize: "18px",
         lineHeight: "28px",
      },
   },
   h3: {
      fontSize: "30px",
      fontWeight: 600,
      lineHeight: "36px",
      letterSpacing: "-2%",
      [theme?.breakpoints?.down("desktopS")]: {
         fontSize: "24px",
         lineHeight: "32px",
      },
   },
   h4: {
      fontSize: "22px",
      fontWeight: 600,
      lineHeight: "30px",
      letterSpacing: "-2%",

      [theme?.breakpoints?.down("desktopS")]: {
         fontSize: "20px",
         lineHeight: "32px",
      },
   },
   h5: {
      fontSize: "20px",
      fontWeight: 600,
      lineHeight: "28px",
      letterSpacing: "0%",
   },
   h6: {
      fontSize: "18px",
      fontWeight: 400,
      lineHeight: "28px",
      letterSpacing: "0%",
   },
   subtitle1: {
      fontSize: "20px",
      fontWeight: 400,
      lineHeight: "28px",
      letterSpacing: "0%",
      [theme?.breakpoints?.down("desktopS")]: {
         fontSize: "18px",
      },
   },
   subtitle2: {
      fontSize: "18px",
      fontWeight: 600,
      lineHeight: "28px",
      letterSpacing: "0%",
      [theme?.breakpoints?.down("desktopS")]: {
         fontSize: "18px",
      },
   },
   body1: {
      fontSize: "18px",
      fontWeight: 400,
      lineHeight: "28px",
      letterSpacing: "0%",
      [theme?.breakpoints?.down("desktopS")]: {
         fontSize: "16px",
         lineHeight: "24px",
      },
   },
   body2: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "24px",
      letterSpacing: "0%",
   },
   body3: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "20px",
      letterSpacing: "0%",
   },
   button: {
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "24px",
      letterSpacing: "0%",
   },
   caption: {
      fontSize: "15px",
      fontWeight: 500,
      lineHeight: "22px",
      letterSpacing: "0%",

      [theme?.breakpoints?.down("desktopS")]: {
         fontSize: "14px",
         lineHeight: "20px",
      },
   },
});
