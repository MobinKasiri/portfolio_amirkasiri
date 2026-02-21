import { getBreakpoint } from "@/app/theme/options/breakpoints";
import { Box, Container, Typography } from "@mui/material";
import { ReactNode } from "react";

interface SectionWrapperProps {
   title: string;
   children: ReactNode;
   variant?: "default" | "background";
   backgroundColor?: string;
   isFirstSection?: boolean;
   id?: string;
}

const SectionWrapper = ({
   title,
   children,
   variant = "default",
   backgroundColor = "primary.50",
   isFirstSection = false,
   id,
}: SectionWrapperProps) => {
   return (
      <Box
         id={id}
         sx={{
            ...(variant === "background" && {
               backgroundColor,
            }),
            ...(isFirstSection
               ? {
                    mt: 3,
                    py: 3,
                    [getBreakpoint("tabletL", "up")]: {
                       mt: 6,
                       py: 6,
                    },
                 }
               : {
                    py: 3,
                    [getBreakpoint("tabletL", "up")]: {
                       py: 6,
                    },
                 }),
         }}
      >
         <Container>
            {/* Section Title — underline accent style */}
            <Box
               sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  mb: 3,
                  [getBreakpoint("tabletL", "up")]: {
                     mb: 5,
                  },
               }}
            >
               <Typography
                  variant="h3"
                  sx={{
                     fontWeight: 700,
                     color: "primary.900",
                     position: "relative",
                     pb: 1.5,
                     "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: 0,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: 48,
                        height: 3,
                        borderRadius: "2px",
                        background: "linear-gradient(90deg, #333, #999)",
                     },
                  }}
               >
                  {title}
               </Typography>
            </Box>
            {children}
         </Container>
      </Box>
   );
};

export default SectionWrapper;
