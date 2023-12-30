import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

interface AuthenticationType {
  type: "login" | "signup";
}

const Authentication = ({ type }: AuthenticationType) => {
  const theme = useTheme();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      name: data.get("name"),
      password: data.get("password"),
      confirmPassword: data.get("confirm_password"),
    });
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: "flex",
          flexDirection: "column",
          width: "50%",
          [theme.breakpoints.down("tablet")]: {
            width: "100%",
          },
        }}>
        <Box
          sx={{
            alignSelf: "flex-start",
            [theme.breakpoints.down("tablet")]: {
              alignSelf: "center",
              textAlign: "center",
            },
          }}>
          <Typography
            sx={{
              fontSize: "48px",
              color: "white",
              fontFamily: "DM Serif Display",
            }}>
            Welcome
          </Typography>
          <Typography
            sx={{
              color: "#A5A5A5",
              fontFamily: "Lexend Deca",
              fontSize: "24px",
              fontWeight: "300",
            }}>
            {type === "login"
              ? "Let's log you in quickly"
              : "Let's sign you up quickly"}
          </Typography>
        </Box>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{ mt: "37px" }}>
          <TextField
            margin="normal"
            fullWidth
            id="email"
            label="Enter your email"
            name="email"
            autoComplete="email"
            autoFocus
            sx={{
              my: 0,
            }}
          />
          {type === "signup" ? (
            <TextField
              margin="normal"
              fullWidth
              id="name"
              label="Enter your name"
              name="name"
              autoComplete="name"
              sx={{
                mt: "22px",
                mb: 0,
              }}
            />
          ) : null}
          <TextField
            margin="normal"
            fullWidth
            name="password"
            label="Enter your password"
            type="password"
            id="password"
            sx={{
              my: "22px",
            }}
          />
          {type === "signup" ? (
            <TextField
              margin="normal"
              fullWidth
              name="confirm_password"
              label="Confirm password"
              type="password"
              id="confirm_password"
              sx={{
                mt: 0,
                mb: "22px",
              }}
            />
          ) : null}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: 4,
              [theme.breakpoints.down("tablet")]: {
                flexDirection: "column",
              },
            }}>
            <Box>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  width: "180px",
                  height: "60px",
                  ":hover": {
                    bgcolor: theme.palette.primary.main,
                  },
                  borderRadius: 0,
                  fontWeight: "600",
                  [theme.breakpoints.down("tablet")]: {
                    height: "52px",
                    width: "100%",
                  },
                }}>
                {type === "login" ? "LOGIN" : "SUBMIT"}
              </Button>
            </Box>
            <Box>
              {type === "login" ? (
                <Typography
                  sx={{
                    color: "#FFF",
                    fontFamily: "Lexend Deca",
                    fontSize: "20px",
                    fontWeight: "400",
                    display: "flex",
                    flexDirection: "column",
                  }}>
                  don't have an account?
                  <Button
                    variant="text"
                    sx={{
                      color: "#6EEB83",
                      fontFamily: "Lexend Deca",
                      fontSize: "20px",
                      fontWeight: "400",
                      textTransform: "none",
                      p: 0,
                      justifyContent: "flex-start",
                      width: "fit-content",
                    }}>
                    <Link to="/signup">sign-up</Link>
                  </Button>
                </Typography>
              ) : (
                <Typography
                  sx={{
                    color: "#FFF",
                    fontFamily: "Lexend Deca",
                    fontSize: "20px",
                    fontWeight: "400",
                    display: "flex",
                    flexDirection: "column",
                  }}>
                  already have an account?
                  <Button
                    variant="text"
                    sx={{
                      color: "#6EEB83",
                      fontFamily: "Lexend Deca",
                      fontSize: "20px",
                      fontWeight: "400",
                      textTransform: "none",
                      p: 0,
                      justifyContent: "flex-start",
                      width: "fit-content",
                    }}>
                    <Link to="/login">sign-in</Link>
                  </Button>
                </Typography>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Authentication;
