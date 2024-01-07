const {
    users
} = require('../models');

const RegisterController = {
    create: async (req, res) => {
        const {
            username,
            email,
            password,
            address_user,
            phone_user
        } = req.body;
        try {
            const createUser = await users.create({
                username,
                email,
                password,
                address_user,
                phone_user,
            });
            const response = {
                data: {
                    // id: createUser.id,
                    username: createUser.username,
                    email: createUser.email,
                    // password: createUser.password,
                    address_user: createUser.address_user,
                    phone_user: createUser.phone_user
                    // Add other necessary fields
                }
            };
            res.status(201).json(response);
        } catch (err) {
            console.log('Error create users', err)
            res.status(500).send('Internal Server Error')
        }
    }
}

module.exports = RegisterController;