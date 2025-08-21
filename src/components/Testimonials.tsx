import React from 'react'

const ITEMS = [
  { name: 'Sofia Martinez', text: 'Super comfy and stylish. The polarized lenses really help on sunny days!', role: 'Verified Buyer' },
  { name: 'Alice Karmacharya', text: 'Great quality for the price. Shipping was fast and packaging was neat.', role: 'Verified Buyer' },
  { name: 'Adivk Nemkkul', text: 'Love the design. Fits perfectly and looks premium.', role: 'Verified Buyer' },
]

export default function Testimonials() {
  return (
    <section className="section bg-neutral-50">
      <div className="text-center space-y-2 mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold">What Our Customers Say</h2>
        <p className="text-neutral-600">Honest reviews from satisfied customers</p>
      </div>
      <div className="container-xl grid md:grid-cols-3 gap-4">
        {ITEMS.map((t,i)=>(
          <div key={i} className="card p-5">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-neutral-200" />
              <div>
                <div className="font-semibold">{t.name}</div>
                <div className="text-xs text-neutral-500">{t.role}</div>
              </div>
            </div>
            <p className="mt-3 text-neutral-700">{t.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
