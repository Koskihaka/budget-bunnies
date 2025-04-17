const express = require('express');
const router  = express.Router();
const ctrl    = require('../controllers/savings');

router.get('/',  ctrl.get);      // GET /api/savings
router.post('/', ctrl.setGoal);  // POST /api/savings { goal: number }

module.exports = router;
