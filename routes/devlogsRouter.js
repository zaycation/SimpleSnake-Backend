const express = require("express");
const devlogsRouter = express.Router();

devlogsRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end("Will send the most recent dev logs to you");
  })
  .post((req, res) => {
    res.end(
      `Will add the dev log: ${req.body.name} with description: ${req.body.description}`
    );
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /devlogs");
  })
  .delete((req, res) => {
    res.end(
      `Deleting the dev log: ${req.body.name} with description: ${req.body.description}`
    );
  });

module.exports = devlogsRouter;
