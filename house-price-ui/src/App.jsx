import { useState } from 'react'    
import reactLogo from './assets/react.svg'            
import viteLogo from '/vite.svg'
import LandingPage from './pages/LandingPage'
import NavBar from './components/NavBar'

function App() {
  return (
    <>
      <NavBar />
      <LandingPage />  
    </>
  );
}

export default App
