const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

// Register User
router.post("/register", async (req, res) => {
  const { name, mobile, password,address,userCreateddate } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ name, mobile, password: hashedPassword,address,userCreateddate });
  await user.save();
  res.json({ message: "User registered successfully!",name:user.name });
});

// Login
router.post("/login", async (req, res) => {
  const { mobile, password } = req.body;
  const user = await User.findOne({ mobile });
  if (!user) return res.status(400).json({ message: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: "Invalid password" });

  //const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
  res.json({  user });
});

module.exports = router;
