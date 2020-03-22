// import express
const express = require("express");
const helmet = require("helmet");
const CORS = require("cors");
const projectRouter = require("../projects/projects-router.js");
const resourceRouter = require("../resources/resources-router.js");
const taskRouter = require("../tasks/tasks-router.js");
//create a server
const server = express();
//teach server to read json
server.use(express.json());
server.use(helmet());
server.use(CORS());

server.use("/api/projects", projectRouter);
server.use("/api/resources", resourceRouter);
server.use("/api/tasks", taskRouter);

// get without routes
server.get("/", (req, res) => {
  res.send(`<hi>let the challenge begin</hi>`);
});

module.exports = server;
