const Savings = require('../models/savings')

async function getSavings(req, res, next) {
  try {
    const data = await Savings.getSavings(req.user.id)
    res.json(data)
  } catch (err) {
    next(err)
  }
}

async function setGoal(req, res, next) {
  try {
    const data = await Savings.setGoal(req.user.id, req.body.goal)
    res.json(data)
  } catch (err) {
    next(err)
  }
}

async function addEntry(req, res, next) {
  try {
    const data = await Savings.addEntry({ user_id: req.user.id, ...req.body })
    res.status(201).json(data)
  } catch (err) {
    next(err)
  }
}

async function getEntries(req, res, next) {
  try {
    const data = await Savings.getAllEntries(req.user.id)
    res.json(data)
  } catch (err) {
    next(err)
  }
}

module.exports = {
  get: getSavings,
  setGoal,
  addEntry,
  getEntries
}