import React from 'react'
import type { Product } from '../types'
import Stars from './Stars'
import placeholder from '../assets/placeholder.svg'

export default function ProductCard({ product }: {product: Product}) {
  return (
    <div className="card overflow-hidden">
      <div className="bg-neutral-100 aspect-[4/3] grid place-items-center">
        <img src={product.image ?? placeholder} className="h-full object-contain" alt={product.name} />
      </div>
      <div className="p-4 space-y-1">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">{product.name}</h3>
          <span className="text-sm font-semibold">${product.price}</span>
        </div>
        <p className="text-sm text-neutral-600">{product.brand} • {product.shape}</p>
        {product.rating && <Stars rating={product.rating} />}
        <div className="mt-2 flex gap-2">
          {product.polarized && <span className="chip text-xs">Polarized</span>}
          <span className="chip text-xs">{product.fit}</span>
        </div>
        <button className="btn w-full mt-3">Add to cart</button>
      </div>
    </div>
  )
}
