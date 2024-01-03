const Users = require("../models/Users");
const { createSecretToken } = require("../utils/SecretToken");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

/**
 * Checks if the given password matches the confirmed password.
 *
 * @param {string} password - The password to be checked.
 * @param {string} confirmPassword - The confirmed password for comparison.
 * @return {boolean} Returns true if the password matches the confirmed password, false otherwise.
 */
function checkPasswordMatch(password, confirmPassword) {
  return password === confirmPassword;
}

/**
 * Capitalizes the first letter of a word.
 *
 * @param {string} word - The word to be capitalized.
 * @return {string} The capitalized word.
 */
const Capitalize = (word) => {
  const capitalized = word.charAt(0).toUpperCase() + word.slice(1);
  return capitalized;
};

/**
 * Signup function that handles user registration.
 */
module.exports.Signup = async (req, res, next) => {
  try {
    const {
      email,
      phone,
      password,
      confirm_password: confirmPassword,
      type,
      username,
      createdAt,
    } = req.body;
    let userType = type || "user";
    const existingUser = await Users.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }

    if (!checkPasswordMatch(password, confirmPassword)) {
      return res.json({ message: "Passwords do not match" });
    }

    if (!password) {
      return res.json({ message: "Password required" });
    } else if (!email && !phone) {
      return res.json({ message: "Email or Phone required" });
    } else if (!username) {
      return res.json({ message: "Username required" });
    }
    const user = await Users.create({
      email,
      phone,
      password,
      username,
      createdAt,
      userType,
    });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res.status(201).json({
      message: `${Capitalize(userType)} signed in successfully`,
      success: true,
      user,
    });
    next();
  } catch (error) {
    res.json({ message: error.message });
    console.error(error);
  }
};

/**
 * Login function. Handles user login and authentication.
 */
module.exports.Login = async (req, res, next) => {
  try {
    const { email, phone, password } = req.body;
    if (!(email || phone)) {
      return res.json({ message: "Email or Phone required" });
    }
    if (!password) {
      return res.json({ message: "Password required" });
    }
    const user = await Users.findOne({ email });
    if (!user) {
      return res.json({ message: "Incorrect password or email" });
    }
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({ message: "Incorrect password or email" });
    }
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User logged in successfully", success: true });
    next();
  } catch (error) {
    res.json({ message: error.message });
    console.error(error);
  }
};

/**
 * Deletes a user based on the provided token.
 *
 * @param {Object} req - the request object
 * @param {Object} res - the response object
 * @return {Object} the response object with status and message properties
 */
module.exports.Delete = (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ status: false, message: "User not logged in." });
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.json({ status: false });
    } else {
      const user = await Users.findByIdAndDelete(data.id);
      if (user)
        return res.json({ status: true, message: "User successfully deleted" });
      else return res.json({ status: false, message: error.message });
    }
  });
};

/**
 * Modify function modifies the username of a user.
 */
module.exports.Modify = (req, res) => {
  const token = req.cookies.token;
  const { new_name } = req.body;

  if (!token) {
    return res.json({ status: false, message: "User not logged in." });
  }

  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.json({ status: false, message: "Invalid token." });
    } else {
      try {
        const user = await Users.findByIdAndUpdate(
          data.id,
          { username: new_name },
          { new: true }
        );

        if (user) {
          return res.json({
            status: true,
            message: "User successfully modified",
          });
        } else {
          return res.json({
            status: false,
            message: "User not found or could not be modified",
          });
        }
      } catch (error) {
        return res.json({ status: false, message: error.message });
      }
    }
  });
};
