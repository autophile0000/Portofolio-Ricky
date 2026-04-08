import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding" style={{background: 'var(--bg-secondary)'}}>
      <div className="container" style={{maxWidth: '800px'}}>
        <div style={{textAlign: 'center', marginBottom: '4rem'}}>
          <h2 style={{fontSize: '2.5rem', marginBottom: '1rem'}}>Get In <span className="gradient-text">Touch</span></h2>
          <p style={{color: 'var(--text-dim)'}}>Let's discuss how I can help improve your software quality.</p>
        </div>

        <form className="glass-card" style={{padding: '3rem', display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem'}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
              <label style={{fontSize: '0.9rem', color: 'var(--text-dim)'}}>Full Name</label>
              <input type="text" placeholder="John Doe" style={{
                background: 'var(--bg-accent)',
                border: '1px solid var(--glass-border)',
                padding: '1rem',
                borderRadius: '8px',
                color: 'var(--text-bright)',
                outline: 'none'
              }} />
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
              <label style={{fontSize: '0.9rem', color: 'var(--text-dim)'}}>Email Address</label>
              <input type="email" placeholder="john@example.com" style={{
                background: 'var(--bg-accent)',
                border: '1px solid var(--glass-border)',
                padding: '1rem',
                borderRadius: '8px',
                color: 'var(--text-bright)',
                outline: 'none'
              }} />
            </div>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
            <label style={{fontSize: '0.9rem', color: 'var(--text-dim)'}}>Subject</label>
            <input type="text" placeholder="Project Inquiry" style={{
              background: 'var(--bg-accent)',
              border: '1px solid var(--glass-border)',
              padding: '1rem',
              borderRadius: '8px',
              color: 'var(--text-bright)',
              outline: 'none'
            }} />
          </div>
          <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
            <label style={{fontSize: '0.9rem', color: 'var(--text-dim)'}}>Message</label>
            <textarea placeholder="Tell me about your project..." rows="5" style={{
              background: 'var(--bg-accent)',
              border: '1px solid var(--glass-border)',
              padding: '1rem',
              borderRadius: '8px',
              color: 'var(--text-bright)',
              outline: 'none',
              resize: 'vertical'
            }}></textarea>
          </div>
          <button type="submit" className="btn-primary" style={{
            justifyContent: 'center',
            marginTop: '1rem',
            padding: '1.2rem'
          }}>Send Message 🚀</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
