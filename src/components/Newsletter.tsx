import React from 'react'

export default function Newsletter() {
  return (
    <section className="bg-hero-gradient text-white">
      <div className="section grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold">Stay in Style</h3>
          <p className="text-white/80 mt-2">Subscribe to receive exclusive offers, new arrivals, and style tips.</p>
        </div>
        <form className="flex gap-2">
          <input className="input bg-white flex-1" type="email" placeholder="Enter your email" />
          <button className="btn" type="button">Subscribe</button>
        </form>
      </div>
    </section>
  )
}
