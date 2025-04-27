require('dotenv').config();
const express = require('express');
const cors    = require('cors');
const jwt     = require('jsonwebtoken');
const pool    = require('./config/db');

const authRouter = require('./routes/auth');
const userRouter = require('./routes/users');
const txRouter   = require('./routes/transactions');
const incRouter  = require('./routes/incomes');
const expRouter  = require('./routes/expenses');
const savRouter  = require('./routes/savings');

const app = express();

app.use(cors({
  origin: 'https://lemon-plant-09e01f603.6.azurestaticapps.net',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));


app.use(express.json());

// ——— 1) Health‑endpoint ennen kaikkea muuta ———
app.get('/health', (_req, res) => res.json({ status: 'OK' }));

// ——— 2) Auth‑reitit (login/register) ennen tokenia ———
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);

// ——— 3) JWT‑middleware — ohitetaan /health ja /api/auth ———
app.use((req, res, next) => {
  if (req.path === '/health' || req.path.startsWith('/api/auth')) {
    return next();
  }
  const header = req.headers.authorization;
  if (!header) {
    return res.status(401).json({ message: 'Token puuttuu' });
  }
  const token = header.split(' ')[1];
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ message: 'Virheellinen token' });
  }
});

// ——— 4) Suojatut domain‑reitit ———
app.use('/api/user',        userRouter);
app.use('/api/transactions', txRouter);
app.use('/api/incomes',      incRouter);
app.use('/api/expenses',     expRouter);
app.use('/api/savings',      savRouter);

// ——— 5) Käynnistys ———
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✨ Server listening on http://localhost:${PORT}`);
});