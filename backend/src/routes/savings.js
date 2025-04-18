const express = require('express');
const router  = express.Router();
const ctrl    = require('../controllers/savings');

router.get('/',  ctrl.get);      // GET /api/savings
router.post('/', ctrl.setGoal);  // POST /api/savings { goal: number }
router.post('/entry', ctrl.addEntry)          // Lisää säästöerä
router.get('/entries', ctrl.getEntries)       // Hae kaikki säästöerät

module.exports = router;
