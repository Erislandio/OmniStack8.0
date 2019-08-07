const express = require("express");
const routes = express.Router();
const devController = require("./controllers/DevControllers");
const likeController = require("./controllers/LikeController");
const desLikeController = require("./controllers/deslikeControllers");

routes.post("/dev", devController.store);
routes.get("/dev", devController.index);
routes.post("/dev/:id/like", likeController.store);
routes.post("/dev/:id/deslike", desLikeController.store);

module.exports = routes;
