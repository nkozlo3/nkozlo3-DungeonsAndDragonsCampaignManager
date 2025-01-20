const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mainstats: { type: Object, required: true },
  description: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, required: true },
  savingthrows: { type: Object, default: {} },
  senses: { type: Object, default: {} },
  hitpoints: { type: Object, default: {} },
});

module.exports = mongoose.model("Player", PlayerSchema);
