// import express
const express = require("express");
//import all dependencies
const helmet = require("helmet");
const CORS = require("cors");

//create a server
const server = express();
//teach server to read json
server.use(express.json());
//other stuff
server.use(helmet());
server.use(CORS());
//bring in the router
// const characterRouter = require("../characters/charactersRouter");

// server.use("api/router",characterRouter );

// get without routes
server.get("/", (req, res) => {
  res.send(`<hi>let the challenge begin</hi>`);
});

module.exports = server;
