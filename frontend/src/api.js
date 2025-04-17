const API_BASE = import.meta.env.VITE_API_BASE;

// Autentikoidut kutsut: lisätään aina Bearer‑token
function authFetch(path, options = {}) {
  const token = localStorage.getItem('token');
  return fetch(API_BASE + path, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  });
}

// ————— Auth —————

// Rekisteröinti
export async function registerUser({ name, email, password }) {
  const res = await fetch(API_BASE + '/api/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password }),
  });
  return res.json();
}

// Kirjautuminen
export async function loginUser({ email, password }) {
  const res = await fetch(API_BASE + '/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  return res.json();
}

// ————— Transactions —————

export async function fetchTransactions(year, month) {
  const res = await authFetch(`/api/transactions?year=${year}&month=${month}`);
  return res.json();
}

// ————— Incomes —————

export async function fetchIncomes(year, month) {
  const res = await authFetch(`/api/incomes?year=${year}&month=${month}`);
  return res.json();
}

export async function createIncome({ amount, category, date, description }) {
  const res = await authFetch('/api/incomes', {
    method: 'POST',
    body: JSON.stringify({ amount, category, date, description }),
  });
  return res.json();
}

// ————— Expenses —————

export async function fetchExpenses(year, month) {
  const res = await authFetch(`/api/expenses?year=${year}&month=${month}`);
  return res.json();
}

export async function createExpense({ amount, category, date, description }) {
  const res = await authFetch('/api/expenses', {
    method: 'POST',
    body: JSON.stringify({ amount, category, date, description }),
  });
  return res.json();
}

// ————— Savings —————

export async function fetchSavings() {
  const res = await authFetch('/api/savings');
  return res.json(); // { goal, saved }
}

export async function setSavingsGoal({ goal }) {
  const res = await authFetch('/api/savings', {
    method: 'POST',
    body: JSON.stringify({ goal }),
  });
  return res.json();
}
