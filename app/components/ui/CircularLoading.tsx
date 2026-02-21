"use client";

import { spreadExcept } from "@/app/lib/utils/functions";
import {
   Box,
   CircularProgress,
   circularProgressClasses,
   CircularProgressProps,
   Typography,
} from "@mui/material";

const CircularLoading = (props: CircularProgressProps & { minHeight?: number }) => {
   return (
      <Box
         sx={{
            width: 1,
            height: props?.size ?? 1,
            minHeight: props?.minHeight,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
         }}
      >
         <Box sx={{ position: "relative", width: props?.size ?? 1, height: props?.size }}>
            <CircularProgress
               variant="determinate"
               sx={(theme) => ({
                  color: "gray.300",
                  ...theme.applyStyles("dark", {
                     color: theme.palette.grey[800],
                  }),
               })}
               size={40}
               thickness={4}
               {...spreadExcept(props, ["minHeight"])}
               value={100}
            />
            <CircularProgress
               variant="indeterminate"
               disableShrink
               sx={(theme) => ({
                  color: "primary.main",
                  animationDuration: "550ms",
                  position: "absolute",
                  left: 0,
                  [`& .${circularProgressClasses.circle}`]: {
                     strokeLinecap: "round",
                  },
                  ...theme.applyStyles("dark", {
                     color: "#308fe8",
                  }),
               })}
               size={40}
               thickness={4}
               {...spreadExcept(props, ["minHeight"])}
            />
         </Box>
         {props?.title ? (
            <Typography variant="subtitle1" mt={3}>
               در حال دریافت اطلاعات...
            </Typography>
         ) : null}
      </Box>
   );
};

export default CircularLoading;
