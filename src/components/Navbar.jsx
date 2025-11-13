import React, { useEffect, useState } from 'react'
import { Menu, Moon, Sun } from 'lucide-react'

export default function Navbar({ onToggleTheme, theme }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-40 transition-all ${scrolled ? 'backdrop-blur bg-white/60 dark:bg-black/40 shadow-soft-1' : 'bg-transparent'}`}
      aria-label="Primary Navigation">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="size-8 rounded-xl bg-gradient-to-br from-fuchsia-400 via-indigo-400 to-sky-400 shadow-soft-2" aria-hidden="true" />
          <span className="font-semibold tracking-tight">Auralyst AI</span>
        </a>
        <div className="hidden md:flex items-center gap-6" role="menubar">
          {['Features','Use Cases','Pricing','Blog','Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(/ /g,'-')}`} role="menuitem" className="text-sm text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors">{item}</a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button aria-label="Toggle theme" onClick={onToggleTheme} className="p-2 rounded-lg bg-white/60 dark:bg-white/5 shadow-soft-1 hover:shadow-soft-2 transition-all">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button aria-label="Open menu" className="md:hidden p-2 rounded-lg bg-white/60 dark:bg-white/5 shadow-soft-1" onClick={() => setOpen(!open)}>
            <Menu size={18} />
          </button>
          <a href="#pricing" className="hidden md:inline-block bg-gradient-to-br from-fuchsia-500 to-indigo-500 text-white px-4 py-2 rounded-xl shadow-soft-2 hover:scale-[1.02] active:scale-[0.98] transition-all will-change-transform">Get Started</a>
        </div>
      </nav>
      {open && (
        <div className="md:hidden border-t border-white/20 bg-white/70 dark:bg-black/50 backdrop-blur">
          <div className="max-w-7xl mx-auto px-4 py-4 grid gap-3">
            {['Features','Use Cases','Pricing','Blog','Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(/ /g,'-')}`} className="text-sm text-gray-700 dark:text-gray-200">{item}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
