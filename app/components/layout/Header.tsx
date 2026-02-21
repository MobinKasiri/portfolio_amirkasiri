import { getBreakpoint } from "@/app/theme/options/breakpoints";
import { Box, Container, Typography } from "@mui/material";
import GoogleIcon from "../ui/GoogleIcon";
import { SocialLinks } from "./SocialLinks";

// Fade-in animation
const fadeInUp = {
   animation: "fadeInUp 0.8s ease-out forwards",
   "@keyframes fadeInUp": {
      "0%": {
         opacity: 0,
         transform: "translateY(30px)",
      },
      "100%": {
         opacity: 1,
         transform: "translateY(0)",
      },
   },
};

const pulseAnimation = {
   animation: "pulse 2s infinite",
   "@keyframes pulse": {
      "0%": { transform: "scale(0.85)", opacity: 0.6 },
      "50%": { transform: "scale(1.05)", opacity: 1 },
      "100%": { transform: "scale(0.85)", opacity: 0.6 },
   },
};

// Main Header Component — centered layout
const Header = () => {
   return (
      <Box
         sx={{
            position: "relative",
            overflow: "hidden",
            pt: 6,
            pb: 8,
            [getBreakpoint("desktopS", "up")]: {
               pt: 10,
               pb: 12,
            },
            "&::before": {
               content: '""',
               position: "absolute",
               top: 0,
               left: 0,
               right: 0,
               bottom: 0,
               background:
                  "radial-gradient(ellipse at 50% 0%, rgba(59, 130, 246, 0.08) 0%, transparent 70%)",
               pointerEvents: "none",
            },
         }}
      >
         <Container maxWidth="desktopS">
            <Box
               sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  ...fadeInUp,
               }}
            >
               {/* Profile Image */}
               <Box
                  sx={{
                     position: "relative",
                     mb: 4,
                     "&::after": {
                        content: '""',
                        position: "absolute",
                        inset: -6,
                        borderRadius: "50%",
                        border: "2px dashed",
                        borderColor: "primary.300",
                        opacity: 0.5,
                        animation: "spin 20s linear infinite",
                     },
                     "@keyframes spin": {
                        "0%": { transform: "rotate(0deg)" },
                        "100%": { transform: "rotate(360deg)" },
                     },
                  }}
               >
                  <Box
                     component="img"
                     src="/amir_kasiri.jpg"
                     alt="Amir Kasiri"
                     sx={{
                        width: 150,
                        height: 150,
                        borderRadius: "50%",
                        objectFit: "cover",
                        border: "4px solid",
                        borderColor: "primary.200",
                        boxShadow: "0 8px 32px rgba(29, 78, 216, 0.15)",
                        [getBreakpoint("tabletL", "up")]: {
                           width: 180,
                           height: 180,
                        },
                     }}
                  />
               </Box>

               {/* Job Title Badge */}
               <Box
                  sx={{
                     display: "inline-flex",
                     alignItems: "center",
                     gap: 1,
                     bgcolor: "primary.100",
                     color: "primary.700",
                     px: 2.5,
                     py: 0.75,
                     borderRadius: "24px",
                     mb: 2.5,
                     fontSize: "0.875rem",
                     fontWeight: 600,
                     letterSpacing: "0.5px",
                  }}
               >
                  <Box
                     sx={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        bgcolor: "success.main",
                        ...pulseAnimation,
                     }}
                  />
                  Front-End Developer
               </Box>

               {/* Name */}
               <Typography
                  variant="h1"
                  sx={{
                     fontWeight: 800,
                     mb: 2,
                     background: "linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 50%, #3b82f6 100%)",
                     WebkitBackgroundClip: "text",
                     WebkitTextFillColor: "transparent",
                     backgroundClip: "text",
                     letterSpacing: "-1px",
                  }}
               >
                  Amir Kasiri
               </Typography>

               {/* Bio */}
               <Typography
                  variant="body1"
                  sx={{
                     color: "text.secondary",
                     maxWidth: 640,
                     mb: 3,
                     lineHeight: 1.8,
                  }}
               >
                  Passionate about building clean, responsive, and user-focused web applications.
                  Dedicated to writing maintainable code and continuously improving technical skills
                  through hands-on projects and exploration of modern web technologies. Known for
                  strong problem-solving ability, attention to detail, and a growth mindset.
               </Typography>

               {/* Location */}
               <Box
                  sx={{
                     display: "flex",
                     alignItems: "center",
                     gap: 0.75,
                     mb: 3,
                     color: "text.secondary",
                  }}
               >
                  <GoogleIcon iconName="location_on" sx={{ color: "primary.600" }} fontSize={18} />
                  <Typography variant="body2">Tehran, Iran</Typography>
               </Box>

               {/* Social Links */}
               <SocialLinks />
            </Box>
         </Container>
      </Box>
   );
};

export default Header;
