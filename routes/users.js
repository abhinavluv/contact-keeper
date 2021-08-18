const express = require('express');

const router = express.Router();

// @route   POST    api/users
// @desc    Register a User
// @access  Public
router.post('/', (request, response) => {
    response.send('Register a User');
});

module.exports = router;
