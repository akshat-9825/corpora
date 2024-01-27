const User = require("../models/Users");
require("dotenv").config();
const jwt = require("jsonwebtoken");

/**
 * Verifies if a user is authenticated.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @return {Object} A JSON object indicating the verification status and, if successful, user data.
 */
module.exports.userVerification = (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ status: false });
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.json({ status: false });
    } else {
      const user = await User.findById(data.id);
      if (user) return res.json({ status: true, user: user });
      else return res.json({ status: false });
    }
  });
};
