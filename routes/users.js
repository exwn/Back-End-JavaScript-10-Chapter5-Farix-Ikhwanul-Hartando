const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController')


/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', UserController.get)

// router.get('/', async (req, res) => {
//   try {
//     const response = await get();
//     res.json(response);
//   } catch (error) {
//     console.error('Error in get route:', error);
//     res.status(500).send('Internal Server Error');
//   }
// });


module.exports = router;