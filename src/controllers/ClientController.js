const Client = require("../models/Client");

module.exports = {
    async findAll(req, res) {
        try {
            const clients = await Client.findAll();
            return res.json(clients);
        } catch (err) {
            return res.status(400).json( { error: err.message });
        }
    },

    async show(req, res) {
        try{ 
            const client = await Client.findByPk(req.params.id);
            return res.json(client);
        } catch (err) {
            return res.status(400).json( { error: err.message });
        }
    },

    async store(req, res) {
        try{ 
            const client = await Client.create(req.body);
            return res.json(client);
        } catch (err) {
            return res.status(400).json( { error: err.message });
        }
    },

    async update(req, res) {
        try{ 
            const client = await Client.findByPk(req.params.id);
            await client.update(req.body);
            return res.json(client);
        } catch (err) {
            return res.status(400).json( { error: err.message });
        }
    },

    async destroy(req, res) {
        try{ 
            const client = await Client.findByPk(req.params.id);
            await client.destroy();
            return res.json();
        } catch (err) {
            return res.status(400).json( { error: err.message });
        }
    },

}