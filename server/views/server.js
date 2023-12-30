require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const app = express();
const { PORT, MONGO_URI: connectionString } = process.env;

//MiddleWares
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());

mongoose
  .connect(connectionString)
  .then(() => console.log("Connected to the database…"))
  .catch((err) => console.error("Connection error:", err));

const authRoute = require("../routes/AuthRoutes");
app.use("/api", authRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT} port....`);
});
