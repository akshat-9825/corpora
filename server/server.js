require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 4000;
const authRoute = require("./routes/auth");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

//MiddleWares
app.use(express.json());
app.use(cors());
app.use(cookieParser());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to the database…"))
  .catch((err) => console.error("Connection error:", err));

app.use("/api/v1/auth", authRoute);

app.get("/api/v1/health", (req, res) => {
  res.json({
    service: "Corpora Backend API Server",
    status: "true",
    time: new Date(),
  });
});

app.use(errorHandler);

app.use("/*", (req, res) => {
  res.status(404).json({ errorMessage: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`Backend server running at http://${HOST}:${PORT}`);
});
