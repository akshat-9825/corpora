import { ReactNode } from "react";
import { Avatar, useTheme, Box, Container } from "@mui/material";
import IconGroup from "./components/LeftBar/IconGroup";
import SearchIcon from "@mui/icons-material/Search";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Link, useLocation } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import useUser from "./hooks/useUser";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const theme = useTheme();
  const location = useLocation();
  const { user, isAuthenticated } = useUser();

  if (location.pathname === "/login" || location.pathname === "/signup") {
    return (
      <Container maxWidth={false} disableGutters>
        {children}
      </Container>
    );
  } else {
    return (
      <Box
        className="row"
        sx={{
          gap: "5.3rem",
        }}>
        <Box position="static">
          <Box
            className="column flex-ac"
            sx={{
              height: "100vh",
              borderLeft: `0.1rem solid ${theme.palette.primary.main}`,
              borderRight: `0.1rem solid ${theme.palette.primary.main}`,
              width: "9.5rem",
            }}>
            <Link to={!isAuthenticated ? "/login" : "/profile"}>
              <Avatar
                className="cursor"
                sx={{
                  bgcolor: theme.palette.primary.main,
                  width: "6.6rem",
                  height: "6.6rem",
                  fontSize: "3.2rem",
                  marginTop: "9.8rem",
                  color: theme.palette.primary.dark,
                }}>
                {isAuthenticated ? (
                  user?.username[0].toUpperCase() || "U"
                ) : (
                  <LoginIcon
                    sx={{
                      height: "3rem",
                      width: "3rem",
                      mt: "0.6rem",
                      mr: "0.4rem",
                    }}
                  />
                )}
              </Avatar>
            </Link>
            <Link to="/search">
              <Box
                className="full-width"
                sx={{
                  marginTop: "4.1rem",
                  justifyContent: "center",
                }}>
                <IconGroup text="search">
                  <SearchIcon
                    sx={{
                      width: "4rem",
                      height: "4rem",
                      margin: "auto",
                      color: theme.palette.primary.main,
                    }}
                  />
                </IconGroup>
              </Box>
            </Link>
            <Link to="/trending">
              <Box
                className="full-width"
                sx={{
                  marginTop: "2.5rem",
                  justifyContent: "center",
                }}>
                <IconGroup text="trending">
                  <TrendingUpIcon
                    sx={{
                      width: "4rem",
                      height: "4rem",
                      margin: "auto",
                      color: theme.palette.primary.main,
                    }}
                  />
                </IconGroup>
              </Box>
            </Link>
            <Link to={isAuthenticated ? "/create" : "/login"}>
              <Box
                className="full-width"
                sx={{
                  marginTop: "16.6rem",
                  justifyContent: "center",
                }}>
                <IconGroup text="create">
                  <AddCircleOutlineIcon
                    sx={{
                      width: "4rem",
                      height: "4rem",
                      margin: "auto",
                      color: theme.palette.primary.main,
                    }}
                  />
                </IconGroup>
              </Box>
            </Link>
          </Box>
        </Box>
        <div className="full-width">{children}</div>
      </Box>
    );
  }
};

export default Layout;
