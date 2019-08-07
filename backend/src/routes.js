const express = require("express");
const routes = express.Router();
const devController = require("./controllers/DevControllers");

routes.post("/dev", devController.store);
routes.get("/dev", devController.index);

module.exports = routes;
