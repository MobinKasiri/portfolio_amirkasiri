import { BreakpointsOptions } from "@mui/material";

const customBreakpoints = {
   zero: 0,
   mobileS: 360,
   tabletM: 550,
   tabletL: 728,
   desktopS: 1024,
   desktopM: 1280,
   desktopL: 1440,
   desktopXl: 1920,
};

export const breakpoints: BreakpointsOptions = {
   values: customBreakpoints,
};

export const getBreakpoint = (key: keyof typeof customBreakpoints, type: "up" | "down" = "up") => {
   const value = customBreakpoints[key];
   return value !== undefined ? `@media (${type === "up" ? "min" : "max"}-width: ${value}px)` : "";
};
