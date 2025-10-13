import React from 'react'

export default function Films(){
  const vids = [
    'https://www.youtube.com/embed/dQw4w9WgXcQ',
    'https://www.youtube.com/embed/dQw4w9WgXcQ',
    'https://www.youtube.com/embed/dQw4w9WgXcQ',
    'https://www.youtube.com/embed/dQw4wXcQ'
  ]
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-elegant mb-6">Films</h2>
      <div className="space-y-8">
        {vids.map((v,i)=> (
          <div key={i} className="w-full h-[420px] bg-black">
            <iframe className="w-full h-full" src={v} title={`film-${i}`} allowFullScreen />
          </div>
        ))}
      </div>
    </section>
  )
}
