import { ReactNode } from "react";
import { Avatar, useTheme, Box } from "@mui/material";
import IconGroup from "./components/LeftBar/IconGroup";
import SearchIcon from "@mui/icons-material/Search";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Link } from "react-router-dom";
const Layout = ({ children }: { children: ReactNode }) => {
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <Box position="static">
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            borderLeft: `1px solid ${theme.palette.primary.main}`,
            borderRight: `1px solid ${theme.palette.primary.main}`,
            width: "95px",
            alignItems: "center",
          }}>
          <Link to="/profile">
            <Avatar
              sx={{
                bgcolor: theme.palette.primary.main,
                width: "66px",
                height: "66px",
                fontSize: "32px",
                marginTop: "98px",
                color: theme.palette.primary.dark,
                cursor: "pointer",
              }}>
              A
            </Avatar>
          </Link>
          <Link to="/search">
            <Box
              sx={{
                marginTop: "41px",
                width: "100%",
                justifyContent: "center",
              }}>
              <IconGroup text="search">
                <SearchIcon
                  sx={{
                    width: "40px",
                    height: "40px",
                    margin: "auto",
                    color: theme.palette.primary.main,
                  }}
                />
              </IconGroup>
            </Box>
          </Link>
          <Link to="/trending">
            <Box
              sx={{
                marginTop: "25px",
                width: "100%",
                justifyContent: "center",
              }}>
              <IconGroup text="trending">
                <TrendingUpIcon
                  sx={{
                    width: "40px",
                    height: "40px",
                    margin: "auto",
                    color: theme.palette.primary.main,
                  }}
                />
              </IconGroup>
            </Box>
          </Link>
          <Link to="/create">
            <Box
              sx={{
                marginTop: "166px",
                width: "100%",
                justifyContent: "center",
              }}>
              <IconGroup text="create">
                <AddCircleOutlineIcon
                  sx={{
                    width: "40px",
                    height: "40px",
                    margin: "auto",
                    color: theme.palette.primary.main,
                  }}
                />
              </IconGroup>
            </Box>
          </Link>
        </Box>
      </Box>
      <Box>{children}</Box>
    </Box>
  );
};

export default Layout;
