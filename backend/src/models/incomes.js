const pool = require('../config/db');

async function getAll(userId, year, month) {
  const { rows } = await pool.query(
    `SELECT date, SUM(amount) AS amount
     FROM incomes
     WHERE user_id=$1
       AND EXTRACT(YEAR FROM date) = $2
       AND EXTRACT(MONTH FROM date)= $3
     GROUP BY date ORDER BY date`,
    [userId, year, month]
  );
  return rows;
}

async function create({ user_id, amount, category, date, description }) {
  const { rows } = await pool.query(
    `INSERT INTO incomes(user_id, amount, category, date, description)
     VALUES($1,$2,$3,$4,$5) RETURNING *`,
    [user_id, amount, category, date, description]
  );
  return rows[0];
}

module.exports = { getAll, create };
