const pool = require('../config/db')

async function getAll(userId, year, month) {
  const { rows } = await pool.query(
    `SELECT id, amount, category, date, description
     FROM expenses
     WHERE user_id = $1
       AND EXTRACT(YEAR FROM date) = $2
       AND EXTRACT(MONTH FROM date) = $3
     ORDER BY date`,
    [userId, year, month]
  )
  return rows
}

async function create({ user_id, amount, category, date, description }) {
  const { rows } = await pool.query(
    `INSERT INTO expenses (user_id, amount, category, date, description)
     VALUES ($1, $2, $3, $4, $5)
     RETURNING *`,
    [user_id, amount, category, date, description]
  )
  return rows[0]
}

async function remove(user_id, id) {
  await pool.query(
    `DELETE FROM expenses
     WHERE id = $1 AND user_id = $2`,
    [id, user_id]
  )
}

module.exports = { getAll, create, remove }

