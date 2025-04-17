const express = require('express');
const router  = express.Router();
const ctrl    = require('../controllers/expenses');

router.get('/',  ctrl.list);   // /api/expenses?year=&month=
router.post('/', ctrl.add);    // body: { amount, category, date, description }

module.exports = router;
