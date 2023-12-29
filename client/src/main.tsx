import React from "react";
import ReactDOM from "react-dom/client";
import CorporaRoutes from "./CorporaRoutes.tsx";

import ScopedCssBaseline from "@mui/material/ScopedCssBaseline";
import { ThemeProvider, createTheme } from "@mui/material";
import "./index.scss";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    laptop: true;
    desktop: true;
    largeDesktop: true;
  }
}

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#6EEB83",
      light: "#fffff",
      dark: "#000",
    },
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 768,
      laptop: 1024,
      desktop: 1200,
      largeDesktop: 1440,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ScopedCssBaseline />
    <ThemeProvider theme={darkTheme}>
      <CorporaRoutes />
    </ThemeProvider>
  </React.StrictMode>
);
