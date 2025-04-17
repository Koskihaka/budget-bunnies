const Tx = require('../models/transactions');

async function list(req, res, next) {
  try {
    // tässä voisi olla JWT‑auth, mutta testivaiheessa hardkoodataan user_id
    const data = await Tx.getAll(req.query.user_id || 1);
    res.json(data);
  } catch (err) {
    next(err);
  }
}

async function add(req, res, next) {
  try {
    const newTx = await Tx.create(req.body);
    res.status(201).json(newTx);
  } catch (err) {
    next(err);
  }
}

module.exports = { list, add };
