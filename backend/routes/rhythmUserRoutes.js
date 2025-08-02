const express = require('express');
const router = express.Router();
const { createUser, loginUser, getUser, updateUser, deleteUser } = require('../controllers/rhythmUserController');

// Routes
router.post('/register', createUser);      // Register user
router.post('/login', loginUser);          // Login user
router.get('/all', getUser);               // Get all users
router.put('/:userId', updateUser);        // Update user
router.delete('/:userId', deleteUser);     // Delete user

module.exports = router;
