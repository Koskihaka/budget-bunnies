const express = require('express');
const router  = express.Router();
const ctrl    = require('../controllers/transactions');

router.get('/',  ctrl.list);   // /api/transactions?year=&month=
router.post('/', ctrl.add);    // body: { amount, category, date, description }

module.exports = router;
