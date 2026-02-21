"use client";

import { Box, Tooltip, Typography } from "@mui/material";
import { useState } from "react";
import GoogleIcon from "./GoogleIcon";

const ContactItem = ({ iconName, text }: { iconName: string; text: string }) => {
   const [isCopied, setIsCopied] = useState(false);

   const handleCopy = () => {
      if (window?.navigator) {
         window?.navigator.clipboard.writeText(text).then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 3000); // Reset after 3 seconds
         });
      }
   };

   return (
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
         <GoogleIcon iconName={iconName} fontSize={25} sx={{ color: "primary.600" }} />
         <Typography variant="h3" sx={{ color: "primary.900" }}>
            {text}
         </Typography>
         <Tooltip
            title="Copied"
            open={isCopied}
            disableFocusListener
            disableHoverListener
            disableTouchListener
            placement="top"
            arrow
            componentsProps={{
               tooltip: {
                  sx: {
                     bgcolor: "primary.600",
                     color: "common.white",
                     fontSize: "0.75rem",
                     "& .MuiTooltip-arrow": {
                        color: "primary.600",
                     },
                  },
               },
            }}
         >
            <Box>
               <GoogleIcon
                  iconName="content_copy"
                  sx={{ cursor: "pointer", color: "text.secondary" }}
                  onClick={handleCopy}
               />
            </Box>
         </Tooltip>
      </Box>
   );
};

export default ContactItem;
