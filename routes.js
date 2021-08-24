const express = require('express');
const clients = require("./src/controllers/ClientController");

const routes = express.Router();

routes.get("/clients", clients.findAll);
routes.get("/clients/:id", clients.show);
routes.post("/clients", clients.store);
routes.put("/clients/:id", clients.update);
routes.delete("/clients/:id", clients.destroy);


routes.get("/", (req, res) => {
	return res.send({ name: "Ciclano Fulano" });
});

module.exports = routes;
