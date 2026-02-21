import { Box, IconButton, Link, Tooltip } from "@mui/material";
import {
   Call as CallIcon,
   Email as EmailIcon,
   GitHub as GitHubIcon,
   LinkedIn as LinkedInIcon,
   Telegram as TelegramIcon,
} from "@mui/icons-material";

interface SocialLink {
   name: string;
   href: string;
   icon: React.ElementType;
}

const socialLinks: SocialLink[] = [
   {
      name: "Phone",
      href: "tel:+989396925530",
      icon: CallIcon,
   },
   {
      name: "Email",
      href: "mailto:Amirkasiri79@gmail.com",
      icon: EmailIcon,
   },
   {
      name: "GitHub",
      href: "https://github.com/mobinkasiri",
      icon: GitHubIcon,
   },
   {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/amirkasirii/",
      icon: LinkedInIcon,
   },
      {
      name: "Telegram",
      href: "https://t.me/amirkasiri",
      icon: TelegramIcon,
   },
];

const excludeForFooter = ["Phone", "Email"];

export const SocialLinks = ({ onlySocialMedia = false }: { onlySocialMedia?: boolean }) => (
   <Box sx={{ display: "flex", width: "fit-content" }}>
      {(onlySocialMedia
         ? socialLinks?.filter((item) => !excludeForFooter?.includes(item?.name))
         : socialLinks
      ).map((link) => (
         <Tooltip key={link.name} title={link.name} arrow>
            <Link href={link.href} target="_blank" rel="noopener noreferrer">
               <IconButton>
                  <link.icon sx={{ fontSize: 25 }} />
               </IconButton>
            </Link>
         </Tooltip>
      ))}
   </Box>
);
