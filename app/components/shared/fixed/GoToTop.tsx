"use client";

import React from "react";
import { Fab, Zoom, useScrollTrigger } from "@mui/material";
import GoogleIcon from "../../ui/GoogleIcon";

const GoToTop = () => {
   const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 100,
   });

   const handleClick = () => {
      window.scrollTo({
         top: 0,
         behavior: "smooth",
      });
   };

   return (
      <Zoom in={trigger}>
         <Fab
            color="primary"
            aria-label="Go to top"
            onClick={handleClick}
            sx={{
               position: "fixed",
               bottom: 16,
               right: 16,
               zIndex: 1000,
               transition: "all 0.3s",
               boxShadow: 2,
            }}
            size="small"
         >
            <GoogleIcon iconName="arrow_upward_alt" />
         </Fab>
      </Zoom>
   );
};

export default GoToTop;
