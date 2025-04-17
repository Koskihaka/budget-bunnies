const express = require('express');
const router  = express.Router();
const { register, login } = require('../controllers/auth');

// POST /api/auth/register  – body: { name, email, password }
router.post('/register', register);

// POST /api/auth/login     – body: { email, password }
router.post('/login', login);

module.exports = router;
