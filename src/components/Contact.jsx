import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ nama: '', email: '', subjek: '', pesan: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setFormData({ nama: '', email: '', subjek: '', pesan: '' });
      } else {
        setStatus('error');
        setErrorMsg(data.message || 'Terjadi kesalahan.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMsg('Koneksi gagal. Pastikan Anda terhubung ke internet.');
    }
  };

  const inputStyle = {
    background: 'var(--bg-accent)',
    border: '1px solid var(--glass-border)',
    padding: '0.8rem 1rem',
    borderRadius: '8px',
    color: 'var(--text-bright)',
    outline: 'none',
    width: '100%',
    fontFamily: 'var(--font-sans)',
    fontSize: '1rem'
  };

  return (
    <section id="contact" className="section-padding" style={{background: 'var(--bg-secondary)'}}>
      <div className="container" style={{maxWidth: '800px'}}>
        <div style={{textAlign: 'center', marginBottom: '4rem'}}>
          <h2 style={{fontSize: 'clamp(2rem, 5vw, 2.5rem)', marginBottom: '1rem'}}>Get In <span className="gradient-text">Touch</span></h2>
          <p style={{color: 'var(--text-dim)', fontSize: 'clamp(0.9rem, 1.2vw, 1rem)'}}>
            Mari diskusikan bagaimana saya dapat membantu meningkatkan kualitas perangkat lunak Anda.
          </p>
        </div>

        {status === 'success' ? (
          <div className="glass-card" style={{ padding: '3rem', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Pesan Terkirim!</h3>
            <p style={{ color: 'var(--text-dim)' }}>Terima kasih telah menghubungi saya. Saya akan membalas secepatnya.</p>
            <button onClick={() => setStatus('idle')} className="btn-primary" style={{ marginTop: '1.5rem' }}>
              Kirim Pesan Lain
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="glass-card" style={{
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
                <label style={{fontSize: '0.85rem', color: 'var(--text-dim)', fontWeight: '500'}}>Nama Lengkap *</label>
                <input type="text" name="nama" value={formData.nama} onChange={handleChange} required placeholder="Nama Anda" style={inputStyle} />
              </div>
              <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                <label style={{fontSize: '0.85rem', color: 'var(--text-dim)', fontWeight: '500'}}>Alamat Email *</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="email@contoh.com" style={inputStyle} />
              </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
              <label style={{fontSize: '0.85rem', color: 'var(--text-dim)', fontWeight: '500'}}>Subjek / Perihal</label>
              <input type="text" name="subjek" value={formData.subjek} onChange={handleChange} placeholder="Contoh: Kerja Sama Proyek" style={inputStyle} />
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
              <label style={{fontSize: '0.85rem', color: 'var(--text-dim)', fontWeight: '500'}}>Pesan *</label>
              <textarea name="pesan" value={formData.pesan} onChange={handleChange} required placeholder="Tuliskan pesan Anda di sini..." rows="5" style={{...inputStyle, resize: 'vertical'}}></textarea>
            </div>

            {status === 'error' && (
              <div style={{ background: 'rgba(255, 80, 80, 0.1)', border: '1px solid rgba(255,80,80,0.3)', padding: '0.8rem 1rem', borderRadius: '8px', color: '#ff8080', fontSize: '0.9rem' }}>
                ❌ {errorMsg}
              </div>
            )}

            <button type="submit" className="btn-primary" disabled={status === 'sending'} style={{
              justifyContent: 'center',
              marginTop: '1rem',
              padding: '1rem',
              width: '100%',
              fontSize: '1rem',
              opacity: status === 'sending' ? 0.7 : 1,
              cursor: status === 'sending' ? 'not-allowed' : 'pointer'
            }}>
              {status === 'sending' ? 'Mengirim...' : 'Kirim Pesan 🚀'}
            </button>
          </form>
        )}
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 480px) {
          .form-grid { grid-template-columns: 1fr !important; }
        }
      `}} />
    </section>
  );
};

export default Contact;


