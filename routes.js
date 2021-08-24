const express = require('express');
const routes = express.Router();

routes.get("/", (req, res) => {
	return res.send({ name: "Ciclano Fulano" });
});

module.exports = routes;
