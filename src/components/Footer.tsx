import React from 'react'

const cols = {
  'Shop': ['Men', 'Women', 'Kids', 'Gift Cards'],
  'Support': ['Shipping', 'Returns', 'Warranty', 'Contact'],
  'Company': ['About', 'Careers', 'Press', 'Sustainability']
}

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="section grid md:grid-cols-4 gap-6">
        <div>
          <div className="font-semibold">Nepal Optical</div>
          <p className="text-sm text-neutral-600 mt-2">Premium eyewear designed for comfort and style.</p>
        </div>
        {Object.entries(cols).map(([title, items]) => (
          <div key={title}>
            <div className="font-semibold mb-2">{title}</div>
            <ul className="space-y-1 text-sm text-neutral-600">
              {items.map(i => <li key={i}><a className="hover:text-black" href="#">{i}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="container-xl py-6 text-xs text-neutral-500 border-t">
        © {new Date().getFullYear()} Nepal Optical. All rights reserved.
      </div>
    </footer>
  )
}
