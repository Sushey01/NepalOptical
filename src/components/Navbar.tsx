import React from 'react'
import logo from '../assets/logo.png'

export default function Navbar() {
  return (
    <header className="border-b bg-white">
      <div className="container-xl py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Nepal Optical" className="h-14 w-auto" />
        </div>
        <div className="hidden md:flex items-center gap-2 w-full max-w-xl">
          <input className="input" placeholder="Search sunglasses..." />
          <button className="btn">Search</button>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="text-sm hover:text-black">Account</a>
          <a href="#" className="text-sm hover:text-black">Cart (0)</a>
        </div>
      </div>
    </header>
  )
}
