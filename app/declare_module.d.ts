import React from "react";

declare module "@mui/material/styles" {
   interface BreakpointOverrides {
      xs: false;
      sm: false;
      md: false;
      lg: false;
      xl: false;
      zero: true;
      mobileS: true;
      tabletM: true;
      tabletL: true;
      desktopS: true;
      desktopM: true;
      desktopL: true;
      desktopXl: true;
   }
}

declare module "@mui/material/styles" {
   interface TypographyVariants {
      h1: React.CSSProperties;
      h2: React.CSSProperties;
      h3: React.CSSProperties;
      h4: React.CSSProperties;
      h5: React.CSSProperties;
      h6: React.CSSProperties;
      subtitle1: React.CSSProperties;
      subtitle2: React.CSSProperties;
      body1: React.CSSProperties;
      body2: React.CSSProperties;
      body3: React.CSSProperties;
      button: React.CSSProperties;
      caption: React.CSSProperties;
   }
   interface TypographyVariantsOptions {
      h1?: React.CSSProperties;
      h2?: React.CSSProperties;
      h3?: React.CSSProperties;
      h4?: React.CSSProperties;
      h5?: React.CSSProperties;
      h6?: React.CSSProperties;
      subtitle1?: React.CSSProperties;
      subtitle2?: React.CSSProperties;
      body1?: React.CSSProperties;
      body2?: React.CSSProperties;
      body3?: React.CSSProperties;
      button?: React.CSSProperties;
      caption?: React.CSSProperties;
   }
}
declare module "@mui/material/Typography" {
   interface TypographyPropsVariantOverrides {
      h1: true;
      h2: true;
      h3: true;
      h4: true;
      h5: true;
      h6: true;
      subtitle1: true;
      subtitle2: true;
      body1: true;
      body2: true;
      body3: true;
      button: true;
      caption: true;
   }
}
