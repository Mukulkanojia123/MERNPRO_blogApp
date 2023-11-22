
const express = require('express');
// taling routes from expresss
const router = express.Router();

// import controllers 
const authController = require('../controllers/auth')

router.post('/login',authController.login);
router.post('/register',authController.register);
router.post('/login',authController.logout);



module.exports = router;