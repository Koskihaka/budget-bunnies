const pool = require('../config/db');

// Palauttaa kirjautuneen käyttäjän tiedot
const getProfile = async (req, res) => {
  try {
    const { rows } = await pool.query(
      'SELECT id, name, email FROM users WHERE id = $1',
      [req.user.id]
    );

    const user = rows[0];

    if (!user) {
      return res.status(404).json({ error: 'Käyttäjää ei löydy' });
    }

    res.json(user);
  } catch (err) {
    console.error('Virhe profiilin haussa:', err);
    res.status(500).json({ error: 'Virhe haettaessa käyttäjätietoja' });
  }
};

// Päivittää kirjautuneen käyttäjän nimen ja sähköpostin
const updateProfile = async (req, res) => {
  const { name, email } = req.body;
  try {
    const { rows } = await pool.query(
      'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING id, name, email',
      [name, email, req.user.id]
    );

    const user = rows[0];

    if (!user) {
      return res.status(404).json({ error: 'Käyttäjää ei löydy' });
    }

    res.json({ message: 'Tiedot päivitetty', user });
  } catch (err) {
    console.error('Virhe profiilin päivityksessä:', err);
    res.status(500).json({ error: 'Virhe päivitettäessä tietoja' });
  }
};

module.exports = {
  getProfile,
  updateProfile
};