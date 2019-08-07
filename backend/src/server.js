const express = require("express");
const server = express();
const routes = require("./routes");
const PORT = 3000;
const mongoose = require("./database/db");

server.use(express.json());
server.use(routes);

server.listen(PORT, () => {
    console.log(`server rodando na porta ${PORT}`);
});
