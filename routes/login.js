const express = require('express');
const router = express.Router();
const LoginController = require('../controllers/LoginController')


/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post('/', LoginController.post)

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