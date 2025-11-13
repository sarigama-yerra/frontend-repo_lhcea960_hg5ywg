import React, { useEffect, useRef, useState } from 'react'

function useReveal(threshold = 0.15) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('animate-fade-up')
          obs.unobserve(e.target)
        }
      })
    }, { threshold })
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return ref
}

export function Features() {
  const ref = useReveal()
  const features = [
    { title: 'Voice Agents', desc: 'Natural, human-like calls with real-time tools.', icon: '🎙️' },
    { title: 'Chat Automation', desc: 'Resolve tickets and deflect with precision.', icon: '💬' },
    { title: 'Workflows', desc: 'Drag-and-drop builders to ship faster.', icon: '🧩' },
    { title: 'Analytics', desc: 'Understand intent, measure quality, improve.', icon: '📈' },
    { title: 'Security', desc: 'SOC2-ready, SSO, audit logs and RBAC.', icon: '🔒' },
    { title: 'Integrations', desc: 'Plug into your stack in minutes.', icon: '🔌' },
  ]
  return (
    <section id="features" ref={ref} className="py-20 sm:py-24 bg-gradient-to-b from-transparent to-pastel.blue/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Product features</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">Everything you need to launch an AI assistant your customers love.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="p-6 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur border border-white/40 shadow-soft-1 hover:shadow-soft-2 transition-shadow">
              <div className="text-2xl">{f.icon}</div>
              <h3 className="mt-3 font-semibold">{f.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function UseCasesTabs() {
  const [tab, setTab] = useState('support')
  const items = {
    support: 'Automate tier-1 tickets and triage complex issues for agents.',
    sales: 'Qualify leads, book meetings, and personalize outreach.',
    operations: 'Handle routine tasks, verifications, and status updates.',
  }
  return (
    <section id="use-cases" className="py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">AI use cases</h2>
        <div className="mt-6 inline-flex rounded-xl p-1 bg-white/70 dark:bg-white/5 border border-white/40 backdrop-blur">
          {Object.keys(items).map((k) => (
            <button key={k} onClick={() => setTab(k)} className={`px-4 py-2 rounded-lg text-sm ${tab===k?'bg-gradient-to-br from-fuchsia-500 to-indigo-500 text-white shadow-soft-2':'text-gray-700 dark:text-gray-300'}`}>{k}</button>
          ))}
        </div>
        <div className="mt-6 p-6 rounded-2xl bg-white/70 dark:bg-white/5 border border-white/40 backdrop-blur shadow-soft-1">
          <p className="text-gray-700 dark:text-gray-300">{items[tab]}</p>
        </div>
      </div>
    </section>
  )
}

export function Stats() {
  const ref = useReveal()
  const stats = [
    { label: 'CSAT Lift', value: '+32%' },
    { label: 'Resolution Rate', value: '92%' },
    { label: 'Cost Savings', value: '45%' },
    { label: 'Time to launch', value: '3 days' },
  ]
  return (
    <section ref={ref} className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="p-6 rounded-2xl bg-white/70 dark:bg-white/5 border border-white/40 backdrop-blur shadow-soft-1 text-center">
            <div className="text-2xl font-bold">{s.value}</div>
            <div className="text-xs text-gray-600 dark:text-gray-300">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 sm:py-24 bg-gradient-to-b from-pastel.blue/40 to-pastel.purple/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Case studies</h2>
        <div className="mt-8 overflow-x-auto [scroll-snap-type:x_mandatory] flex gap-6 pb-4" aria-label="Customer stories">
          {[1,2,3,4].map((i) => (
            <article key={i} className="min-w-[320px] sm:min-w-[420px] scroll-snap-align-start p-6 rounded-2xl bg-white/70 dark:bg-white/5 border border-white/40 backdrop-blur shadow-soft-1">
              <h3 className="font-semibold">How Brand {i} scaled support</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Reduced handle time by 48% with AI automations connected to internal tools.</p>
              <img loading="lazy" className="mt-4 rounded-lg" alt="Case study {i}" src={`https://picsum.photos/seed/case${i}/640/360`} />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Pricing() {
  const [yearly, setYearly] = useState(true)
  const plans = [
    { name: 'Starter', priceM: 29, priceY: 24, features: ['1 seat','1 project','Email support'] },
    { name: 'Growth', priceM: 99, priceY: 79, features: ['5 seats','Unlimited projects','Priority support'] },
    { name: 'Scale', priceM: 249, priceY: 199, features: ['Unlimited seats','SLA','Dedicated CSM'] },
  ]
  return (
    <section id="pricing" className="py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 flex-wrap">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Pricing</h2>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" aria-label="Toggle yearly pricing" checked={yearly} onChange={(e)=>setYearly(e.target.checked)} />
            <span>Bill yearly and save</span>
          </label>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className="p-6 rounded-2xl bg-white/70 dark:bg-white/5 border border-white/40 backdrop-blur shadow-soft-1">
              <h3 className="font-semibold">{p.name}</h3>
              <div className="mt-2 text-3xl font-bold">${yearly?p.priceY:p.priceM}<span className="text-base font-normal text-gray-600 dark:text-gray-300">/mo</span></div>
              <ul className="mt-4 grid gap-2 text-sm text-gray-700 dark:text-gray-300">
                {p.features.map((f)=> <li key={f}>• {f}</li>)}
              </ul>
              <a href="#" className="mt-6 inline-flex justify-center w-full px-4 py-2 rounded-xl bg-gradient-to-br from-fuchsia-500 to-indigo-500 text-white shadow-soft-2">Choose {p.name}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Comparison() {
  const rows = [
    { label: 'Unlimited automations', ours: true, theirs: false },
    { label: 'Voice + chat', ours: true, theirs: true },
    { label: 'Human-like prosody', ours: true, theirs: false },
    { label: 'Security & compliance', ours: true, theirs: true },
  ]
  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-pastel.purple/40 to-pastel.pink/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Comparison</h2>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr>
                <th className="p-3">Feature</th>
                <th className="p-3">Auralyst</th>
                <th className="p-3">Others</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.label} className="border-t border-white/30">
                  <td className="p-3">{r.label}</td>
                  <td className="p-3">{r.ours?'✅':'—'}</td>
                  <td className="p-3">{r.theirs?'✅':'—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export function Testimonials() {
  return (
    <section className="py-20 sm:py-24" aria-label="Testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Loved by teams</h2>
        <div className="mt-8 flex gap-6 overflow-x-auto pb-4 [scroll-snap-type:x_mandatory]">
          {[1,2,3,4,5].map((i) => (
            <blockquote key={i} className="min-w-[320px] sm:min-w-[420px] scroll-snap-align-start p-6 rounded-2xl bg-white/70 dark:bg-white/5 border border-white/40 backdrop-blur shadow-soft-1">
              <p>“Auralyst shipped our AI agent in days not months. Our NPS jumped instantly.”</p>
              <footer className="mt-3 text-sm text-gray-600 dark:text-gray-300">Head of CX, Company {i}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Integrations() {
  const logos = ['Shopify','Zendesk','HubSpot','Salesforce','Zapier','Slack']
  return (
    <section className="py-16" aria-label="Integrations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Integrations</h2>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {logos.map((l)=> (
            <div key={l} className="p-4 rounded-xl bg-white/70 dark:bg-white/5 border border-white/40 backdrop-blur text-center shadow-soft-1">{l}</div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Blog() {
  return (
    <section id="blog" className="py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">From the blog</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <article key={i} className="p-6 rounded-2xl bg-white/70 dark:bg-white/5 border border-white/40 backdrop-blur shadow-soft-1">
              <h3 className="font-semibold">Announcing Auralyst {i}.0</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">New capabilities to build voice and chat agents faster.</p>
              <a className="mt-4 inline-flex text-sm text-indigo-600" href="#">Read more →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  function onSubmit(e) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const email = String(data.get('email')||'').trim()
    const message = String(data.get('message')||'').trim()
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      alert('Please enter a valid email')
      return
    }
    if (message.length < 10) {
      alert('Please add a bit more detail to your message')
      return
    }
    alert('Thanks! We\'ll be in touch shortly.')
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="py-20 sm:py-24 bg-gradient-to-b from-pastel.yellow/40 to-transparent">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Contact</h2>
        <form onSubmit={onSubmit} className="mt-6 grid gap-4 p-6 rounded-2xl bg-white/70 dark:bg-white/5 border border-white/40 backdrop-blur shadow-soft-1" aria-labelledby="contact">
          <label className="grid gap-2">
            <span className="text-sm">Email</span>
            <input required name="email" type="email" className="px-3 py-2 rounded-lg bg-white/90 dark:bg-white/10 border border-white/40" placeholder="you@company.com" />
          </label>
          <label className="grid gap-2">
            <span className="text-sm">Message</span>
            <textarea required name="message" rows={4} className="px-3 py-2 rounded-lg bg-white/90 dark:bg-white/10 border border-white/40" placeholder="Tell us about your use case" />
          </label>
          <button className="mt-2 inline-flex justify-center px-4 py-2 rounded-xl bg-gradient-to-br from-fuchsia-500 to-indigo-500 text-white shadow-soft-2">Send</button>
        </form>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600 dark:text-gray-300">© {new Date().getFullYear()} Auralyst Inc. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Security</a>
        </div>
      </div>
    </footer>
  )
}
