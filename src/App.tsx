import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SectionHeading from './components/SectionHeading'
import ProductCard from './components/ProductCard'
import Testimonials from './components/Testimonials'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import { PRODUCTS } from './data/products'

export default function App() {
  return (
    <div className="min-h-full">
      <Navbar />
      <Hero />

      <section className="section" id="featured">
        <SectionHeading title="Featured Collection" subtitle="Handpicked styles that define the season" />
        <div className="container-xl grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {PRODUCTS.slice(0,3).map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      <section className="section">
        <SectionHeading title="Complete Collection" subtitle="Explore a full range of sunglasses" />
        <div className="container-xl grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {PRODUCTS.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
        <div className="container-xl flex justify-center mt-6">
          <a className="chip" href="#">View the full catalog →</a>
        </div>
      </section>

      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  )
}
