import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import ScopedCssBaseline from "@mui/material/ScopedCssBaseline";
import { ThemeProvider, createTheme } from "@mui/material";
import "./index.scss";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#6EEB83",
      light: "#fffff",
      dark: "#000",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ScopedCssBaseline />
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
