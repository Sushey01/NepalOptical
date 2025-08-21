import React from 'react'

export default function Stars({ rating = 4.5 }: { rating?: number }) {
  const full = Math.round(rating)
  return (
    <div className="flex items-center gap-0.5 text-amber-500 text-sm" aria-label={`Rated ${rating} out of 5`}>
      {Array.from({length: 5}).map((_,i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill={i<full?'currentColor':'none'} stroke="currentColor">
          <path d="M10 15l-5.878 3.09L5.64 11.545.76 7.41l6.09-.885L10 1l3.15 5.525 6.09.885-4.88 4.134 1.517 6.545z"/>
        </svg>
      ))}
    </div>
  )
}
