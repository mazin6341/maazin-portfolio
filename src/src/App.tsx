import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectDetail from './components/ProjectDetail'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <div className="min-h-screen">
          <Navbar />
          <Hero />
          <Work />
          <Skills />
          <Contact />
          <Footer />
        </div>
      } />

      <Route path="/work/:id" element={
        <ProjectDetail />
      } />
    </Routes>
  )
}

export default App
