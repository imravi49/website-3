import React from 'react';
export default function Contact(){
  return (
    <main style={{textAlign:'center',padding:24}}>
      <h2 style={{fontFamily:'Playfair Display',fontSize:28,color:'var(--gold1)'}}>Contact</h2>
      <p style={{color:'var(--muted)'}}>Reach us at</p>
      <div style={{display:'flex',gap:24,justifyContent:'center',alignItems:'center',marginTop:12}}>
        <div style={{textAlign:'center'}}><img src='/assets/whatsapp.svg' style={{height:36}} alt='wa'/><div>+91 7383826282</div></div>
        <div style={{textAlign:'center'}}><img src='/assets/instagram.svg' style={{height:36}} alt='insta'/><div>@tasweer.photography</div></div>
        <div style={{textAlign:'center'}}><img src='/assets/mail.svg' style={{height:36}} alt='mail'/><div>ravi.rv73838@icloud.com</div></div>
        <div style={{textAlign:'center'}}><img src='/assets/youtube.svg' style={{height:36}} alt='yt'/><div>@tasweerphotographybyravisharma</div></div>
      </div>
    </main>
  );
}