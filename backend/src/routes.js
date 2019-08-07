const express = require("express");
const routes = express.Router();
const devController = require("./controllers/DevControllers");

routes.post("/dev", devController.store);

module.exports = routes;
