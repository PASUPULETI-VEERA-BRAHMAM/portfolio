import React from 'react';

export default function Hero() {
  return (
    <section className="section" style={{paddingTop: '3rem'}}>
      <div className="container" style={{display:'grid',gridTemplateColumns:'1fr',gap:'1rem',alignItems:'center'}}>
        <div>
          <h1 style={{fontSize:'clamp(1.8rem,4vw,3rem)', margin:0}}>Hi, I’m <span style={{color:'var(--accent)'}}>PASUPULETI VEERA BRAHMAM</span></h1>
          <p style={{color:'var(--muted)', maxWidth:700}}>
            Aspiring Full-Stack Developer. I build web apps using React, Node.js and modern JavaScript. I care about clean UI and useful UX.
          </p>
          <a href="#projects">
            <button style={{background:'var(--accent)', border:'none', color:'#042026', padding:'0.6rem 1rem', borderRadius:8,fontWeight:600}}>View my work</button>
          </a>
        </div>
      </div>
    </section>
  );
}
