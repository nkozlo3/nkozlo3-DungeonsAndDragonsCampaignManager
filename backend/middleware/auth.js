const paseto = require("paseto");
const crypto = require("crypto");

const keyPair = require("../utils/keys");

const authMiddleware = async (req, res, next) => {
  if (!req.headers.authorization?.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Invalid authorization format" });
  }

  const token = req.headers.authorization.split(" ")[1];

  console.log("authmiddleware token: ", token);
  if (!token) return res.status(401).json({ error: "No token provided" });

  try {
    const payload = await paseto.V2.verify(token, keyPair.publicKey);
    console.log("token verified");
    req.userId = payload.userId;
    console.log("userId: ", req.userId);
    next();
  } catch (error) {
    console.log("ARe we breaking in auth??");
    console.error("Auth error:", error.message);
    res.status(401).json({ error: "invalid tokenReee" });
  }
};

module.exports = authMiddleware;
