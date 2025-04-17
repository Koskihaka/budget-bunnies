const Income = require('../models/incomes');

async function list(req, res, next) {
  try {
    const year  = parseInt(req.query.year, 10);
    const month = parseInt(req.query.month,10);
    const data  = await Income.getAll(req.user.id, year, month);
    res.json(data);
  } catch (err) {
    next(err);
  }
}

async function add(req, res, next) {
  try {
    const created = await Income.create({ user_id: req.user.id, ...req.body });
    res.status(201).json(created);
  } catch (err) {
    next(err);
  }
}

module.exports = { list, add };
