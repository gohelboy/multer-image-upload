const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/userRoutes");
const PORT = 5000;

app.use("/public", express.static("public"));
app.use(cors());
app.use(express.json());

app.use("/user", userRoutes);

app.get("/", (req, res) => {
  res.send("Server Online");
  console.log("Server Online");
});

mongoose.set("strictQuery", false);
mongoose.connect(
  process.env.MONGO_URL,
  {
    dbName: process.env.DB_NAME,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, db) => {
    if (err) res.send(err);
    console.log("Database Connected");
  }
);

app.listen(PORT, (req, res) => {
  console.log("server listening on PORT " + PORT);
});
