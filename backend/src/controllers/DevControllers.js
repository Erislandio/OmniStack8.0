const Dev = require("../models/Dev");

module.exports = {
    async store(req, res) {
        const { body } = req;
        try {
            const dev = await Dev.create(body);

            return res.status(200).send(dev);
        } catch (error) {
            return res.status(500).send({
                error
            });
        }
    }
};
