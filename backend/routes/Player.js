const express = require("express");
const router = express.Router();
const Player = require("../models/Player");
const auth = require("../middleware/auth");

router.post("/", auth, async (req, res) => {
  const player = new Player({
    name: req.body.name,
    mainstats: req.body.mainstats,
    description: req.body.description,
    userId: req.userId,
  });

  try {
    const savedPlayer = await player.save();
    res.json(savedPlayer);
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/", async (req, res) => {
  const userId = req.userId;
  try {
    const players = await Player.find({ userId });
    res.json(players);
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const player = await Player.findById(req.params.id);
    res.json(player);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
