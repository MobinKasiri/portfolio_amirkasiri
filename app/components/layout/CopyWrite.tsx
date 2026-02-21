import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Link from "../ui/Link";

const CopyWrite = () => {
   return (
      <Box
         sx={{
            background: "linear-gradient(90deg, #1d4ed8, #3b82f6)",
         }}
      >
         <Container sx={{ py: 2 }}>
            <Typography
               variant="body3"
               component="p"
               sx={{
                  color: "white",
                  textAlign: "center",
                  opacity: 0.9,
               }}
            >
               © 2025 | Designed & built by{" "}
               <Link
                  href="https://www.linkedin.com/in/mobinkasiri/"
                  target="_blank"
                  sx={{
                     color: "white",
                     fontWeight: 700,
                     textDecoration: "underline",
                     textDecorationColor: "rgba(255,255,255,0.5)",
                     "&:hover": {
                        textDecorationColor: "white",
                     },
                  }}
               >
                  Amir Kasiri
               </Link>
            </Typography>
         </Container>
      </Box>
   );
};

export default CopyWrite;
