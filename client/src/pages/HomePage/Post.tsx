import { Box, Typography } from "@mui/material";
import Tag from "./Tag";

const Post = () => {
  return (
    <Box
      className="row"
      sx={{
        gap: "1.7rem",
        minHeight: "24rem",
        maxWidth: "112rem",
      }}>
      <Box
        sx={{
          maxWidth: "7.3rem",
          position: "relative",
        }}>
        <Box
          sx={{
            width: "7.4rem",
            height: "7.4rem",
            color: "#fff",
            fontSize: "3.2rem",
            fontWeight: "600",
            textAlign: "right",
            fontFamily: "Lexend Deca",
            lineHeight: "normal",
            marginTop: "0.7rem",
            marginBottom: "1.4rem",
          }}>
          27 May
        </Box>
        <Typography
          className="cursor absolute"
          sx={{
            transform: "rotate(-90deg) translateX(-50%)",
            left: "0.8rem",
            color: "#fff",
            fontSize: "1.6rem",
            fontWeight: "300",
            fontFamily: "Lexend Deca",
            lineHeight: "normal",
          }}>
          @samurai2099
        </Typography>
      </Box>
      <div className="column space-between full-width">
        <Typography
          sx={{
            color: "#6EEB83",
            fontFamily: "DM Serif Display",
            fontSize: "3.2rem",
            lineHeight: "normal",
          }}>
          15 Disadvantages Of Freedom And How You Can Workaround It.
        </Typography>
        <Box
          sx={{
            width: "95%",
            color: "#fff",
            fontFamily: "Lexend Deca",
            fontSize: "2rem",
            lineHeight: "normal",
            fontWeight: "400",
            marginTop: "1.9rem",
          }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
          <Typography
            className="cursor"
            sx={{
              marginLeft: "0.4rem",
              display: "inline-flex",
              textTransform: "lowercase",
              fontSize: "inherit",
              color: "#6EEB83",
              fontFamily: "inherit",
              fontWeight: "200",
              lineHeight: "inherit",
              padding: "0",
            }}>
            ...read more
          </Typography>
        </Box>
        <Box
          sx={{
            marginTop: "1.2rem",
          }}>
          <Tag />
        </Box>
      </div>
    </Box>
  );
};

export default Post;
