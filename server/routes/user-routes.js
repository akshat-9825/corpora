const express = require("express");
const { LoginUser, RegisterNewUser } = require("../controllers/userController");

const apiRoute = express.Router();

apiRoute.post("/users", LoginUser);
apiRoute.post("/user/new", RegisterNewUser);

module.exports = apiRoute;
