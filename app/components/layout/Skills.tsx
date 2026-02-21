"use client";

import { Box, Grid2, Typography } from "@mui/material";
import {
   SiGit,
   SiHtml5,
   SiJavascript,
   SiMui,
   SiNextdotjs,
   SiReact,
   SiRedux,
   SiTailwindcss,
   SiTypescript,
} from "react-icons/si";
import { TbDeviceMobileShare, TbApi } from "react-icons/tb";
import { HiOutlineCube } from "react-icons/hi2";
import { FaSass } from "react-icons/fa";
import SectionWrapper from "../ui/SectionWrapper";

const skillSize = 36;

const skills = [
   { name: "HTML5", icon: <SiHtml5 size={skillSize} />, color: "#E34F26" },
   { name: "CSS3 (SCSS)", icon: <FaSass size={skillSize} />, color: "#CC6699" },
   { name: "JavaScript", icon: <SiJavascript size={skillSize} />, color: "#F7DF1E" },
   { name: "TypeScript", icon: <SiTypescript size={skillSize} />, color: "#3178C6" },
   { name: "Git & GitHub", icon: <SiGit size={skillSize} />, color: "#F05032" },
   { name: "React", icon: <SiReact size={skillSize} />, color: "#61DAFB" },
   { name: "Next.js", icon: <SiNextdotjs size={skillSize} />, color: "#000000" },
   {
      name: "Responsive Design",
      icon: <TbDeviceMobileShare size={skillSize} />,
      color: "#2563eb",
   },
   { name: "Material UI", icon: <SiMui size={skillSize} />, color: "#007FFF" },
   { name: "Tailwind CSS", icon: <SiTailwindcss size={skillSize} />, color: "#06B6D4" },
   { name: "Redux", icon: <SiRedux size={skillSize} />, color: "#764ABC" },
   { name: "REST APIs", icon: <TbApi size={skillSize} />, color: "#10B981" },
   {
      name: "Component Architecture",
      icon: <HiOutlineCube size={skillSize} />,
      color: "#8B5CF6",
   },
];

// Skill card with hover effect
const SkillCard = ({ skill }: { skill: (typeof skills)[number] }) => (
   <Box
      sx={{
         display: "flex",
         alignItems: "center",
         gap: 2,
         bgcolor: "background.paper",
         borderRadius: "14px",
         px: 2.5,
         py: 2,
         border: "1px solid",
         borderColor: "primary.200",
         transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
         cursor: "default",
         "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 8px 25px rgba(29, 78, 216, 0.12)",
            borderColor: "primary.400",
         },
      }}
   >
      <Box
         sx={{
            color: skill.color,
            display: "flex",
            alignItems: "center",
            flexShrink: 0,
         }}
      >
         {skill.icon}
      </Box>
      <Typography
         variant="body2"
         sx={{
            fontWeight: 600,
            color: "text.primary",
         }}
      >
         {skill.name}
      </Typography>
   </Box>
);

const Skills = () => {
   return (
      <SectionWrapper isFirstSection variant="background" id="skills" title="Skills">
         <Typography
            variant="body1"
            sx={{
               mb: 5,
               textAlign: "center",
               color: "primary.700",
            }}
         >
            Technologies and tools I work with
         </Typography>
         <Grid2 container spacing={2} justifyContent="center" sx={{ maxWidth: 900, mx: "auto" }}>
            {skills.map((skill, index) => (
               <Grid2
                  key={index}
                  size={{ zero: 6, tabletM: 4, desktopS: 3 }}
               >
                  <SkillCard skill={skill} />
               </Grid2>
            ))}
         </Grid2>
      </SectionWrapper>
   );
};

export default Skills;
