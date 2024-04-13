const express = require('express');
const { userView } = require('../controllers/userController');

// Create an express router object
const router = express.Router();

// Handle the '/user' URL with a GET method to use studentView function
router.get('/user', userView);

// Export the router
module.exports = router;