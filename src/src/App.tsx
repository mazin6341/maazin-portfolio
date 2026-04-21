import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <div className="min-h-screen">
          <Navbar />
          <Hero />
        </div>
      } />
    </Routes>
  )
}

export default App
