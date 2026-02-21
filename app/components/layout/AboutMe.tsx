import { getBreakpoint } from "@/app/theme/options/breakpoints";
import { Box, Grid2, Typography } from "@mui/material";
import SectionWrapper from "../ui/SectionWrapper";

// Text Section Component
const TextSection = () => (
   <Grid2 size={{ zero: 12, tabletL: 7 }}>
      <Typography
         variant="h2"
         sx={{
            fontWeight: 800,
            mb: 3,
            fontSize: { zero: "1.5rem", tabletL: "2rem" },
         }}
      >
         Curious about me? Here you have it:
      </Typography>

      <Typography
         variant="body2"
         sx={{
            color: "text.secondary",
            mb: 3,
         }}
      >
         I'm a passionate frontend developer who specializes in building modern web applications
         with React and Next.js. I bring digital products to life by focusing on both technical
         excellence and user experience. Clean code, pixel-perfect implementation, and creating
         smooth, performant interfaces matter to me.
      </Typography>

      <Typography
         variant="body2"
         sx={{
            color: "text.secondary",
            mb: 1,
         }}
      >
         <strong>My Frontend Development Journey</strong>
      </Typography>

      <Typography
         variant="body2"
         sx={{
            color: "text.secondary",
            mb: 3,
         }}
      >
         I began my frontend journey several years ago, and since then I've continued to grow and
         evolve as a developer, taking on new challenges and learning modern technologies like
         Next.js, TypeScript, and advanced state management patterns. Now with 5 years of
         professional experience, I build responsive, accessible web applications that users love.
      </Typography>

      <Typography
         variant="body2"
         sx={{
            color: "text.secondary",
            mb: 2,
         }}
      >
         <strong>What I Excel At</strong>
      </Typography>

      <Box sx={{ mb: 2 }}>
         <Typography
            variant="body2"
            sx={{
               color: "text.secondary",
               display: "flex",
               alignItems: "center",
               gap: 1,
            }}
         >
            <Box component="span" sx={{ fontSize: "1.5rem", lineHeight: 0 }}>
               •
            </Box>
            Transforming legacy systems into modern PWAs with Next.js and micro-frontend
            architectures
         </Typography>
         <Typography
            variant="body2"
            sx={{
               color: "text.secondary",
               display: "flex",
               alignItems: "center",
               gap: 1,
            }}
         >
            <Box component="span" sx={{ fontSize: "1.5rem", lineHeight: 0 }}>
               •
            </Box>
            Building scalable design systems with TypeScript and customizable components
         </Typography>
         <Typography
            variant="body2"
            sx={{
               color: "text.secondary",
               display: "flex",
               alignItems: "center",
               gap: 1,
            }}
         >
            <Box component="span" sx={{ fontSize: "1.5rem", lineHeight: 0 }}>
               •
            </Box>
            Optimizing performance through efficient state management and rendering strategies
         </Typography>
         <Typography
            variant="body2"
            sx={{
               color: "text.secondary",
               display: "flex",
               alignItems: "center",
               gap: 1,
            }}
         >
            <Box component="span" sx={{ fontSize: "1.5rem", lineHeight: 0 }}>
               •
            </Box>
            Collaborating across teams to deliver features from concept to production
         </Typography>
      </Box>

      <Typography
         variant="body2"
         sx={{
            color: "text.secondary",
            mb: 2,
         }}
      >
         I'm a progressive thinker who enjoys working on products end-to-end, from UI concepts to
         implementation. When I'm not coding, you can find me exploring the latest web technologies
         or contributing to open source projects.
      </Typography>

      <Typography
         variant="body2"
         sx={{
            color: "text.secondary",
            fontStyle: "italic",
         }}
      >
         - I'm always open to interesting projects and collaborations. If you have something
         exciting in mind, let's talk!
      </Typography>
   </Grid2>
);

// Image Section Component
const ImageSection = () => (
   <Grid2
      size={{ zero: 12, tabletL: 5 }}
      sx={{
         display: "flex",
         justifyContent: "center",
         maxWidth: "400px",
         maxHeight: "600px",
         width: "100%",
         height: "100%",
         p: 1,
         m: 2,
         [getBreakpoint("tabletL", "down")]: {
            maxWidth: "100%",
            maxHeight: "300px",
            m: 0,
            p: 0,
         },
      }}
   >
      <Box
         sx={{
            position: "relative",
            [getBreakpoint("tabletL", "down")]: {
               mx: "auto",
               "&:before": { display: "none" },
            },
            "&:before": {
               content: '""',
               position: "absolute",
               top: "15px",
               left: "10px",
               maxWidth: "400px",
               maxHeight: "500px",
               width: "100%",
               height: "100%",
               backgroundColor: "primary.800",
               opacity: 0.075,
               borderRadius: "8px",
               zIndex: 1,
            },
         }}
      >
         <Box
            component="img"
            src="/about_me.webp"
            alt="About Me"
            sx={{
               maxWidth: "400px",
               maxHeight: "500px",
               width: "100%",
               height: "100%",
               objectFit: "cover",
               borderRadius: "8px",
               position: "relative",
               zIndex: 2,
               boxShadow: 2,
            }}
         />
      </Box>
   </Grid2>
);

// Main AboutMe Component
const AboutMe = () => {
   return (
      <SectionWrapper id="about_me" isFirstSection variant="background" title="About Me">
         <Grid2
            container
            spacing={4}
            sx={{
               justifyContent: "space-between",
               flexWrap: "nowrap",
               [getBreakpoint("tabletL", "down")]: {
                  flexDirection: "column",
               },
            }}
         >
            <ImageSection />
            <TextSection />
         </Grid2>
      </SectionWrapper>
   );
};

export default AboutMe;
