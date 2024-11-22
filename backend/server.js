// Express application
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.error(error));

const playerRoute = require("./routes/Player");
app.use("/players", playerRoute);

app.get("/", (req, res) => {
  res.send("Hello World");
});

const port = process.env.PORT || 5500;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
