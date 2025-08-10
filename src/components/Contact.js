import React, {useState} from 'react';

export default function Contact(){
  const [form, setForm] = useState({name:'', email:'', message:''});
  const [sent, setSent] = useState(false);

  function handleChange(e){
    setForm({...form, [e.target.name]: e.target.value});
  }

  function handleSubmit(e){
    e.preventDefault();
    console.log('Contact form', form);
    setSent(true);
    setForm({name:'',email:'',message:''});
    setTimeout(()=> setSent(false), 3000);
  }

  return (
    <section id="contact" className="section">
      <div className="container" style={{maxWidth:700}}>
        <h2>Contact</h2>
        <form onSubmit={handleSubmit} style={{display:'grid', gap:'.6rem', marginTop:'.8rem'}}>
          <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required style={{padding:'.6rem', borderRadius:6, border:'1px solid #123'}}/>
          <input name="email" value={form.email} onChange={handleChange} placeholder="Email" type="email" required style={{padding:'.6rem', borderRadius:6}} />
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" rows="5" style={{padding:'.6rem', borderRadius:6}} />
          <div>
            <button type="submit" style={{background:'var(--accent)', padding:'.6rem 1rem', borderRadius:8, border:0}}>Send message</button>
            {sent && <span style={{marginLeft:10, color:'#8ef6ee'}}> Sent!</span>}
          </div>
        </form>
      </div>
    </section>
  );
}
