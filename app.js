// pre-process (all imports)
require("dotenv").config();
require("express-async-error");
const express = require("express");
const connectDB = require("./database/connect");
const main = require("./router/main");
const errorHandler = require("./middleware/error-handler");
const notFound = require("./middleware/not-found");

// server metadata
const app = express();
const port = process.env.PORT || 8081;

// middleware
app.use(express.static("public"));
app.use(express.json());

// routes
app.use("/api/v1", main);

// error handler & not found
app.use(notFound);
app.use(errorHandler);

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
