const {
    users,
    sequelize
} = require('../models');
const {
    QueryTypes
} = require('sequelize');

const LoginController = {
    post: async (req, res) => {
        const {
            username,
            password
        } = req.body
        try {
            // const findUser = await users.findAll(user => user.username === username && user.password === password);
            // const findUser = await users.findAll()
            const findUser = await sequelize.query("SELECT * FROM users WHERE username = :username and password = :password", {
                replacements: {
                    username: username,
                    password: password
                },
                type: QueryTypes.SELECT
            })
            console.log(findUser.length)
            // const userLength = await findUser.count();
            // console.log(userLength)
            if (findUser.length != 0) {
                res.status(200).json({
                    message: "Login successful"
                })
            } else {
                res.status(401).json({
                    message: "Invalid credentials"
                })
            }
        } catch (err) {
            console.log('Error getting users', err)
            res.status(500).send('Internal Server Error')
        }
    }
}

module.exports = LoginController;