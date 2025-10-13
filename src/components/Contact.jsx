import React from 'react'

export default function Contact(){
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-elegant mb-6">Contact Us</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <a className="p-4 rounded bg-white/5">Instagram</a>
        <a className="p-4 rounded bg-white/5">WhatsApp</a>
        <a className="p-4 rounded bg-white/5">YouTube</a>
        <a className="p-4 rounded bg-white/5">Email</a>
      </div>
    </section>
  )
}
