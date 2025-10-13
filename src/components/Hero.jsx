import React from 'react'

export default function Hero({onOpenInquiry}){
  return (
    <section className="min-h-[72vh] flex items-center justify-center text-center px-6">
      <div>
        <h1 className="text-4xl md:text-6xl font-elegant hero-glow">Ravi Sharma Photo & Films</h1>
        <p className="mt-4 opacity-90">Cinematic wedding films & Timeless Photography</p>
        <div className="mt-8 flex justify-center gap-4">
          <button onClick={onOpenInquiry} className="px-6 py-3 rounded-full bg-gold text-black">Book an Inquiry</button>
        </div>

        {/* 3 animated image placeholders */}
        <div className="mt-12 space-y-8">
          <div className="flex flex-col md:flex-row items-center gap-6 reveal">
            <div className="w-full md:w-1/2 h-56 bg-white/6 rounded-lg"/>
            <div className="w-full md:w-1/2 text-left">
              <h3 className="text-xl font-elegant">Wedding Films</h3>
              <p>We convey your wedding story in cinematic shots — dramatic lighting, storytelling edits & emotive sound design to relive the day forever.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center gap-6 reveal">
            <div className="w-full md:w-1/2 h-56 bg-white/6 rounded-lg"/>
            <div className="w-full md:w-1/2 text-left">
              <h3 className="text-xl font-elegant">Candid Photography</h3>
              <p>We capture timeless candid moments — authentic expressions, natural light and emotion-first composition to treasure forever.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 reveal">
            <div className="w-full md:w-1/2 h-56 bg-white/6 rounded-lg"/>
            <div className="w-full md:w-1/2 text-left">
              <h3 className="text-xl font-elegant">Our Vision</h3>
              <p>Client-first approach, tailored packages and passionate storytellers — we prioritise your requirements and satisfaction above all.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
