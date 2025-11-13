import React from 'react'

export default function Preloader() {
  return (
    <div role="status" aria-live="polite" className="fixed inset-0 z-50 grid place-items-center bg-white/80 dark:bg-black/80 backdrop-blur">
      <div className="relative size-16 rounded-full bg-gradient-to-br from-fuchsia-400 via-indigo-400 to-sky-400 animate-preloader shadow-soft-2">
        <span className="sr-only">Loading</span>
      </div>
    </div>
  )
}
