import { Box } from "@mui/material";
import Post from "./Post";

const HomePage = () => {
  return (
    <Box className="full-width column">
      <Box
        className="column flex-c"
        sx={{
          width: "fit-content",
          marginLeft: "4rem",
          marginTop: "7rem",
          color: "#FFF",
          fontFamily: "Lexend Deca",
          fontSize: "2rem",
          gap: "0.4rem",
        }}>
        <Box
          sx={{
            width: "2rem",
            height: "0.4rem",
            background: "#6EEB83",
          }}
        />
        Latest
      </Box>
      <Box
        sx={{
          marginTop: "3.3rem",
          width: "90%",
          gap: "3.3rem",
        }}>
        <Post />
      </Box>
    </Box>
  );
};

export default HomePage;
