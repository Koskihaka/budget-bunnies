const express = require('express');
const router  = express.Router();
const ctrl    = require('../controllers/incomes');

router.get('/',  ctrl.list); 
router.post('/', ctrl.add);   
router.delete('/:id', ctrl.remove)

module.exports = router;
