const Tx = require('../models/transactions')

// Listaa kirjautuneen käyttäjän kaikki tapahtumat tietylle kuukaudelle
async function list(req, res, next) {
  try {
    const userId = req.user.id
    const { year, month } = req.query

    if (!year || !month) {
      return res.status(400).json({ error: 'year ja month puuttuvat' })
    }

    const data = await Tx.getAllByMonth(userId, year, month)
    res.json(data)
  } catch (err) {
    next(err)
  }
}

// Lisää uuden tapahtuman kirjautuneelle käyttäjälle
async function add(req, res, next) {
  try {
    const { amount, date } = req.body

    if (amount === undefined || amount === null || date === undefined || date === null) {
      return res.status(400).json({ error: 'amount ja date vaaditaan' })
    }

    const newTx = await Tx.create({
      user_id: req.user.id,
      amount,
      date,
      category: 'muut'  // ← lisätään oletus
    })

    res.status(201).json(newTx)
  } catch (err) {
    next(err)
  }
}

module.exports = { list, add }
