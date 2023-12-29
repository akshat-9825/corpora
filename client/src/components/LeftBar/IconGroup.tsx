import { ReactNode } from "react";
import { Box, Typography, useTheme } from "@mui/material";

const IconGroup = ({
  text,
  children,
  className,
}: {
  text: string;
  children: ReactNode;
  className?: string;
}) => {
  const theme = useTheme();

  return (
    <Box
      className={className}
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignContent: "center",
        width: "100%",
        cursor: "pointer",
      }}>
      {children}
      <Typography
        sx={{
          color: theme.palette.primary.main,
          fontSize: "16px",
          textAlign: "center",
        }}>
        {text}
      </Typography>
    </Box>
  );
};

export default IconGroup;
