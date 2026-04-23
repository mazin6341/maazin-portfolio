import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectDetail from './components/ProjectDetail'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

function ScrollToHash() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const el = document.querySelector(hash)
    el?.scrollIntoView()
  }, [hash])

  return null
}

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <div className="min-h-screen">
          <ScrollToHash />
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
