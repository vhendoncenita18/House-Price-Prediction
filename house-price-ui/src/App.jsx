import { useState } from 'react'    
import reactLogo from './assets/react.svg'            
import viteLogo from '/vite.svg'
import { Routes, Route} from 'react-router-dom'
import LoginPage from './pages/auth/LoginPage' 
import LandingPage from './pages/public/LandingPage'
import NavBar from './components/NavBar'
import MainLayout from './layout/MainLayout'
import Predict from './pages/public/Predict'
import History from './pages/public/History'
import Dashboard from './pages/public/Dashboard'
import HousePage from './pages/public/HousePage'

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/predict" element={<Predict />}/>
          <Route path="/history" element={<History />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/houses" element={<HousePage />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
 