import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/auth/LoginPage';
import LandingPage from './pages/public/LandingPage';
import MainLayout from './layout/MainLayout';
import Predict from './pages/public/Predict';
import History from './pages/public/History';
import Dashboard from './pages/public/Dashboard';
import HousePage from './pages/public/HousePage';
import SignupPage from './pages/auth/SignupPage';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';

function App() {
  return (
    <Routes>
      <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        /><Route
          path="/signup"
          element={
            <PublicRoute>
              <SignupPage />
            </PublicRoute>
          }
        />

      
      <Route element={<MainLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/predict" element={<Predict />} />
        <Route path="/history" element={<History />} />
        <Route path="/houses" element={<HousePage />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
