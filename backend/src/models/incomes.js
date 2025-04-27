const pool = require('../config/db')

// Hakee kaikki tulot kirjautuneelle käyttäjälle tietyltä kuukaudelta
async function getAll(userId, year, month) {
  const { rows } = await pool.query(
    `SELECT id, amount, name, date, description
     FROM incomes
     WHERE user_id=$1
       AND EXTRACT(YEAR FROM date) = $2
       AND EXTRACT(MONTH FROM date)= $3
     GROUP BY date ORDER BY date`,
    [userId, year, month]
  )
  return rows
}

// Lisää uusi tulo tietokantaan
async function create({ user_id, amount, name, date, description }) {
  const { rows } = await pool.query(
    `INSERT INTO incomes(user_id, amount, name, date, description)
     VALUES($1, $2, $3, $4, $5)
     RETURNING *`,
    [user_id, amount, name, date, description]
  )
  return rows[0]
}

async function remove(user_id, id) {
  await pool.query(`DELETE FROM incomes WHERE id = $1 AND user_id = $2`, [id, user_id])
}
module.exports = { getAll, create, remove }
