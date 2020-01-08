const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const config = require("./utils/config");
const Count = require("./models/count");

const countRouter = require("./controllers/count");
const userRouter = require("./controllers/users");

app.use(cors);
app.use(bodyParser.json());

mongoose
  .connect(config.MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch(error => {
    console.log("error connection to MongoDB:", error.message);
  });

app.use("/api/count", countRouter);
app.use("/api/users", userRouter);

module.exports = app;
