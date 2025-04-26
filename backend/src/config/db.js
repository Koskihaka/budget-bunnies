// backend/src/config/db.js
require('dotenv').config();       // lataa .env
const { Pool } = require('pg');    // Pool luokka

const pool = new Pool({
  host:     process.env.DB_HOST,
  port:     Number(process.env.DB_PORT),
  user:     process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: {
    rejectUnauthorized: false,    // hyväksytään Azure SSL-sertifikaatti
  },
});

module.exports = pool;            // viet pool muille moduuleille
