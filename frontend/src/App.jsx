import { Routes, Route, Navigate } from 'react-router-dom'
import LoginPage       from './pages/LoginPage'
import DashboardPage   from './pages/DashboardPage'
import IncomePage      from './pages/IncomePage'
import ExpensePage     from './pages/ExpensePage'
import SavingsPage     from './pages/SavingsPage'
import ProtectedRoutes from './components/ProtectedRoute'

export default function App() {
  return (
    <Routes>
      {/* Avoimet reitit */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<LoginPage register />} />

      {/* Suojatut reitit */}
      <Route path="/" element={<ProtectedRoutes />}>
        {/* Dashboard kun URL on täsmälleen "/" */}
        <Route index element={<DashboardPage />} />

        {/* Muut välilehdet relatiivisilla poluilla */}
        <Route path="tulot" element={<IncomePage />} />
        <Route path="menot" element={<ExpensePage />} />
        <Route path="saasto" element={<SavingsPage />} />

        {/* Jos suojattuun alueeseen mennään väärällä polulla, ohjataan takaisin Dashboardiin */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>

      {/* Kaikki muut reitit ohjataan login‑sivulle */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}
