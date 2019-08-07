const Dev = require("../models/Dev");
const axios = require("axios");

module.exports = {
    async store(req, res) {
        const {
            body: { username }
        } = req;

        try {
            const userExists = await Dev.findOne({ user: username });
            if (userExists) {
                return res.status(200).send(userExists);
            }

            const {
                data: { bio, avatar_url, name }
            } = await axios.get(`https://api.github.com/users/${username}`);

            const dev = await Dev.create({
                name,
                user: username,
                bio,
                avatar: avatar_url
            });

            return res.status(200).send(dev);
        } catch (error) {
            return res.status(500).send({
                error
            });
        }
    },

    async index(req, res) {
        try {
            const devs = await Dev.find();

            return res.status(200).send(devs);
        } catch (error) {
            return res.status(500).send({
                error
            });
        }
    }
};
