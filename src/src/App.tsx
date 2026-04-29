import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectDetail from './components/ProjectDetail'
import { Helmet } from 'react-helmet-async'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
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
          <Helmet>
            <title>Maazin — Full-stack Developer</title>
            <meta name="description" content="Portfolio of Maazin, a full-stack developer building production systems with Laravel, Livewire, React, and TypeScript." />
            <meta property="og:title" content="Maazin — Full-stack Developer" />
            <meta property="og:description" content="Portfolio of Maazin, a full-stack developer building production systems with Laravel, Livewire, React, and TypeScript." />
            <meta property="og:url" content="https://maazin.velotical.com" />
            <meta property="og:type" content="website" />
            <link rel="canonical" href="https://maazin.velotical.com" />
          </Helmet>
          
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

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
