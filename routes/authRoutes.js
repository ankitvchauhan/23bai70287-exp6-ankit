const express = require('express');
const router = express.Router();

const { login, protected } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

// Public route
router.post('/login', login);

// Protected route
router.get('/protected', authMiddleware, protected);

module.exports = router;