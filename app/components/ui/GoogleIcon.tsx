import { Box, BoxProps } from "@mui/material";
interface Props extends BoxProps {
   iconName: string;
}

const GoogleIcon = ({ iconName, className, ...rest }: Props) => {
   return (
      <Box
         component="span"
         {...rest}
         className={"material-symbols-rounded icon_style " + className}
         sx={{ transition: "all 0.3s", ...rest?.sx }}
      >
         {iconName}
      </Box>
   );
};

export default GoogleIcon;
