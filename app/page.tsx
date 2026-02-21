import React from "react";
import { Metadata } from "next";
import Script from "next/script";
import { Box } from "@mui/material";
import Header from "./components/layout/Header";
import Skills from "./components/layout/Skills";
import Projects from "./components/layout/Projects";

const BASE_URL = "https://amirkasiri.ir";
const FULL_NAME_EN = "Amir Kasiri";
const FULL_NAME_FA = "امیر کثیری";
const JOB_TITLE_EN = "Front-End Developer";
const JOB_TITLE_FA = "توسعه‌دهنده فرانت‌اند";

export async function generateMetadata(): Promise<Metadata> {
   const title = `${FULL_NAME_EN} (${FULL_NAME_FA}) | ${JOB_TITLE_EN} | Portfolio`;
   const description = `${FULL_NAME_EN} (${FULL_NAME_FA}) - ${JOB_TITLE_EN} passionate about building clean, responsive, and user-focused web applications. Dedicated to writing maintainable code and continuously improving technical skills through hands-on projects.`;
   const descriptionFa = `${FULL_NAME_FA} (${FULL_NAME_EN}) - ${JOB_TITLE_FA} علاقه‌مند به ساخت اپلیکیشن‌های وب تمیز، واکنش‌گرا و کاربرمحور.`;

   const keywords = [
      // English
      FULL_NAME_EN,
      "Amir Kasiri",
      JOB_TITLE_EN,
      "Frontend Developer",
      "React Developer",
      "Next.js Developer",
      "TypeScript Developer",
      "React",
      "Next.js",
      "NextJS",
      "TypeScript",
      "JavaScript",
      "Web Development",
      "Frontend Development",
      "Material UI",
      "Tailwind CSS",
      "Redux",
      "SCSS",
      "Portfolio",
      // Persian
      FULL_NAME_FA,
      "امیر کثیری",
      JOB_TITLE_FA,
      "توسعه‌دهنده فرانت‌اند",
      "توسعه‌دهنده ری‌اکت",
      "ری‌اکت",
      "نکست جی‌اس",
      "تایپ‌اسکریپت",
      "جاوااسکریپت",
      "توسعه وب",
      "توسعه فرانت‌اند",
      "پورتفولیو",
   ];

   return {
      metadataBase: new URL(BASE_URL),
      title,
      description: `${description} ${descriptionFa}`,
      keywords,
      authors: [{ name: FULL_NAME_EN }, { name: FULL_NAME_FA }],
      creator: FULL_NAME_EN,
      publisher: FULL_NAME_EN,
      alternates: {
         canonical: BASE_URL,
         languages: {
            en: BASE_URL,
            fa: BASE_URL,
            "x-default": BASE_URL,
         },
      },
      robots: {
         index: true,
         follow: true,
         googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
         },
      },
      openGraph: {
         title,
         description: `${description} ${descriptionFa}`,
         url: BASE_URL,
         siteName: `${FULL_NAME_EN} Portfolio`,
         locale: "en_US",
         alternateLocale: ["fa_IR"],
         type: "website",
      },
      twitter: {
         card: "summary_large_image",
         title,
         description: `${description} ${descriptionFa}`,
      },
      other: {
         "apple-mobile-web-app-capable": "yes",
         "apple-mobile-web-app-status-bar-style": "default",
         "format-detection": "telephone=no",
      },
   };
}

const page = async () => {
   const personSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: FULL_NAME_EN,
      alternateName: [FULL_NAME_FA],
      jobTitle: JOB_TITLE_EN,
      description: `${FULL_NAME_EN} (${FULL_NAME_FA}) - ${JOB_TITLE_EN} passionate about building clean, responsive, and user-focused web applications`,
      url: BASE_URL,
      sameAs: [
         "https://www.linkedin.com/in/amirkasirii/",
         "https://github.com/amirkasirii",
      ],
      knowsLanguage: ["en", "fa"],
      areaServed: {
         "@type": "Country",
         name: "Global",
      },
      hasOccupation: {
         "@type": "Occupation",
         name: JOB_TITLE_EN,
      },
      knowsAbout: [
         "HTML5",
         "CSS3",
         "SCSS",
         "JavaScript",
         "TypeScript",
         "React",
         "Next.js",
         "Material UI",
         "Tailwind CSS",
         "Redux",
         "REST APIs",
         "Git",
         "Responsive Design",
      ],
   };

   const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: `${FULL_NAME_EN} Portfolio`,
      alternateName: `پورتفولیو ${FULL_NAME_FA}`,
      url: BASE_URL,
      author: {
         "@type": "Person",
         name: FULL_NAME_EN,
         alternateName: FULL_NAME_FA,
      },
      inLanguage: ["en", "fa"],
   };

   return (
      <>
         <Script id="person-schema" type="application/ld+json" strategy="beforeInteractive">
            {JSON.stringify(personSchema)}
         </Script>
         <Script id="website-schema" type="application/ld+json" strategy="beforeInteractive">
            {JSON.stringify(websiteSchema)}
         </Script>
         <Box>
            <Header />
            <Skills />
            <Projects />
         </Box>
      </>
   );
};

export default page;

export const dynamic = "force-dynamic";
