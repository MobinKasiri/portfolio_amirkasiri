import { Box, Typography } from "@mui/material";
import React from "react";
import ContactItem from "../../ui/ContactItem";
import SectionWrapper from "../../ui/SectionWrapper";
import { SocialLinks } from "../../layout/SocialLinks";

// Footer Component
const Footer = () => {
   return (
      <SectionWrapper id="contact" variant="background" title="Get In Touch">
         <Typography
            variant="body1"
            sx={{
               color: "primary.700",
               mb: 5,
               textAlign: "center",
               maxWidth: 520,
               mx: "auto",
               lineHeight: 1.8,
            }}
         >
            Feel free to reach out if you're looking for a developer, have a query, or simply want to
            connect.
         </Typography>

         {/* Contact Information */}
         <Box
            sx={{
               display: "flex",
               flexDirection: "column",
               alignItems: "center",
               gap: 2.5,
               mb: 5,
            }}
         >
            <ContactItem iconName="mail" text="Amirkasiri79@gmail.com" />
            <ContactItem iconName="call" text="+98 939 692 5530" />
         </Box>

         {/* Social Media Section */}
         <Box
            sx={{
               display: "flex",
               flexDirection: "column",
               alignItems: "center",
               gap: 1.5,
            }}
         >
            <Typography
               variant="body2"
               sx={{
                  color: "primary.600",
                  textAlign: "center",
               }}
            >
               You may also find me on these platforms
            </Typography>
            <SocialLinks onlySocialMedia />
         </Box>
      </SectionWrapper>
   );
};

export default Footer;
