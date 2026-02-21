"use client";

import { useMemo } from "react";
import { Box, ThemeProvider as Provider } from "@mui/material";
import useThemeStore from "@/app/lib/store/themeStore";
import getTheme from "@/app/theme/theme";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
   const { mode } = useThemeStore();

   const theme = useMemo(() => getTheme(mode), [mode]);

   return (
      <Provider theme={theme}>
         <Box sx={{ bgcolor: "background.default" }}>{children}</Box>
      </Provider>
   );
};

export default ThemeProvider;
