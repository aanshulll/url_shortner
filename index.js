require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const Event = require("./routes/event");
const home = require("./routes/static")
const users = require("./routes/userAuth")
const { ConnectDB } = require("./connection");
const path = require("path");
const cookieParser = require("cookie-parser");

const {isAuthenticated,checkAuth} = require("./middlewares/auth")
const app = express();
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

// Use environment variable for DB connection
ConnectDB(process.env.MONGO_URL);

//routes
app.use("/",checkAuth,users);
app.use("/url",isAuthenticated, Event);
app.use("/",checkAuth,home )



app.listen(3000, () => {
  console.log("Server is running");
});
