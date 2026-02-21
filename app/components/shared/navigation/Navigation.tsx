"use client";

import {
   Box,
   Button,
   Container,
   Divider,
   IconButton,
   Typography,
   Drawer,
   List,
   ListItem,
} from "@mui/material";
import React, { useEffect, useCallback } from "react";
import { NavbarItemInterface, navigationConfig } from "./navigation_config";
import GoogleIcon from "../../ui/GoogleIcon";
import useThemeStore from "@/app/lib/store/themeStore";
import { getBreakpoint } from "@/app/theme/options/breakpoints";
import { useHamburgerStore } from "@/app/lib/store/hamburgerStore";
import { Link as ScrollLink } from "react-scroll";
import Link from "../../ui/Link";
import styles from "./NavLink.module.css";

// Types
interface NavItem {
   title: string;
   href: string;
   targetId?: string;
}

// Download CV Button Component
const DownloadCVButton = ({ fullWidth = false }: { fullWidth?: boolean }) => (
   <Button
      variant="contained"
      fullWidth={fullWidth}
      sx={{
         bgcolor: "text.primary",
         color: "background.default",
         "&:hover": {
            bgcolor: "text.secondary",
         },
      }}
      component="a"
      href={process.env.NEXT_PUBLIC_RESUME_DOWNLOAD_LINK}
      download
      target="_blank"
      startIcon={<GoogleIcon iconName="downloading" />}
   >
      Download CV
   </Button>
);

// Logo Component
const Logo = ({ onClick }: { onClick?: () => void }) => (
   <Link
      sx={{ display: "flex", alignItems: "center", gap: 1.5, color: "primary.900" }}
      href="/"
      onClick={onClick}
   >
      <Box
         sx={{
            width: 36,
            height: 36,
            borderRadius: "10px",
            background: "linear-gradient(135deg, #222, #666)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontWeight: 800,
            fontSize: "0.875rem",
            letterSpacing: "-0.5px",
         }}
      >
         AK
      </Box>
      <Typography component="span" variant="h4" fontWeight={800} color="inherit">
         Amir Kasiri
      </Typography>
   </Link>
);

// NavLink Component
const NavLink = ({
   item,
   mobile = false,
   onClick,
}: {
   item: NavItem;
   mobile?: boolean;
   onClick: () => void;
}) => (
   <ScrollLink
      to={item.targetId || ""}
      smooth
      duration={500}
      offset={
         -(
            (typeof window !== "undefined"
               ? document?.getElementById("navigation_box")?.clientHeight
               : null) ?? 73
         )
      }
      activeClass="active-nav-item"
      onClick={onClick}
      className={mobile ? undefined : styles.navLink}
      style={{ cursor: "pointer" }}
      spy
   >
      {mobile ? (
         <ListItem
            sx={{
               py: 1,
               transition: "all 0.3s",
               borderRadius: 2,
               "&:hover": { bgcolor: "action.hover" },
            }}
         >
            <Typography variant="body2" component="span">
               {item.title}
            </Typography>
         </ListItem>
      ) : (
         <Typography variant="body2" component="span">
            {item.title}
         </Typography>
      )}
   </ScrollLink>
);

// Desktop Navigation Component
const DesktopNavigation = ({ items }: { items: NavItem[] }) => {
   const { closeHamburgerMode } = useHamburgerStore();

   const handleNavClick = useCallback(
      (href: string) => {
         window.history.pushState(null, "", href);
         closeHamburgerMode();
      },
      [closeHamburgerMode]
   );

   return (
      <Box
         sx={{
            [getBreakpoint("desktopS", "down")]: {
               display: "none",
            },
            display: "flex",
            alignItems: "center",
            gap: 3,
         }}
      >
         {items.map((item, index) => (
            <Box key={index} sx={{ width: "auto" }}>
               <NavLink item={item} onClick={() => handleNavClick(item.href)} />
            </Box>
         ))}
      </Box>
   );
};

// Mobile Navigation Drawer Component
const MobileNavigationDrawer = ({
   items,
   open,
   onClose,
}: {
   items: NavItem[];
   open: boolean;
   onClose: () => void;
}) => {
   const { closeHamburgerMode } = useHamburgerStore();
   const { mode, toggleMode } = useThemeStore();

   const handleNavClick = useCallback(
      (href: string) => {
         window.history.pushState(null, "", href);
         closeHamburgerMode();
      },
      [closeHamburgerMode]
   );

   return (
      <Drawer
         anchor="right"
         open={open}
         onClose={onClose}
         sx={{
            "& .MuiDrawer-paper": {
               minWidth: 350,
               width: "80%",
               bgcolor: "background.default",
               p: 2.5,
            },
         }}
      >
         <Box
            sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}
         >
            <Logo onClick={closeHamburgerMode} />
            <IconButton onClick={onClose}>
               <GoogleIcon iconName="close" />
            </IconButton>
         </Box>
         <List>
            {items.map((item, index) => (
               <NavLink key={index} mobile item={item} onClick={() => handleNavClick(item.href)} />
            ))}
         </List>
         <Box sx={{ mt: 2 }}>
            <Box
               sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mb: 2,
                  cursor: "pointer",
               }}
               onClick={toggleMode}
            >
               <Typography variant="body2">Switch Theme</Typography>
               <IconButton onClick={toggleMode}>
                  <GoogleIcon iconName={mode === "light" ? "light_mode" : "dark_mode"} />
               </IconButton>
            </Box>
            <DownloadCVButton fullWidth />
         </Box>
      </Drawer>
   );
};

// Main Navigation Component
const Navigation = () => {
   const { navbar } = navigationConfig;
   const { mode, toggleMode } = useThemeStore();
   const { open, switchHamburgerMode, closeHamburgerMode } = useHamburgerStore();

   const enhancedNavbar: NavItem[] = navbar.map((item) => ({
      ...(item as NavbarItemInterface),
      targetId: (item.href as string).replace("#", ""),
   }));

   useEffect(() => {
      const handleInitialScroll = () => {
         if (typeof window !== "undefined" && window.location.hash) {
            const hash = window.location.hash.replace("#", "");
            const element = document.getElementById(hash);
            const navigationHeight = document?.getElementById("navigation_box")
               ?.clientHeight as number;

            if (element) {
               const elementPosition = element.getBoundingClientRect().top;
               const offsetPosition =
                  elementPosition + window.pageYOffset - (navigationHeight ?? 0);

               setTimeout(() => {
                  window.scrollTo({
                     top: offsetPosition,
                     behavior: "auto",
                  });
               }, 100);
            }
         }
      };

      handleInitialScroll();
      window.addEventListener("hashchange", handleInitialScroll);
      return () => window.removeEventListener("hashchange", handleInitialScroll);
   }, []);

   const toggleDrawer = () => {
      switchHamburgerMode();
   };

   return (
      <Box
         sx={{
            width: 1,
            bgcolor: "background.default",
            borderBottom: "2px solid",
            borderColor: "primary.300",
            position: "fixed",
            top: 0,
            zIndex: 100,
            py: 1,
            [getBreakpoint("desktopS", "up")]: {
               py: 2,
            },
         }}
         id="navigation_box"
      >
         <Container>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
               {/* Left: Logo */}
               <Logo />

               {/* Right: Navigation and Actions */}
               <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                  {/* Hamburger Icon for Smaller Screens */}
                  <IconButton
                     onClick={toggleDrawer}
                     sx={{
                        [getBreakpoint("desktopS", "up")]: {
                           display: "none",
                        },
                        display: "flex",
                     }}
                  >
                     <GoogleIcon
                        fontSize={28}
                        color="primary.900"
                        iconName={open ? "close" : "menu"}
                     />
                  </IconButton>

                  {/* Desktop Navigation */}
                  <DesktopNavigation items={enhancedNavbar} />

                  <Divider
                     orientation="vertical"
                     flexItem
                     sx={{
                        [getBreakpoint("desktopS", "down")]: {
                           display: "none",
                        },
                        maxHeight: 37,
                     }}
                  />

                  {/* Additional Settings for Larger Screens */}
                  <Box
                     sx={{
                        [getBreakpoint("desktopS", "down")]: {
                           display: "none",
                        },
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                     }}
                  >
                     <IconButton onClick={toggleMode}>
                        <GoogleIcon iconName={mode === "light" ? "light_mode" : "dark_mode"} />
                     </IconButton>
                     <DownloadCVButton />
                  </Box>
               </Box>
            </Box>
         </Container>

         {/* Mobile Navigation Drawer */}
         <MobileNavigationDrawer items={enhancedNavbar} open={open} onClose={closeHamburgerMode} />
      </Box>
   );
};

export default Navigation;
