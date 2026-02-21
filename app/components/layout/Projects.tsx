"use client";

import {
   Box,
   Chip,
   Grid2,
   Link,
   Typography,
} from "@mui/material";
import { FaExternalLinkAlt } from "react-icons/fa";
import SectionWrapper from "../ui/SectionWrapper";

const projects = [
   {
      title: "StandBuy",
      technologies: [
         "Next.js",
         "Material UI",
         "Performance Optimization",
         "Swiper",
      ],
      description: [
         "Built a modern, responsive portfolio landing page template.",
         "Created reusable UI components with a clean layout structure.",
         "Ensured cross-device compatibility and responsive design.",
      ],
      link: "https://standbuy.vercel.app",
   },
   {
      title: "Product-Delta Landing Page",
      technologies: [
         "React.js",
         "SCSS",
         "Swiper",
         "React Hook Form",
         "Styled Components",
         "Redux",
      ],
      description: [
         "Built a sleek, responsive product landing page with modern layout and smooth dark/light theme toggle.",
         "Developed reusable UI sections (features, hero, pricing, testimonials, FAQ) for clear product presentation.",
         "Implemented theme switching to support both dark and light modes for enhanced user experience.",
      ],
      link: "https://product-delta.vercel.app",
   },
];

// Project Card — vertical layout
const ProjectCard = ({
   title,
   technologies,
   description,
   link,
}: {
   title: string;
   technologies: string[];
   description: string[];
   link?: string;
}) => {
   return (
      <Box
         sx={{
            bgcolor: "background.paper",
            borderRadius: "20px",
            overflow: "hidden",
            border: "1px solid",
            borderColor: "primary.200",
            transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            "&:hover": {
               transform: "translateY(-6px)",
               boxShadow: "0 20px 40px rgba(29, 78, 216, 0.1)",
               borderColor: "primary.400",
            },
         }}
      >
         {/* Top accent bar */}
         <Box
            sx={{
               height: 4,
               background: "linear-gradient(90deg, #1d4ed8, #3b82f6, #60a5fa)",
            }}
         />

         {/* Content */}
         <Box sx={{ p: 3.5, flex: 1, display: "flex", flexDirection: "column" }}>
            {/* Title + Link */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2.5 }}>
               <Typography
                  variant="h4"
                  sx={{
                     fontWeight: 700,
                     color: "primary.900",
                  }}
               >
                  {title}
               </Typography>
               {link && (
                  <Link
                     href={link}
                     target="_blank"
                     rel="noopener noreferrer"
                     sx={{
                        color: "primary.600",
                        transition: "color 0.2s",
                        display: "flex",
                        "&:hover": {
                           color: "primary.800",
                        },
                     }}
                  >
                     <FaExternalLinkAlt size={14} />
                  </Link>
               )}
            </Box>

            {/* Description */}
            <Box sx={{ mb: 3, flex: 1 }}>
               {description.map((desc, idx) => (
                  <Box
                     key={idx}
                     sx={{
                        display: "flex",
                        gap: 1.5,
                        mb: 1,
                        alignItems: "flex-start",
                     }}
                  >
                     <Box
                        sx={{
                           width: 6,
                           height: 6,
                           borderRadius: "50%",
                           bgcolor: "primary.400",
                           mt: 1,
                           flexShrink: 0,
                        }}
                     />
                     <Typography
                        variant="body2"
                        sx={{
                           color: "text.secondary",
                           lineHeight: 1.7,
                        }}
                     >
                        {desc}
                     </Typography>
                  </Box>
               ))}
            </Box>

            {/* Technologies */}
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
               {technologies.map((tech, index) => (
                  <Chip
                     key={index}
                     label={tech}
                     size="small"
                     variant="outlined"
                     sx={{
                        borderRadius: "8px",
                        fontWeight: 500,
                        fontSize: "0.75rem",
                        borderColor: "primary.300",
                        color: "primary.700",
                        bgcolor: "primary.50",
                     }}
                  />
               ))}
            </Box>

            {/* Link */}
            {link && (
               <Link
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                     mt: 2.5,
                     display: "inline-flex",
                     alignItems: "center",
                     gap: 1,
                     color: "primary.700",
                     fontWeight: 600,
                     fontSize: "0.875rem",
                     textDecoration: "none",
                     transition: "all 0.2s",
                     "&:hover": {
                        color: "primary.900",
                        gap: 1.5,
                     },
                  }}
               >
                  {link.replace(/^https?:\/\//, "")}
                  <FaExternalLinkAlt size={12} />
               </Link>
            )}
         </Box>
      </Box>
   );
};

// Main Projects Component
const Projects = () => {
   return (
      <SectionWrapper id="projects" variant="default" title="Projects">
         <Typography
            variant="body1"
            sx={{
               mb: 6,
               textAlign: "center",
               color: "primary.700",
            }}
         >
            Some of the projects I have built
         </Typography>
         <Grid2
            container
            spacing={3}
            sx={{
               maxWidth: 960,
               mx: "auto",
               justifyContent: "center",
            }}
         >
            {projects.map((project, index) => (
               <Grid2
                  key={index}
                  size={{ zero: 12, tabletL: 6 }}
               >
                  <ProjectCard
                     title={project.title}
                     technologies={project.technologies}
                     description={project.description}
                     link={project.link}
                  />
               </Grid2>
            ))}
         </Grid2>
      </SectionWrapper>
   );
};

export default Projects;
