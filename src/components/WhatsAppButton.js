import React from 'react';
export default function WhatsAppButton(){
  // WhatsApp number provided: 7383826282 (India). Using international link.
  const waHref = 'https://wa.me/917383826282?text=Hello%20Ravi%20Sharma%20Photo%20%26%20Films';
  return (
    <a className='whatsapp-btn' href={waHref} target='_blank' rel='noreferrer'>
      <img src='/assets/whatsapp.svg' style={{height:22}} alt='wa'/> 
      <span style={{fontWeight:700}}>Chat with us</span>
    </a>
  );
}