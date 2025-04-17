const pool = require('../config/db');

async function getAll(userId) {
  const { rows } = await pool.query(
    `SELECT * FROM transactions
     WHERE user_id = $1
     ORDER BY date DESC`,
    [userId]
  );
  return rows;
}

async function create({ user_id, amount, category, date, description }) {
  const { rows } = await pool.query(
    `INSERT INTO transactions (user_id, amount, category, date, description)
     VALUES ($1,$2,$3,$4,$5)
     RETURNING *`,
    [user_id, amount, category, date, description]
  );
  return rows[0];
}

module.exports = { getAll, create };
