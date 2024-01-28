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
    <Box className={`${className} column flex-c full-width cursor`}>
      {children}
      <Typography
        sx={{
          color: theme.palette.primary.main,
          fontSize: "1.6rem",
          textAlign: "center",
        }}>
        {text}
      </Typography>
    </Box>
  );
};

export default IconGroup;
