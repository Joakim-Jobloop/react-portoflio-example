import './App.css'
import { Navbar } from './components/navigation/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { Footer } from './components/Footer'
import { AboutPage } from './pages/AboutPage'

function App() {
const name = 'John Doe'

  return (
    <>
    <Router>

    <Navbar/>

    <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/about' element={<AboutPage/>} />
      <Route path='/else' element={<h1>Something else</h1>} />
    </Routes>

    <Footer/>

    </Router>
    </>
  )
}

export default App
