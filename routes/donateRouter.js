const express = require("express");
const donateRouter = express.Router();

donateRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end("Will send the donation info to you");
  })
  .post((req, res) => {
    res.end(
      `Will update the donation type: ${req.body.name} with: ${req.body.description}`
    );
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /about");
  })
  .delete((req, res) => {
    res.end(`Deleting the donation type: ${req.body.name}`);
  });

module.exports = donateRouter;
