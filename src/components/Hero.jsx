import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="section-padding" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '6rem',
      paddingBottom: '4rem'
    }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)',
        gap: '2rem',
        alignItems: 'center'
      }}>
        <div className="hero-content fade-in" style={{zIndex: 1}}>
          <h2 style={{
            fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
            color: 'var(--primary)',
            letterSpacing: '2px',
            marginBottom: '1rem',
            fontWeight: '600'
          }}>SOFTWARE QUALITY ASSURANCE</h2>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            lineHeight: '1.1',
            marginBottom: '1.5rem',
            fontWeight: '700'
          }}>
            Ensuring <span className="gradient-text">Quality</span>. Delivering Excellence.
          </h1>
          <p style={{
            fontSize: 'clamp(1rem, 1.5vw, 1.1rem)',
            color: 'var(--text-dim)',
            marginBottom: '2.5rem',
            maxWidth: '550px',
            lineHeight: '1.8'
          }}>
            Halo, saya Ricky Prasetyo. Seorang QA Engineer yang berdedikasi untuk membantu bisnis membangun produk digital yang bebas bug melalui strategi pengujian yang komprehensif dan efisien.
          </p>
          <div className="hero-btns" style={{display: 'flex', flexWrap: 'wrap', gap: '1.5rem'}}>
            <a href="#projects" className="btn-primary">Lihat Proyek</a>
            <a href="#contact" className="glass-card" style={{
              padding: '0.8rem 1.5rem',
              borderRadius: '12px',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center'
            }}>Hubungi Saya</a>
          </div>
        </div>

        <div className="hero-visual fade-in" style={{
          position: 'relative',
          animationDelay: '0.2s',
          width: '100%'
        }}>
          <div style={{
            width: '100%',
            paddingBottom: '100%',
            background: 'radial-gradient(circle, var(--primary-glow) 0%, transparent 60%)',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: -1
          }}></div>
          
          <div className="glass-card" style={{
            padding: '0',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
            border: '1px solid rgba(255,255,255,0.1)',
            maxWidth: '100%'
          }}>
            {/* Window Header */}
            <div style={{
              background: 'rgba(255,255,255,0.05)',
              padding: '0.6rem 1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              borderBottom: '1px solid rgba(255,255,255,0.05)'
            }}>
              <div style={{width: '8px', height: '8px', borderRadius: '50%', background: '#ff5f56'}}></div>
              <div style={{width: '8px', height: '8px', borderRadius: '50%', background: '#ffbd2e'}}></div>
              <div style={{width: '8px', height: '8px', borderRadius: '50%', background: '#27c93f'}}></div>
              <div style={{marginLeft: '0.5rem', fontSize: '0.6rem', color: 'var(--text-dim)', letterSpacing: '1px'}}>METRICS.YAML</div>
            </div>
            
            {/* Quality Dashboard Content */}
            <div style={{
              padding: 'clamp(1.5rem, 4vw, 2.5rem)',
              textAlign: 'left',
            }}>
              <div style={{
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.8rem', 
                marginBottom: '1.5rem',
                borderBottom: '1px solid var(--glass-border)',
                paddingBottom: '1rem'
              }}>
                <div style={{
                  width: '12px', 
                  height: '12px', 
                  borderRadius: '50%', 
                  background: '#27c93f', 
                  boxShadow: '0 0 10px #27c93f'
                }}></div>
                <span style={{fontWeight: '600', fontSize: '0.9rem', color: 'var(--text-bright)'}}>LAPORAN KUALITAS SISTEM</span>
              </div>

              <div style={{display: 'flex', flexDirection: 'column', gap: '1.2rem'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                    <span style={{fontSize: '1.2rem'}}>🛡️</span>
                    <div>
                      <div style={{fontSize: '0.75rem', color: 'var(--text-dim)'}}>Cakupan Pengujian</div>
                      <div style={{fontSize: '1rem', fontWeight: '600', color: 'var(--primary)'}}>98.5% Terverifikasi</div>
                    </div>
                  </div>
                </div>

                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                    <span style={{fontSize: '1.2rem'}}>🔍</span>
                    <div>
                      <div style={{fontSize: '0.75rem', color: 'var(--text-dim)'}}>Bug Terdeteksi & Diperbaiki</div>
                      <div style={{fontSize: '1rem', fontWeight: '600', color: 'var(--primary)'}}>1,242 Masalah Selesai</div>
                    </div>
                  </div>
                </div>

                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                    <span style={{fontSize: '1.2rem'}}>🚀</span>
                    <div>
                      <div style={{fontSize: '0.75rem', color: 'var(--text-dim)'}}>Status Deployment (CI/CD)</div>
                      <div style={{fontSize: '1rem', fontWeight: '600', color: '#27c93f'}}>Siap Diluncurkan</div>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{
                marginTop: '1.5rem', 
                padding: '0.8rem', 
                background: 'rgba(39, 201, 63, 0.1)', 
                borderRadius: '8px',
                textAlign: 'center',
                fontSize: '0.8rem',
                color: '#27c93f',
                fontWeight: '500',
                border: '1px solid rgba(39, 201, 63, 0.2)'
              }}>
                Aman untuk Produksi • {(new Date()).toLocaleDateString('id-ID')}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 968px) {
          #home .container {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-content {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-content p {
            margin-inline: auto;
          }
          .hero-btns {
            justify-content: center;
          }
          .hero-visual {
            max-width: 500px;
            margin: 2rem auto 0;
          }
        }
      `}} />
    </section>
  );
};

export default Hero;
