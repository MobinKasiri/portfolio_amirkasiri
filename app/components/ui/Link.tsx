"use client";

import { LinkProps, Link as MuiLink } from "@mui/material";
import NextLink from "next/link";
import React from "react";

const Link = ({ href, children, sx, ...rest }: LinkProps) => {
   return (
      <MuiLink
         color="primary.600"
         {...rest}
         href={href ?? "/"}
         sx={{ transition: "all 0.3s", ...sx }}
         component={NextLink}
      >
         {children}
      </MuiLink>
   );
};

export default Link;
