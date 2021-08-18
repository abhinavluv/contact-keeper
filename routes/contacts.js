const express = require('express');

const router = express.Router();

// @route   GET    api/contacts
// @desc    Get All User's Contacts
// @access  Private
router.get('/', (request, response) => {
    response.send("Get User's Contacts");
});

// @route   POST    api/contacts
// @desc    Add new Contacts
// @access  Private
router.post('/', (request, response) => {
    response.send('Add Contact');
});

// @route   PUT    api/contacts/:id
// @desc    Update Contact
// @access  Private
router.put('/:id', (request, response) => {
    response.send('Update Contact');
});

// @route   DELETE    api/contacts/:id
// @desc    Delete Contact
// @access  Private
router.delete('/:id', (request, response) => {
    response.send('Delete Contact');
});

module.exports = router;
