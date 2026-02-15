import { useState } from 'react'    
import reactLogo from './assets/react.svg'            
import viteLogo from '/vite.svg'
import { Routes, Route} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import LandingPage from './pages/LandingPage'
import NavBar from './components/NavBar'

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App
 