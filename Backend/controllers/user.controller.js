const { validationResult } = require("express-validator");
const userModel = require("../models/user.model");
const userService = require("../services/user.service");
const blackListTokenModel = require("../models/blackListToken.model");

module.exports.registerUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  console.log(req.body);

  const { fullname, email, password } = req.body;
  const isUserAlreadyExists = await userModel.findOne({ email });
  if (isUserAlreadyExists) {
    return res
      .status(409)
      .json({ message: "User already exists with this email" });
  }
  const hashedPassword = await userModel.hashPassword(password);
  const user = await userService.createUser({
    firstname: fullname.firstname,
    lastName: fullname.lastname,
    email,
    password: hashedPassword,
  });
  const token = user.generateAuthToken();

  res.status(201).json({ user, token });
};
module.exports.loginUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  const user = await userModel.findOne({ email }).select("+password");
  if (!user) {
    return res
      .status(401)
      .json({ message: "User not found bcz invalid email or password" });
  }
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const token = user.generateAuthToken();

  res.cookie("token", token);
  res.status(200).json({ token, user });
};
module.exports.getUserProfile = async (req, res, next) => {
  res.status(200).json({ user: req.user });
};
module.exports.logoutUser = async (req, res, next) => {
  res.clearCookie("token");
  const token = req.cookies.token || req.headers.authorization.split(" ")[1];
  await blackListTokenModel.create({ token });
  res.status(200).json({ message: "Logged out successfully" });
};
