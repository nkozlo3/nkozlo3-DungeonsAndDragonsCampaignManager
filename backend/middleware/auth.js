const paseto = require("paseto");

const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "No token provided" });

  try {
    const payload = await paseto.verify(token, "your_paseto_secret");
    req.userId = payload.userId;
    next();
  } catch (error) {
    res.status(401).json({ error: "invalid token" });
  }
};

module.exports = authMiddleware;
