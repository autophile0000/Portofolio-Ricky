import React from 'react';

const About = () => {
  const stats = [
    { value: '3+', label: 'Tahun Pengalaman' },
    { value: '50+', label: 'Proyek Selesai' },
    { value: '1,242', label: 'Bug Ditemukan' },
    { value: '98%', label: 'Kepuasan Klien' },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="about-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)',
          gap: '4rem',
          alignItems: 'center'
        }}>
          {/* Left: Stats Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1.5rem'
          }}>
            {stats.map((stat, index) => (
              <div key={index} className="glass-card" style={{
                padding: '2rem',
                textAlign: 'center'
              }}>
                <div style={{
                  fontSize: 'clamp(2rem, 5vw, 2.8rem)',
                  fontWeight: '700',
                  background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  lineHeight: 1,
                  marginBottom: '0.5rem'
                }}>{stat.value}</div>
                <div style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-dim)',
                  fontWeight: '500'
                }}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Right: Bio */}
          <div>
            <h2 style={{
              fontSize: 'clamp(0.85rem, 1.5vw, 1rem)',
              color: 'var(--primary)',
              letterSpacing: '2px',
              marginBottom: '0.8rem',
              fontWeight: '600'
            }}>TENTANG SAYA</h2>
            <h3 style={{
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              marginBottom: '1.5rem',
              lineHeight: '1.2'
            }}>
              Passionate{' '}
              <span className="gradient-text">QA Engineer</span>
            </h3>
            <p style={{
              color: 'var(--text-dim)',
              lineHeight: '1.9',
              marginBottom: '1.2rem',
              fontSize: '1rem'
            }}>
              Saya adalah seorang <strong style={{color: 'var(--text-main)'}}>Software Quality Assurance Engineer</strong> dengan pengalaman dalam merancang dan mengimplementasikan strategi pengujian yang komprehensif untuk berbagai jenis produk digital.
            </p>
            <p style={{
              color: 'var(--text-dim)',
              lineHeight: '1.9',
              marginBottom: '2rem',
              fontSize: '1rem'
            }}>
              Keahlian saya mencakup <strong style={{color: 'var(--text-main)'}}>automation testing, performance testing,</strong> dan integrasi pipeline <strong style={{color: 'var(--text-main)'}}>CI/CD</strong> — semua bertujuan untuk memastikan setiap produk yang dirilis memenuhi standar kualitas tertinggi.
            </p>

            <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
              <a href="#contact" className="btn-primary">Hubungi Saya</a>
              <a href="#skills" className="glass-card" style={{
                padding: '0.8rem 1.5rem',
                borderRadius: '12px',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center'
              }}>Lihat Keahlian</a>
            </div>
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 968px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}} />
    </section>
  );
};

export default About;
