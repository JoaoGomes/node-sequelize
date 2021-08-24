const express = require('express');
const clients = require("./src/controllers/ClientController");

const routes = express.Router();

routes.get("/clients", clients.findAll);

routes.get("/", (req, res) => {
	return res.send({ name: "Ciclano Fulano" });
});

module.exports = routes;
