import React, {useEffect, useState} from 'react';
import { db, storage, auth, provider } from '../lib/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { signInWithPopup, signOut } from 'firebase/auth';

export default function AdminPanel(){
  const adminEmail = 'ravi.rv73838@gmail.com';
  const [user, setUser] = useState(null);
  const [data,setData]=useState({heroTitle:'Ravi Sharma Photo & Films', heroTagline:'Cinematic wedding films & Timeless Photography', images:['/assets/photo_1.jpg','/assets/photo_2.jpg','/assets/photo_3.jpg'], portfolio:{}, films:[], counters:{cities:25,couples:300,photos:50000,videos:800}});

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(u=> setUser(u));
    // load existing content
    (async ()=>{ try{ const d = await getDoc(doc(db,'site','content')); if(d.exists()) setData(prev=>({...prev,...d.data()})); }catch(e){} })();
    return ()=>unsubscribe();
  },[]);

  const login = async ()=>{ try{ await signInWithPopup(auth, provider); }catch(e){ console.error(e); } };
  const logout = async ()=>{ try{ await signOut(auth); }catch(e){ console.error(e); } };

  const upload = async (file, cb)=>{ if(!file) return; const path = `uploads/${Date.now()}_${file.name}`; const r = ref(storage, path); await uploadBytes(r,file); const url = await getDownloadURL(r); cb(url); };

  const save = async ()=>{ await setDoc(doc(db,'site','content'), data, {merge:true}); alert('Saved'); };

  if(!user) return <main style={{padding:24}}><h2>Please sign in with Google to access Admin.</h2><button className='btn-primary' onClick={login}>Sign in with Google</button></main>;
  if(user.email !== adminEmail) return <main style={{padding:24}}><h2>Access denied. Sign in with the admin account ({adminEmail}).</h2><button className='btn-ghost' onClick={logout}>Sign out</button></main>;

  return (
    <main style={{padding:24}}>
      <h2>Admin Panel</h2>
      <div style={{display:'flex',gap:8}}>
        <button className='btn-ghost' onClick={()=>{}}>General</button>
        <button className='btn-ghost' onClick={()=>{window.location='#portfolio'}}>Portfolio</button>
        <button className='btn-ghost' onClick={()=>{window.location='#films'}}>Films</button>
        <button className='btn-ghost' onClick={()=>{window.location='#inquiries'}}>Inquiries</button>
      </div>

      <div style={{marginTop:12,background:'#0b0b0b',padding:12,borderRadius:10}}>
        <h3>Brand</h3>
        <label>Hero Title</label>
        <input value={data.heroTitle} onChange={e=>setData({...data,heroTitle:e.target.value})} />
        <label>Hero Tagline</label>
        <input value={data.heroTagline} onChange={e=>setData({...data,heroTagline:e.target.value})} />
        <label>Logo</label>
        <input type='file' onChange={e=>upload(e.target.files[0], url=>setData(prev=>({...prev,logoUrl:url})))} />
        {data.logoUrl && <img src={data.logoUrl} style={{height:60,marginTop:8}}/>}
      </div>

      <div style={{marginTop:12,display:'flex',gap:8,justifyContent:'flex-end'}}>
        <button className='btn-primary' onClick={save}>Save</button>
        <button className='btn-ghost' onClick={logout}>Sign out</button>
      </div>
    </main>
  );
}
