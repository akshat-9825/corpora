const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const port = 5001;

const apiRoute = require("../routes/user-routes");

//MiddleWares
app.use(express.json());
app.use(cors());

app.use("/api", apiRoute);

const connectionString = process.env.MONGO_URI;

mongoose
  .connect(connectionString)
  .then(() => console.log("Connected to the database…"))
  .catch((err) => console.error("Connection error:", err));

app.listen(port, () => {
  console.log(`Server is listening on ${port} port....`);
});
