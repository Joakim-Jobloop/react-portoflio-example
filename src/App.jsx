import './App.css'
import { Navbar } from './components/navigation/Navbar'

function App() {
const name = 'John Doe'

  return (
    <>
    <Navbar name={name}/>
    </>
  )
}

export default App
