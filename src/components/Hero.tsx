import React from 'react'

export default function Hero() {
  return (
    <section className="bg-hero-gradient text-white">
      <div className="container-xl py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="max-w-xl">
          <p className="kicker">Summer Picks</p>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold leading-tight">Elevate Your Style<br/>with Premium Sunglasses</h1>
          <p className="mt-4 text-white/80">Durable and stylish collections for every adventure. Anti-glare, scratch-resistant lenses and lightweight comfort for all-day wear.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn" href="#featured">Shop Now</a>
            <a className="btn-outline" href="#video">Play Video</a>
          </div>
        </div>
        <div className="relative">
          <div className="card overflow-hidden aspect-video bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
            <span className="text-white/60">Hero Media</span>
          </div>
          <div className="absolute -top-6 -left-6 h-16 w-16 rounded-full bg-orange-400 text-black font-semibold grid place-items-center shadow-ring">New!</div>
        </div>
      </div>
      <div className="container-xl pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          {[
            {title: 'UV400 Protection', desc: '100% UV Protection for your eyes'},
            {title: 'Free Shipping $50+', desc: 'Fast delivery across the U.S.'},
            {title: '30-Day Returns', desc: 'Easy returns, no questions asked'},
            {title: 'Premium Quality', desc: 'Durable frames & lenses'},
          ].map((f,i) => (
            <div key={i} className="bg-white/5 rounded-2xl p-4 ring-1 ring-white/10">
              <div className="font-semibold">{f.title}</div>
              <div className="text-white/70 text-xs mt-1">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
