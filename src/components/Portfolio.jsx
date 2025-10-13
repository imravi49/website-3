import React, {useState} from 'react'

export default function Portfolio({compact=false}){
  const [lightbox,setLightbox] = useState({open:false,index:0})
  const categories = [
    {id:'wedding-bells', title:'Wedding Bells'},
    {id:'haldi-vibes', title:'Haldi Vibes'},
    {id:'sangeet-chaos', title:'Sangeet Chaos'},
    {id:'ring-ceremony', title:'Ring Ceremony'}
  ]
  const items = new Array(8).fill(0).map((_,i)=>({id:i,title:`Photo ${i+1}`}))

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-elegant mb-6">Portfolio</h2>
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        {categories.map(cat=> (
          <div key={cat.id} className="p-4 rounded-lg bg-white/4">
            <h3 className="font-elegant">{cat.title}</h3>
            <p className="text-sm mt-2">A curated selection of moments from {cat.title.toLowerCase()}.</p>
          </div>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((it,i)=> (
          <div onClick={()=>setLightbox({open:true,index:i})} key={it.id} className="h-48 bg-white/6 rounded cursor-pointer" />
        ))}
      </div>

      {lightbox.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="w-[90vw] h-[80vh] bg-black rounded">
            <button onClick={()=>setLightbox({open:false,index:0})} className="p-3">Close</button>
            {/* Add prev/next and video support in real project */}
          </div>
        </div>
      )}
    </section>
  )
}
