import './App.css'
import { Navbar } from './components/navigation/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { Footer } from './components/Footer'

function App() {
const name = 'John Doe'

  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/about' element={<h1>About</h1>} />
    </Routes>
    <Footer/>
    </Router>
    </>
  )
}

export default App
