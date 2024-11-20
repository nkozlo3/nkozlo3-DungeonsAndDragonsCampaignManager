// Express application
require("dotenv").config();
const express = require("express");
const app = express();

// Connect to MongoDB
const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => console.log("Connected to mongo database"))
  .catch((err) => console.log(err));

// default page
app.get("/", (req, res) => {
  res.send("<h1>Hello, World!</h1>");
});

app.get("/first/message", (req, res) => {
  res.send("Hello, Frontend 😍 Backend!");
});

const dmRoute = require("./routes/dm");

app.use("/dm", dmRoute);

const port = process.env.PORT || 5500;

app.listen(port, () => {
  console.log(`Server is running on port ${port}$`);
});
