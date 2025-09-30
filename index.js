require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const Event = require("./routes/event");
const { ConnectDB } = require("./connection");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", Event);
app.use("/url", Event);

// Use environment variable for DB connection
ConnectDB(process.env.MONGO_URL);

app.listen(3000, () => {
  console.log("Server is running");
});
