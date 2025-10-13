import React from 'react'
import { Link } from 'react-router-dom'
import { FiX } from 'react-icons/fi'

export default function MobileMenu({open,onClose,onOpenInquiry}){
  if(!open) return null
  return (
    <div className="fixed inset-0 bg-black/60 z-50">
      <div className="bg-primary h-full w-72 p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="text-lg font-elegant">LOGO</div>
          <button onClick={onClose}><FiX /></button>
        </div>
        <nav className="flex flex-col gap-4">
          <Link to="/" onClick={onClose}>Home</Link>
          <Link to="/portfolio" onClick={onClose}>Portfolio</Link>
          <Link to="/films" onClick={onClose}>Films</Link>
          <Link to="/about" onClick={onClose}>About</Link>
          <Link to="/contact" onClick={onClose}>Contact</Link>
          <button className="mt-4 px-4 py-2 bg-gold rounded" onClick={()=>{onOpenInquiry(); onClose()}}>Book an Inquiry</button>
        </nav>
      </div>
    </div>
  )
}
