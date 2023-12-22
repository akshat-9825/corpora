const Users = require("../models/Users.js");
const bcrypt = require("bcryptjs");

const RegisterNewUser = async (req, res) => {
  const { name, password: plainTextPassword } = req.body;
  const password = await bcrypt.hash(plainTextPassword, 10);

  try {
    const existingUser = await Users.findOne({ name });

    if (existingUser) {
      const isPasswordValid = bcrypt.compare(password, existingUser.password);

      if (isPasswordValid) {
        return res.status(409).json({
          token: false,
          message: "User already exists. Please log in.",
        });
      } else {
        return res.status(400).json({
          token: false,
          message: "Password mismatch. User already exists.",
        });
      }
    }

    // If user doesn't exist, create a new user
    const newUser = new Users({ name, password });
    await newUser.save();
    res.status(201).json({ token: true, newUser });
  } catch (error) {
    res.status(500).json({ token: false, message: "Error creating user." });
  }
};

const LoginUser = async (req, res) => {
  const { name, password: plainTextPassword } = req.body;
  const password = await bcrypt.hash(plainTextPassword, 10);

  const existingUser = await Users.findOne({ name });

  if (!existingUser) {
    return res
      .status(200)
      .json({ token: false, message: "User not found. Please sign up." });
  }

  const isPasswordValid = bcrypt.compare(password, existingUser.password);

  if (!isPasswordValid) {
    return res
      .status(200)
      .json({ token: false, message: "Incorrect password." });
  }

  res
    .status(200)
    .json({ existingUser, token: true, message: "Login successful." });
};

module.exports = { RegisterNewUser, LoginUser };
