import "./lib/styles/globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import ThemeProvider from "./components/providers/ThemeProvider";
import Navigation from "./components/shared/navigation/Navigation";
import Footer from "./components/shared/footer/Footer";
import { Box } from "@mui/material";
import GoToTop from "./components/shared/fixed/GoToTop";
import { Toaster } from "react-hot-toast";
import { Inter } from "next/font/google";
import CopyWrite from "./components/layout/CopyWrite";
import { getBreakpoint } from "./theme/options/breakpoints";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
   return (
      <html>
         <head>
            <link rel="icon" href="/coding.png" sizes="any" />
         </head>
         <body className={inter.className}>
            <AppRouterCacheProvider>
               <ThemeProvider>
                  <Navigation />
                  <Box
                     sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexDirection: "column",
                        minHeight: "100vh",
                        mt: 57 / 8,
                        [getBreakpoint("desktopS")]: {
                           mt: 73 / 8,
                        },
                     }}
                  >
                     {children}
                     <Footer />
                     <CopyWrite />
                     <GoToTop />
                  </Box>
                  <Toaster
                     position="top-center"
                     reverseOrder={false}
                     gutter={8}
                     toastOptions={{
                        duration: 5000,
                        style: {
                           background: "#363636",
                           color: "#fff",
                           maxWidth: "100%",
                        },
                     }}
                  />
               </ThemeProvider>
            </AppRouterCacheProvider>
         </body>
      </html>
   );
}
