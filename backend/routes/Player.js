const express = require("express");
const router = express.Router();
const Player = require("../models/Player");

router.post("/", async (req, res) => {
  const player = new Player({
    name: req.body.name,
    mainstats: req.body.mainstats,
  });

  try {
    const savedPlayer = await player.save();
    res.json(savedPlayer);
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/", async (req, res) => {
  try {
    const players = await Player.find();
    res.json(players);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
