import { getBreakpoint } from "@/app/theme/options/breakpoints";
import { Box, Typography } from "@mui/material";
import GoogleIcon from "../ui/GoogleIcon"; // Assuming this is your custom GoogleIcon component
import SectionWrapper from "../ui/SectionWrapper";

// Function to calculate duration from start date to now
const calculateDuration = (startDate: string, endDate: string | undefined) => {
   const start = new Date(startDate);
   const end = endDate ? new Date(endDate) : new Date();
   const diffInMs = end.getTime() - start.getTime();
   const diffInMonths = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 30.42)); // Average month length
   const years = Math.floor(diffInMonths / 12);
   const months = diffInMonths % 12;
   return `${years > 0 ? `${years} yr${years > 1 ? "s" : ""}` : ""} ${
      months > 0 ? `${months} mo${months > 1 ? "s" : ""}` : ""
   }`.trim();
};

// Experience Entry Component
const ExperienceEntry = ({
   company,
   companyImage,
   role,
   startDate,
   endDate,
   location,
   description,
}: {
   company: string;
   companyImage: string;
   role: string;
   startDate: string;
   endDate: string;
   location: string;
   description: string[];
}) => {
   const duration = calculateDuration(startDate, endDate);
   const formattedDate = new Date(startDate).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
   });

   return (
      <Box
         sx={{
            bgcolor: "background.paper",
            borderRadius: "12px",
            p: 3,
            mb: 3,
            boxShadow: 1,
            maxWidth: 1140,
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 4,
            [getBreakpoint("tabletL", "up")]: {
               flexDirection: "row",
            },
         }}
      >
         {/* Company Image */}
         <Box
            component="img"
            src={companyImage}
            alt={`${company} logo`}
            sx={{
               width: 100,
               height: 100,
               objectFit: "contain",
               alignSelf: "flex-start",
               borderRadius: 2,
            }}
         />

         {/* Content */}
         <Box sx={{ flex: 1 }}>
            <Box
               sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                  gap: 0.5,
                  mb: 2,
                  [getBreakpoint("tabletL", "up")]: {
                     flexDirection: "row",
                     alignItems: "center",
                     gap: 0,
                     mb: 1,
                  },
               }}
            >
               <Typography variant="h5" sx={{ color: "success.main", fontWeight: 700 }}>
                  {company}
               </Typography>
               <Box sx={{ display: "flex", alignItems: "end", gap: 1.25 }}>
                  <Typography color="textSecondary" variant="body2">
                     {formattedDate} -{" "}
                     {endDate
                        ? new Date(endDate).toLocaleDateString("en-US", {
                             month: "short",
                             year: "numeric",
                          })
                        : "Present"}
                  </Typography>
                  <Typography color="textSecondary" variant="body2" sx={{ fontWeight: 600 }}>
                     {" • "}
                  </Typography>
                  <Typography color="success" variant="body2" sx={{ fontWeight: 600 }}>
                     {duration}
                  </Typography>
               </Box>
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
               {role}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, mb: 2 }}>
               <GoogleIcon iconName="location_on" fontSize={18} color="primary.600" />
               <Typography color="primary.600" variant="body2">
                  {location}
               </Typography>
            </Box>
            <ul style={{ marginBottom: 16, paddingLeft: 20 }}>
               {description.map((desc) => (
                  <li key={desc} style={{ color: "rgba(0,0,0,0.65)" }}>
                     <Typography
                        variant="caption"
                        color="primary.500"
                        component="p"
                        fontWeight={400}
                        py={0.25}
                     >
                        {desc}
                     </Typography>
                  </li>
               ))}
            </ul>
         </Box>
      </Box>
   );
};

// Main Experience Component
const Experience = () => {
   const experiences = [
      {
         company: "Freelancer",
         companyImage: "/freelancer.png",
         role: "Frontend Developer",
         startDate: "2020-02-25",
         endDate: "2022-09-11",
         location: "Tehran, Iran",
         description: [
            "Build modern, performant web applications with React, Next.js, and TypeScript",
            "Design scalable frontend architectures and reusable UI libraries",
            "Redesign legacy systems and deliver production-ready features",
            "Ensure high standards of performance, accessibility, and maintainability",
            "Solve real-world frontend challenges with practical engineering solutions",
         ],
      },
      {
         company: "Simorgh Intelligent Business Ideas",
         companyImage: "/simorgh_intelligent_business_idea_logo.jpeg", // Replace with the actual path to the company logo
         role: "Frontend Developer",
         startDate: "2022-10-01",
         location: "Tehran, Iran",
         description: [
            "Modernized Iran Insurance systems with a secure Next.js PWA and micro-frontend architecture.",
            "Built a scalable insurance platform with modular architecture and dynamic form/PDF generation.",
            "Led Amnro PWA with wallet, OTP, AI assessment, and admin panel.",
            "Developed a React design system with customizable MUI components.",
            "Rebuilt Simorgh’s landing page in Next.js 14 with CMS-driven layouts.",
            "Built and managed Sibitec CMS for Simorgh, enabling dynamic, CMS-driven layouts and content management.",
            "Created a React-based user management system with roles and access control.",
            "Replaced Apex Holding’s legacy panel with a modern React interface for improved data management.",
         ],
      },
   ];

   return (
      <SectionWrapper id="experience" variant="default" title="Experience">
         <Typography
            variant="body1"
            sx={{
               mb: 6,
               textAlign: "center",
            }}
            color="primary.600"
         >
            Here is a quick summary of my most recent experiences:
         </Typography>
         {experiences.map((exp, index) => (
            <ExperienceEntry
               key={index}
               company={exp.company}
               companyImage={exp.companyImage}
               role={exp.role}
               startDate={exp.startDate}
               endDate={exp.endDate || ""}
               location={exp.location}
               description={exp.description}
            />
         ))}
      </SectionWrapper>
   );
};

export default Experience;
