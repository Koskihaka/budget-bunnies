import { Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import IncomePage from './pages/IncomePage'
import ExpensePage from './pages/ExpensePage'
import SavingsPage from './pages/SavingsPage'
import ProtectedRoutes from './components/ProtectedRoute'
import Navbar from './components/Navbar'
import ProfilePage from './pages/ProfilePage'

export default function App() {
  return (
    <Routes>
      {/* Avoimet reitit */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<LoginPage register />} />

      {/* Suojatut reitit */}
      <Route path="/" element={<ProtectedRoutes />}>
        <Route
          index
          element={
            <>
              <Navbar />
              <DashboardPage />
            </>
          }
        />
        <Route
          path="tulot"
          element={
            <>
              <Navbar />
              <IncomePage />
            </>
          }
        />
        <Route
          path="menot"
          element={
            <>
              <Navbar />
              <ExpensePage />
            </>
          }
        />
        <Route
          path="saasto"
          element={
            <>
              <Navbar />
              <SavingsPage />
            </>
          }
        />
        <Route
          path="profiili"
          element={
            <>
              <Navbar />
              <ProfilePage />
            </>
          }
        />
        {/* Suojatun alueen virheellinen osoite -> Dashboard */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>

      {/* Kaikki muu ohjataan login-sivulle */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}
