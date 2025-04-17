const express = require('express');
const router  = express.Router();
const ctrl    = require('../controllers/incomes');

router.get('/',  ctrl.list);   // /api/incomes?year=2025&month=4
router.post('/', ctrl.add);    // { amount, category, date, description }

module.exports = router;
