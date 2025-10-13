import React, {useEffect, useState} from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Films from './components/Films'
import About from './components/About'
import Contact from './components/Contact'
import ReviewsWidget from './components/ReviewsWidget'
import InquiryForm from './components/InquiryForm'
import AdminPanel from './components/AdminPanel'

export default function App(){
  const [isInquiryOpen,setInquiryOpen] = useState(false)

  useEffect(()=>{
    // reveal basic animations once loaded
    setTimeout(()=> document.querySelectorAll('.reveal').forEach(el=>el.classList.add('in')),200)
  },[])

  return (
    <div className="min-h-screen relative">
      <div className="cinematic-bg" />
      <Navbar onOpenInquiry={()=>setInquiryOpen(true)} />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<>
            <Hero onOpenInquiry={()=>setInquiryOpen(true)} />
            <section className="max-w-6xl mx-auto px-6 py-12">
              <h2 className="text-3xl font-elegant text-center mb-4">Welcome to Ravi Sharma Photo Films</h2>
              <p className="text-center max-w-3xl mx-auto mb-6">where we infuse magic into your wedding memories turning them into timeless tales of love and companionship.</p>
              <div className="text-center"><a href="/portfolio" className="px-6 py-3 rounded-full border border-gold bg-gradient-to-r from-transparent to-transparent hero-glow">See Our Work</a></div>
            </section>
            <Portfolio compact />
            <ReviewsWidget />
          </>} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/films" element={<Films />} />
          <Route path="/about" element={<About onOpenInquiry={()=>setInquiryOpen(true)} />} />
          <Route path="/contact" element={<Contact onOpenInquiry={()=>setInquiryOpen(true)} />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </main>

      <InquiryForm open={isInquiryOpen} onClose={()=>setInquiryOpen(false)} />

      {/* Floating quick buttons */}
      <a href={`https://wa.me/91${7383826282}`} className="fixed left-4 bottom-6 p-3 rounded-full shadow-lg bg-white text-black z-50">WA</a>
      <button onClick={()=>setInquiryOpen(true)} className="fixed right-4 bottom-6 p-3 rounded-full shadow-lg bg-gold text-black z-50">Book</button>
    </div>
  )
}
