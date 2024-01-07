const {
    users
} = require('../models');

// async function get() {
//     const getUser = await users.findAll();
//     const response = {
//         data: getUser.map(item => {
//             return {
//                 ...item
//             }
//         })
//     }
//     return response
// }
// async function get() {
//     try {
//         const getUser = await users.findAll();
//         res.status(200).json(getUser);
//     } catch (err) {
//         console.log('Error getting users', err)
//         res.status(500).send('Internal Server Error')
//     }
// }

// module.exports = {
//     get
// }

const UserController = {
    get: async (req, res) => {
        try {
            const getUser = await users.findAll();
            const userLength = await users.count();
            const response = {
                total: userLength,
                data: getUser.map(item => {
                    return {
                        ...item.dataValues
                    }
                })
            }
            res.status(200).json(response);
        } catch (err) {
            console.log('Error getting users', err)
            res.status(500).send('Internal Server Error')
        }
    }
}

module.exports = UserController;