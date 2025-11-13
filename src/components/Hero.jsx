import React, { useEffect, useRef } from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  const titleRef = useRef(null)

  useEffect(() => {
    // simple typewriter
    const el = titleRef.current
    const text = 'Premium AI customer experience, reimagined.'
    let i = 0
    const tick = () => {
      if (!el) return
      el.textContent = text.slice(0, i)
      i = i + 1
      if (i <= text.length) requestAnimationFrame(tick)
    }
    const id = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <section className="relative overflow-hidden pt-24 pb-20 sm:pt-28 sm:pb-28" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/80 dark:from-black/70 dark:via-black/60 dark:to-black/80" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 items-center gap-10">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 bg-white/70 dark:bg-white/5 border border-white/30 backdrop-blur shadow-soft-1">
            <span className="size-2 rounded-full bg-emerald-400 animate-pulse-soft" aria-hidden="true" />
            <span className="text-xs">Trusted by modern teams</span>
          </div>
          <h1 ref={titleRef} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight"></h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl">Automate voice, chat, and workflows with an AI that sounds human, feels helpful, and ships fast.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#pricing" className="group relative inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-indigo-500 text-white shadow-soft-2 transition-transform [transform-style:preserve-3d] hover:[transform:rotateX(6deg)_rotateY(-6deg)_translateZ(2px)] active:scale-[0.98]">
              <span className="relative z-10">Start free</span>
            </a>
            <a href="#case-studies" className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur border border-white/40 shadow-soft-1">See case studies</a>
          </div>
          <div className="flex items-center gap-6 opacity-80" aria-label="Trusted by logos">
            {['OpenAI','Stripe','Notion','Vercel','Shopify'].map((l) => (
              <span key={l} className="text-sm">{l}</span>
            ))}
          </div>
        </div>
        <div className="relative h-[440px] sm:h-[520px] lg:h-[560px] rounded-3xl bg-white/50 dark:bg-white/5 backdrop-blur border border-white/40 shadow-soft-2 overflow-hidden">
          <div className="absolute -top-12 -left-12 w-72 h-72 bg-gradient-to-br from-pastel.pink via-pastel.purple to-pastel.blue rounded-full blur-3xl opacity-60 animate-blob" aria-hidden="true" />
          <div className="absolute -bottom-10 -right-16 w-80 h-80 bg-gradient-to-br from-pastel.green to-pastel.blue rounded-full blur-3xl opacity-60 animate-blob [animation-delay:6s]" aria-hidden="true" />
          <img loading="lazy" alt="AI Dashboard preview" src="https://images.unsplash.com/photo-1646505463882-ca5853f7c0a4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBSSUyMERhc2hib2FyZCUyMHByZXZpZXd8ZW58MHwwfHx8MTc2MzA1MDY4MHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" className="relative w-full h-full object-cover mix-blend-multiply dark:mix-blend-normal" />
        </div>
      </div>
    </section>
  )
}
