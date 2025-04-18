const pool = require('../config/db')

// Palauttaa tavoitteen ja kertyneen summan
async function getSavings(userId) {
  const goalResult = await pool.query(
    `SELECT goal FROM savings WHERE user_id = $1`,
    [userId]
  )

  const entriesResult = await pool.query(
    `SELECT COALESCE(SUM(amount), 0) AS saved FROM savings_entries WHERE user_id = $1`,
    [userId]
  )

  const goal = goalResult.rows[0]?.goal || 0
  const saved = entriesResult.rows[0]?.saved || 0
  return { goal, saved }
}

// Asettaa tai päivittää tavoitteen
async function setGoal(userId, goal) {
  const { rows } = await pool.query(
    `INSERT INTO savings (user_id, goal)
     VALUES ($1, $2)
     ON CONFLICT (user_id)
     DO UPDATE SET goal = EXCLUDED.goal
     RETURNING goal`,
    [userId, goal]
  )
  return { goal: rows[0].goal, saved: (await getSavings(userId)).saved }
}

// Lisää säästöerän
async function addEntry({ user_id, amount, date, description }) {
  const { rows } = await pool.query(
    `INSERT INTO savings_entries (user_id, amount, date, description)
     VALUES ($1, $2, $3, $4)
     RETURNING *`,
    [user_id, amount, date, description]
  )
  return rows[0]
}

// Palauttaa kaikki säästöerät
async function getAllEntries(userId) {
  const { rows } = await pool.query(
    `SELECT * FROM savings_entries WHERE user_id = $1 ORDER BY date DESC`,
    [userId]
  )
  return rows
}

module.exports = { getSavings, setGoal, addEntry, getAllEntries }
