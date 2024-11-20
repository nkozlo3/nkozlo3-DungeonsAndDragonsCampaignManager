const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("This is dm route");
});

router.get("/101", (req, res) => {
  res.send("this is dm 101 route");
});

module.exports = router;
