const express = require("express");
const server = express();
const PORT = 3000;

server.get("/", (req, res) => {
    return res.status(200).send({
        ok: true
    });
});

server.listen(PORT, () => {
    console.log(`server rodando na porta ${PORT}`);
});
