const crypto = require("crypto");

const keyPair = crypto.generateKeyPairSync("ed25519");

module.exports = keyPair;
