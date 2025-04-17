// backend/src/controllers/auth.js
const bcrypt = require('bcrypt');
const jwt    = require('jsonwebtoken');
const User   = require('../models/users');

async function register(req, res, next) {
  try {
    const { name, email, password } = req.body;

    // 1) Tarkista, onko email jo varattu
    const existing = await User.getUserByEmail(email);
    if (existing) {
      return res.status(400).json({ message: 'Sähköposti on jo käytössä' });
    }

    // 2) Hashaa salasana ja luo käyttäjä
    const hash = await bcrypt.hash(password, 10);
    const user = await User.createUser({ name, email, password: hash });

    // 3) Generoi token ja palautus
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
    res.json({ token });

  } catch (err) {
    next(err);
  }
}

async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    const user = await User.getUserByEmail(email);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Virheellinen tunnus tai salasana' });
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
    res.json({ token });
  } catch (err) {
    next(err);
  }
}

module.exports = { register, login };
