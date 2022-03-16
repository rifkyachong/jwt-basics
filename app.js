// pre-process (all imports)
const express = require("express");
const connectDB = require("./database/connect");
require("dotenv").config();
require("express-async-error");
// const errorHandler = require("./middleware/error-handler");

// server metadata
const app = express();
const port = 8080;

// middleware
app.use(express.static("public"));
app.use(express.json());

// router

// catch-all
// appServer.use(errorHandler);

// start the server
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("Connected to database...");
    app.listen(port, console.log(`server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
