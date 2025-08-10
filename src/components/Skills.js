import React from 'react';

const skills = [
  'Python', 'C', 'C++', 'Java', 'MySql', 'HTML', 'CSS', 'JavaScript', 'React', 'Git'
];

export default function Skills(){
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2>Skills</h2>
        <div style={{display:'flex',flexWrap:'wrap',gap:'0.6rem',marginTop:'1rem'}}>
          {skills.map(s => (
            <div key={s} style={{background:'#071a24', padding:'0.45rem 0.8rem', borderRadius:8, color:'var(--muted)', fontWeight:600}}>
              {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
