const Dev = require("../models/Dev");

module.exports = {
    async store(req, res) {
        try {
            const { user } = req.headers;
            const { id } = req.params;

            const userLogged = await Dev.findById(user);
            const userFound = await Dev.findById(id);

            console.log(id, user);

            if (!user) {
                return res.status(400).send({
                    message: "User not found!"
                });
            }

            if (userFound.likes.includes(userLogged._id)) {
                console.log("DEU MATCH");
            }

            userLogged.likes.push(userFound._id);

            await userLogged.save();

            return res.status(200).send(userLogged);
        } catch (error) {
            return res.status(500).send({
                error
            });
        }
    }
};
