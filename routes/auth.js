const express = require('express');

const router = express.Router();

// @route   GET    api/auth
// @desc    Get Loggedin User
// @access  Private
router.get('/', (request, response) => {
    response.send('Get Loggedin User');
});

// @route   POST    api/auth
// @desc    Auth User and get token
// @access  Public
router.post('/', (request, response) => {
    response.send('Login User');
});

module.exports = router;
