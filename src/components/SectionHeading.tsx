import React from 'react'

export default function SectionHeading({ title, subtitle, id }: { title: string; subtitle?: string; id?: string }) {
  return (
    <div id={id} className="text-center space-y-2 mb-6">
      <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
      {subtitle && <p className="text-neutral-600">{subtitle}</p>}
    </div>
  )
}
