import { StrictMode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider, createTheme } from "@mui/material";
import ReactDOM from "react-dom/client";
import ScopedCssBaseline from "@mui/material/ScopedCssBaseline";
import CorporaRoutes from "./CorporaRoutes.tsx";
import "./styles/global.scss";

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

const queryClient = new QueryClient();

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
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "1.6rem",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          ".MuiTextField-root.MuiTextField-root": {
            fontSize: "1.6rem",
          },
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ScopedCssBaseline />
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={darkTheme}>
        <CorporaRoutes />
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);
