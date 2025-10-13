import React from 'react'

export default function About({onOpenInquiry}){
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-elegant mb-4">About Us</h2>
      <p className="mb-6">Inspired by candidshutters.com structure — professional story about team, values and services. (Editable via admin panel)</p>
      <button onClick={onOpenInquiry} className="px-4 py-2 rounded bg-gold text-black">Book an Inquiry</button>
    </section>
  )
}
