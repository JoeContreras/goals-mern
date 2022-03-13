const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // original === "Bearer <token>" |  let token === <token>
      token = req.headers.authorization.split(" ")[1];

      // Verify token
      const decoded = jwt.decode(token, process.env.JWT_SECRET);

      //  get user from the token
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (e) {
      console.log(e);
      res.status(401);
      throw new Error("Not Authorized");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not Authorized, no token was provided");
  }
});

module.exports = protect;
