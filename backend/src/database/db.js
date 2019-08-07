const mongoose = require("mongoose");
const mongodbUri = `mongodb://@ds127843.mlab.com:27843/omnistack`;
const config = require("../config.js");

mongoose.connect(mongodbUri, {
    useNewUrlParser: true,
    config
});
const conn = mongoose.connection;
conn.on("error", console.error.bind(console, "Erro!:"));

conn.once("open", () => {
    console.log("conectado a database Mlab");
});

mongoose.Promise = global.Promise;

module.exports = mongoose;
