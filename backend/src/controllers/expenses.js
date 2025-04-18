const Expense = require('../models/expenses')

async function list(req, res, next) {
  try {
    const year  = parseInt(req.query.year, 10)
    const month = parseInt(req.query.month, 10)
    const data  = await Expense.getAll(req.user.id, year, month)
    res.json(data)
  } catch (err) {
    next(err)
  }
}

async function add(req, res, next) {
  try {
    const created = await Expense.create({ user_id: req.user.id, ...req.body })
    res.status(201).json(created)
  } catch (err) {
    next(err)
  }
}

async function remove(req, res, next) {
  try {
    const id = parseInt(req.params.id, 10)
    await Expense.remove(req.user.id, id)
    res.status(204).end()
  } catch (err) {
    next(err)
  }
}

module.exports = { list, add, remove }
