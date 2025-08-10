import React from 'react';
import projects from '../data/projects';

export default function Projects(){
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Projects</h2>
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:'1rem', marginTop:'1rem'}}>
          {projects.map(p => (
            <article key={p.id} style={{background:'var(--card)', padding:'1rem', borderRadius:10, minHeight:140, display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
              <div>
                <h3 style={{margin:'0 0 0.4rem 0'}}>{p.title}</h3>
                <p style={{color:'var(--muted)', margin:0}}>{p.description}</p>
              </div>

              <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:'1rem'}}>
                <div style={{display:'flex',gap:6,flexWrap:'wrap'}}>
                  {p.tech.map(t => <span key={t} style={{fontSize:12, color:'var(--muted)', background:'#06101a', padding:'4px 8px', borderRadius:6}}>{t}</span>)}
                </div>
                <div style={{display:'flex',gap:8}}>
                  <a href={p.github} target="_blank" rel="noreferrer" style={{fontSize:14}}>GitHub</a>
                  <a href={p.live} target="_blank" rel="noreferrer" style={{fontSize:14}}>Demo</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
