import React, {useState} from 'react'
import emailjs from 'emailjs-com'

export default function InquiryForm({open,onClose}){
  const [form,setForm] = useState({name:'',phone:'',event:'',dates:[],side:'',requirements:[],special:'',location:'',budget:0})

  if(!open) return null

  function handleSend(e){
    e.preventDefault()
    const service = 'service_zl7rcg1'
    const template = 'template_n5ur429'
    const payload = { ...form }
    emailjs.send(service, template, payload).then(()=>{
      alert('Inquiry sent — we will contact you soon')
      onClose()
    }).catch(err=>{alert('Failed to send — check console'); console.error(err)})
  }

  return (
    <div className="modal-backdrop">
      <div className="modal-card">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-elegant">Book an Inquiry</h3>
          <button onClick={onClose}>X</button>
        </div>
        <form onSubmit={handleSend} className="space-y-3">
          <div>
            <label className="text-sm">Name*</label>
            <input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="w-full p-2 rounded bg-white/5" />
          </div>
          <div>
            <label className="text-sm">Contact Number*</label>
            <input required inputMode="numeric" pattern="[0-9]*" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value.replace(/[^0-9]/g,'')})} className="w-full p-2 rounded bg-white/5" />
          </div>
          <div>
            <label className="text-sm">Event Type</label>
            <select required value={form.event} onChange={e=>setForm({...form,event:e.target.value})} className="w-full p-2 rounded bg-white/5">
              <option value="">Select</option>
              <option>Wedding</option>
              <option>Pre-Wedding</option>
              <option>Engagement</option>
              <option>Baby Shower</option>
              <option>Commercial</option>
              <option>Birthday</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="text-sm">Special Requirements</label>
            <textarea value={form.special} onChange={e=>setForm({...form,special:e.target.value})} className="w-full p-2 rounded bg-white/5" />
          </div>

          <div>
            <label className="text-sm">Location & Schedule</label>
            <input value={form.location} onChange={e=>setForm({...form,location:e.target.value})} className="w-full p-2 rounded bg-white/5" />
          </div>
          <div>
            <label className="text-sm">Budget (₹)</label>
            <input type="range" min="0" max="1000000" value={form.budget} onChange={e=>setForm({...form,budget:+e.target.value})} className="w-full" />
            <div>{new Intl.NumberFormat('en-IN').format(form.budget)}</div>
          </div>

          <div className="flex justify-end gap-3">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded border">Close</button>
            <button type="submit" className="px-4 py-2 rounded bg-gold text-black">Send Inquiry</button>
          </div>
        </form>
      </div>
    </div>
  )
}
