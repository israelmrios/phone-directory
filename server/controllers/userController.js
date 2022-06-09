const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

// @description     Adds a User
// @route           POST /api/users
// @access          Public
const registerUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || password) {
    res.status(400).json("Error: " + err);
  }

  // Check if user exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400).json("Error: " + err);
  }

  //Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //Create user
  const user = await User.create({
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400).json("Error: " + err);
  }
};

// @description     Authenticate a User
// @route           POST /api/users/login
// @access          Public
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // Check for user email
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400).json("Error: " + err);
  }
};

// @description     Get User data
// @route           GET /api/users/me
// @access          Private
const getMe = async (req, res) => {
  const { _id, email } = await User.findById(req.user.id)

  res.status(200).json({
      id: _id,
      email,
  })
};

// Generate GWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
