const Expense = require('../models/expenses');

async function list(req, res, next) {
  try {
    const year  = parseInt(req.query.year, 10);
    const month = parseInt(req.query.month,10);
    const data  = await Expense.getAll(req.user.id, year, month);
    res.json(data);
  } catch (err) {
    next(err);
  }
}

async function add(req, res, next) {
  try {
    const item = await Expense.create({ user_id: req.user.id, ...req.body });
    res.status(201).json(item);
  } catch (err) {
    next(err);
  }
}

module.exports = { list, add };
