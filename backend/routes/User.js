const express = require("express");
const bcrypt = require("bcrypt");
const paseto = require("paseto");
const router = express.Router();
const User = require("../models/User");

router.post("/register", async (req, res) => {
  const hashed = await bcrypt.hash(req.body.password, 10);
  const user = new User({
    username: req.body.username,
    password: hashed,
  });

  try {
    const savedUser = await user.save();
    res.json(savedPlayer);
  } catch (error) {
    res.json({ message: error });
  }
});

router.post("/login", async (req, res) => {
  const user = await User.findOne({ username: req.body.username });

  if (!user) return res.status(401).json({ error: "Invalid credentials" });

  const match = await bcrypt.compare(req.body.password, user.password);
  if (!match) return res.status(401).json({ error: "Invalid credentials" });

  try {
    const token = await paseto.sign({ userId: user._id }, "your_paseto_secret");
    res.json(token);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
