import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Preloader from './components/Preloader'
import { Features, UseCasesTabs, Stats, CaseStudies, Pricing, Comparison, Testimonials, Integrations, Blog, Contact, Footer } from './components/Sections'
import './index.css'

function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const id = setTimeout(() => setLoading(false), 800)
    return () => clearTimeout(id)
  }, [])

  useEffect(() => {
    const metaTitle = document.querySelector('title')
    if (metaTitle) metaTitle.textContent = 'Auralyst AI – Premium AI SaaS Landing'
    const desc = document.querySelector('meta[name="description"]')
    if (!desc) {
      const m = document.createElement('meta')
      m.name = 'description'
      m.content = 'Launch AI agents faster. Voice, chat, workflows and analytics in one beautiful platform.'
      document.head.appendChild(m)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-pastel.pink via-pastel.blue to-pastel.purple text-gray-900 dark:text-gray-100">
      {loading && <Preloader />}
      <Navbar theme={theme} onToggleTheme={() => setTheme(theme==='dark'?'light':'dark')} />
      <main>
        <Hero />
        <Features />
        <Stats />
        <UseCasesTabs />
        <CaseStudies />
        <Pricing />
        <Comparison />
        <Testimonials />
        <Integrations />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
