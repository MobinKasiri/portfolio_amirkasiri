import { ButtonProps } from "@mui/material";
import { HTMLAttributeAnchorTarget } from "react";

export interface NavbarItemInterface {
   id: number;
   title: string;
   href: string;
   onClick?: () => void;
}

export interface SearchInterface {
   icon: string;
}

export interface buttonProps extends ButtonProps {
   icon?: string;
   target?: HTMLAttributeAnchorTarget;
   condition?: boolean;
   reduxStateRoute?: string;
   href?: string;
}

export interface PanelInterface {
   search?: SearchInterface;
   buttons?: buttonProps[];
}

export interface NavigationConfigInterface {
   logo: string | null;
   navbar: Partial<NavbarItemInterface>[];
   navArrowIcon: string;
   panel: PanelInterface;
}

export const navigationConfig: NavigationConfigInterface = {
   logo: null,
   navbar: [
      {
         title: "Skills",
         href: "#skills",
      },
      {
         title: "Projects",
         href: "#projects",
      },
      {
         title: "Contact",
         href: "#contact",
      },
   ],
   panel: {
      search: {
         icon: "search",
      },
   },
   navArrowIcon: "keyboard_arrow_down",
};
