const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController");


router.post('/register', userController.registerUser);
router.get('/verify-email', userController.verifyEmail);
router.post('/login', userController.login);
router.post('/logout', userController.logout);

module.exports = router;
