const Income = require('../models/incomes')

// Listaa kirjautuneen käyttäjän tulot tietylle kuukaudelle
async function list(req, res, next) {
  try {
    const year  = parseInt(req.query.year, 10)
    const month = parseInt(req.query.month, 10)

    const data = await Income.getAll(req.user.id, year, month)
    res.json(data)
  } catch (err) {
    next(err)
  }
}

// Lisää uuden tulon kirjautuneelle käyttäjälle
async function add(req, res, next) {
  try {
    const { name, amount, date } = req.body

    if (!name || !amount || !date) {
      return res.status(400).json({ error: 'name, amount ja date vaaditaan' })
    }

    const created = await Income.create({
      user_id: req.user.id,
      name,
      amount,
      date,
      description: req.body.description || ''
    })

    res.status(201).json(created)
  } catch (err) {
    next(err)
  }
}
async function remove(req, res, next) {
  try {
    await Income.remove(req.user.id, req.params.id)
    res.json({ success: true })
  } catch (err) {
    next(err)
  }
}
module.exports = { list, add, remove }
