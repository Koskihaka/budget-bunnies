const pool = require('../config/db');

async function getSavings(userId) {
  const { rows } = await pool.query(
    `SELECT goal, saved FROM savings WHERE user_id = $1`,
    [userId]
  );
  if (rows.length) return rows[0];
  return { goal: 0, saved: 0 };
}

async function setGoal(userId, goal) {
  const { rows } = await pool.query(
    `INSERT INTO savings (user_id, goal, saved)
     VALUES ($1, $2, 0)
     ON CONFLICT (user_id)
     DO UPDATE SET goal = EXCLUDED.goal
     RETURNING goal, saved`,
    [userId, goal]
  );
  return rows[0];
}

module.exports = { getSavings, setGoal };
