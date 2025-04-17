const Savings = require('../models/savings');

async function get(req, res, next) {
  try {
    const s = await Savings.getSavings(req.user.id);
    res.json(s);
  } catch (err) {
    next(err);
  }
}

async function setGoal(req, res, next) {
  try {
    const { goal } = req.body;
    const s = await Savings.setGoal(req.user.id, goal);
    res.json(s);
  } catch (err) {
    next(err);
  }
}

module.exports = { get, setGoal };
