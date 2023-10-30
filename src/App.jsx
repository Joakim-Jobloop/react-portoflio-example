import './App.css'
import { Navbar } from './components/navigation/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'

import { AboutPage } from './pages/AboutPage'
import { Footer } from './components/Footer'
import { useState } from 'react'
import { ScoreBoard } from './pages/Scoreboard'

function App() {
  const name = 'John Doe'



  return (
    <>
      <Router>

        <Navbar />

        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/scoreboard' element={<ScoreBoard/>} />
        </Routes>

        <Footer />

      </Router>
    </>
  )
}

export default App
