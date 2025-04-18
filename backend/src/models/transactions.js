const pool = require('../config/db')

// Lisää yksi tapahtuma
async function create({ user_id, amount, date, category }) {
  const { rows } = await pool.query(
    `INSERT INTO transactions (user_id, amount, date, category)
     VALUES ($1, $2, $3, $4)
     RETURNING id, user_id, amount, date, category`,
    [user_id, amount, date, category]
  )
  return rows[0]
}

// Hakee kaikki tapahtumat kuukauden ajalta käyttäjälle
async function getAllByMonth(userId, year, month) {
  const { rows } = await pool.query(
    `SELECT id, amount, date
     FROM transactions
     WHERE user_id = $1
       AND EXTRACT(YEAR FROM date) = $2
       AND EXTRACT(MONTH FROM date) = $3
     ORDER BY date`,
    [userId, year, month]
  )
  return rows
}

module.exports = {
  create,
  getAllByMonth
}
