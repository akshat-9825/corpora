import { useCallback, useState } from "react";
import { useMutation } from "react-query";
import {
  Box,
  Button,
  Snackbar,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { Link, useNavigate } from "react-router-dom";
import { LoginApiCall, SignupApiCall } from "./apis";
import {
  AuthenticationType,
  LoginDataType,
  SignUpDataType,
  SlideTransition,
} from "./utils";

const Authentication = ({ type }: AuthenticationType) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [snackBarMessage, setSnackBarMessage] = useState("");

  const useSignUpMutation = useMutation((data: SignUpDataType) =>
    SignupApiCall(data)
  );

  const useLoginMutation = useMutation((data: LoginDataType) =>
    LoginApiCall(data)
  );

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const email = data.get("email") as string;
      if (!emailRegex.test(email)) {
        setSnackBarMessage("Invalid email address");
        setOpen(true);
        return;
      }
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
      const password = data.get("password") as string;
      if (password === "") {
        setSnackBarMessage("Password cannot be empty");
        setOpen(true);
        return;
      }
      if (!passwordRegex.test(password)) {
        setSnackBarMessage(
          "Invalid password. Password must be at least 8 characters long and include at least" +
            "one uppercase letter, one lowercase letter, and one digit."
        );
        setOpen(true);
        return;
      }
      if (type === "login") {
        useLoginMutation.mutate(
          {
            email,
            password,
          },
          {
            onSuccess: () => {
              setSnackBarMessage("Login successful!");
              setOpen(true);
              setTimeout(() => {
                navigate("/");
              }, 1000);
            },
            onError: (error) => {
              setSnackBarMessage("Login failed!" + error);
              setOpen(true);
            },
          }
        );
        return;
      }
      const confirmPassword = data.get("confirm_password") as string;
      if (password !== confirmPassword) {
        setSnackBarMessage("Passwords do not match");
        setOpen(true);
        return;
      }
      useSignUpMutation.mutate(
        {
          email,
          username: data.get("name") as string,
          password,
          confirm_password: confirmPassword,
        },
        {
          onSuccess: () => {
            setSnackBarMessage("Signup successful!");
            setOpen(true);
            setTimeout(() => {
              navigate("/");
            }, 1000);
          },
          onError: (error) => {
            setSnackBarMessage("Signup failed!" + error);
            setOpen(true);
          },
        }
      );
    },
    [navigate, type, useLoginMutation, useSignUpMutation]
  );

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <Box className="column flex-c">
      <Box
        className="column"
        sx={{
          my: 4,
          mx: 4,
          width: "50%",
          [theme.breakpoints.down("tablet")]: {
            width: "calc(100% - 4rem)",
          },
        }}>
        <Typography
          className="row flex-ac"
          sx={{
            color: "#A5A5A5",
            alignSelf: "flex-start",
            mb: 4,
            fontFamily: "Lexend Deca",
            fontSize: "1.6rem",
            gap: "0.8rem",
            fontWeight: "300",
          }}>
          <Link to="/">
            <ArrowLeftIcon sx={{ height: "1.6rem", width: "1.6rem" }} /> Home
          </Link>
        </Typography>
        <Snackbar
          open={open}
          autoHideDuration={5000}
          sx={{
            width: "20%",
            fontSize: "1.6rem",
            left: "auto",
          }}
          TransitionComponent={SlideTransition}
          onClose={handleClose}
          message={snackBarMessage}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        />
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
              fontSize: "4.8rem",
              color: "white",
              fontFamily: "DM Serif Display",
            }}>
            Welcome
          </Typography>
          <Typography
            sx={{
              color: "#A5A5A5",
              fontFamily: "Lexend Deca",
              fontSize: "2.4rem",
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
          sx={{ mt: "3.7rem" }}>
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
                mt: "2.2rem",
                mb: 0,
                fontSize: "1.6rem",
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
              my: "2.2rem",
              fontSize: "1.6rem",
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
                mb: "2.2rem",
                fontSize: "1.6rem",
              }}
            />
          ) : null}
          <Box
            className="row space-between"
            sx={{
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
                  width: "18rem",
                  height: "6rem",
                  ":hover": {
                    bgcolor: theme.palette.primary.main,
                  },
                  borderRadius: 0,
                  fontWeight: "600",
                  [theme.breakpoints.down("tablet")]: {
                    height: "5.2rem",
                    width: "100%",
                  },
                }}>
                {type === "login" ? "LOGIN" : "SUBMIT"}
              </Button>
            </Box>
            <Box>
              {type === "login" ? (
                <Typography
                  className="column"
                  sx={{
                    color: "#FFF",
                    fontFamily: "Lexend Deca",
                    fontSize: "2rem",
                    fontWeight: "400",
                  }}>
                  don't have an account?
                  <Button
                    variant="text"
                    sx={{
                      color: "#6EEB83",
                      fontFamily: "Lexend Deca",
                      fontSize: "2rem",
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
                  className="column"
                  sx={{
                    color: "#FFF",
                    fontFamily: "Lexend Deca",
                    fontSize: "2rem",
                    fontWeight: "400",
                  }}>
                  already have an account?
                  <Button
                    variant="text"
                    sx={{
                      color: "#6EEB83",
                      fontFamily: "Lexend Deca",
                      fontSize: "2rem",
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
