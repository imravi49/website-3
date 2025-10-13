import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi'
import MobileMenu from './MobileMenu'

export default function Navbar({onOpenInquiry}){
  const [open,setOpen] = useState(false)
  return (
    <header className="fixed top-0 left-0 right-0 bg-transparent z-40">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">LOGO</div>
        </Link>
        <nav className="hidden md:flex gap-6 items-center text-sm">
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/films">Films</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <button onClick={onOpenInquiry} className="px-4 py-2 rounded-md bg-gold text-black">Book an Inquiry</button>
        </nav>
        <div className="md:hidden">
          <button onClick={()=>setOpen(true)} aria-label="Open menu"><FiMenu size={22} /></button>
        </div>
      </div>
      <MobileMenu open={open} onClose={()=>setOpen(false)} onOpenInquiry={onOpenInquiry} />
    </header>
  )
}
