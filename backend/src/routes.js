const express = require("express");
const routes = express.Router();

routes.get("/", (req, res) => {
    const {
        query: { name }
    } = req;

    return res.status(200).json({
        hello: name
    });
});

module.exports = routes;
