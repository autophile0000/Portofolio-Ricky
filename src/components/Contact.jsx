import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding" style={{background: 'var(--bg-secondary)'}}>
      <div className="container" style={{maxWidth: '800px'}}>
        <div style={{textAlign: 'center', marginBottom: '4rem'}}>
          <h2 style={{fontSize: 'clamp(2rem, 5vw, 2.5rem)', marginBottom: '1rem'}}>Get In <span className="gradient-text">Touch</span></h2>
          <p style={{color: 'var(--text-dim)', fontSize: 'clamp(0.9rem, 1.2vw, 1rem)'}}>
            Mari diskusikan bagaimana saya dapat membantu meningkatkan kualitas perangkat lunak Anda.
          </p>
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
              <label style={{fontSize: '0.85rem', color: 'var(--text-dim)', fontWeight: '500'}}>Nama Lengkap</label>
              <input type="text" placeholder="Masukkan nama Anda" style={{
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
              <label style={{fontSize: '0.85rem', color: 'var(--text-dim)', fontWeight: '500'}}>Alamat Email</label>
              <input type="email" placeholder="email@contoh.com" style={{
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
            <label style={{fontSize: '0.85rem', color: 'var(--text-dim)', fontWeight: '500'}}>Subjek / Perihal</label>
            <input type="text" placeholder="Contoh: Kerja Sama Proyek" style={{
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
            <label style={{fontSize: '0.85rem', color: 'var(--text-dim)', fontWeight: '500'}}>Pesan</label>
            <textarea placeholder="Tuliskan pesan Anda di sini..." rows="5" style={{
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
          }}>Kirim Pesan 🚀</button>
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
