import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding" style={{background: 'var(--bg-secondary)'}}>
      <div className="container" style={{maxWidth: '800px'}}>
        <div style={{textAlign: 'center', marginBottom: '4rem'}}>
          <h2 style={{fontSize: 'clamp(2rem, 5vw, 2.5rem)', marginBottom: '1rem'}}>Get In <span className="gradient-text">Touch</span></h2>
          <p style={{color: 'var(--text-dim)', fontSize: 'clamp(0.9rem, 1.2vw, 1rem)'}}>Let's discuss how I can help improve your software quality.</p>
        </div>

        <form className="glass-card" style={{
          padding: 'clamp(1.5rem, 5vw, 3rem)', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '1.5rem'
        }}>
          <div className="form-grid" style={{
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '1.5rem'
          }}>
            <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
              <label style={{fontSize: '0.85rem', color: 'var(--text-dim)', fontWeight: '500'}}>Full Name</label>
              <input type="text" placeholder="John Doe" style={{
                background: 'var(--bg-accent)',
                border: '1px solid var(--glass-border)',
                padding: '0.8rem 1rem',
                borderRadius: '8px',
                color: 'var(--text-bright)',
                outline: 'none',
                width: '100%'
              }} />
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
              <label style={{fontSize: '0.85rem', color: 'var(--text-dim)', fontWeight: '500'}}>Email Address</label>
              <input type="email" placeholder="john@example.com" style={{
                background: 'var(--bg-accent)',
                border: '1px solid var(--glass-border)',
                padding: '0.8rem 1rem',
                borderRadius: '8px',
                color: 'var(--text-bright)',
                outline: 'none',
                width: '100%'
              }} />
            </div>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
            <label style={{fontSize: '0.85rem', color: 'var(--text-dim)', fontWeight: '500'}}>Subject</label>
            <input type="text" placeholder="Project Inquiry" style={{
              background: 'var(--bg-accent)',
              border: '1px solid var(--glass-border)',
              padding: '0.8rem 1rem',
              borderRadius: '8px',
              color: 'var(--text-bright)',
              outline: 'none',
              width: '100%'
            }} />
          </div>
          <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
            <label style={{fontSize: '0.85rem', color: 'var(--text-dim)', fontWeight: '500'}}>Message</label>
            <textarea placeholder="Tell me about your project..." rows="5" style={{
              background: 'var(--bg-accent)',
              border: '1px solid var(--glass-border)',
              padding: '1rem',
              borderRadius: '8px',
              color: 'var(--text-bright)',
              outline: 'none',
              resize: 'vertical',
              width: '100%'
            }}></textarea>
          </div>
          <button type="submit" className="btn-primary" style={{
            justifyContent: 'center',
            marginTop: '1rem',
            padding: '1rem',
            width: '100%',
            fontSize: '1rem'
          }}>Send Message 🚀</button>
        </form>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 480px) {
          .form-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}} />
    </section>
  );
};

export default Contact;
