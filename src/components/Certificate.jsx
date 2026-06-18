import React, { useState } from 'react';

// ─────────────────────────────────────────────
// DATA — Isi dengan sertifikat Anda
// Untuk menambah sertifikat: copy salah satu objek,
// ganti datanya, dan isi `pdf` dengan path ke file PDF
// di folder public/certificates/
// ─────────────────────────────────────────────

const CERTIFICATES = [
  {
    id: 1,
    title: 'Sertifikat Kompetensi',
    subtitle: 'Okupasi Junior Web Programmer – Pemrograman',
    issuer: 'BNSP / Lembaga Sertifikasi Profesi Universitas Gunadarma',
    date: '1 September 2022',
    category: 'Kompetensi',
    icon: '🛡️',
    color: 'linear-gradient(135deg, #dc2626, #b91c1c)',
    pdf: '/certificates/bnsp-kompetensi.pdf',
  },
  {
    id: 2,
    title: 'IT Talks by Paragon Hackathon Competition',
    subtitle: '"Get to Know Product Management in Tech Industry"',
    issuer: 'Paragon Technology And Innovation',
    date: '30 Juli 2022',
    category: 'Competition',
    icon: '🏆',
    color: 'linear-gradient(135deg, #f59e0b, #d97706)',
    pdf: '/certificates/paragon-it-talks.pdf',
  },
  {
    id: 3,
    title: 'ASEAN Data Science Explorers',
    subtitle: '2022 Enablement Session',
    issuer: 'ASEAN Foundation & SAP Southeast Asia',
    date: 'Jun 2022',
    category: 'Data Science',
    icon: '📊',
    color: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
    pdf: '/certificates/asean-data-science.pdf',
  },
  {
    id: 4,
    title: 'Sertifikat Webinar MSIB Kampus Merdeka',
    subtitle: '"Merdeka Belajar Kampus Merdeka Dalam Tatanan Normal Baru"',
    issuer: 'Universitas Gunadarma / Kampus Merdeka',
    date: '19 Februari 2022',
    category: 'Webinar',
    icon: '🎓',
    color: 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
    pdf: '/certificates/kampus-merdeka-msib.pdf',
  },
  {
    id: 5,
    title: 'Piagam Penghargaan Webinar Internship',
    subtitle: 'Peningkatan Kompetensi Mahasiswa Melalui Internship Di Yayasan Hasnur Centre',
    issuer: 'HMJ Fisika FMIPA – Universitas Negeri Medan (Unimed)',
    date: '12 Januari 2022',
    category: 'Penghargaan',
    icon: '🏅',
    color: 'linear-gradient(135deg, #10b981, #059669)',
    pdf: '/certificates/piagam-unimed-hasnur.pdf',
  },
  {
    id: 6,
    title: 'Sertifikat Pelatihan JavaScript',
    subtitle: 'Dasar Bahasa Pemrograman JavaScript (JavaScript Programming Language Fundamental)',
    issuer: 'Universitas Gunadarma',
    date: '29 Juni 2021',
    category: 'Pelatihan',
    icon: '💛',
    color: 'linear-gradient(135deg, #f59e0b, #ca8a04)',
    pdf: '/certificates/pelatihan-javascript.pdf',
  },
  {
    id: 7,
    title: 'Sertifikat Kelulusan Sarjana Muda',
    subtitle: 'Jurusan Sistem Informasi – Fakultas Ilmu Komputer dan Teknologi Informasi',
    issuer: 'Universitas Gunadarma',
    date: '5 Agustus 2021',
    category: 'Akademik',
    icon: '🎓',
    color: 'linear-gradient(135deg, #7c3aed, #4c1d95)',
    pdf: '/certificates/kelulusan-gunadarma.pdf',
  },
  // ── Tambahkan sertifikat baru di bawah ini ──
  // {
  //   id: 8,
  //   title: 'Nama Sertifikat',
  //   subtitle: '',
  //   issuer: 'Nama Penerbit',
  //   date: 'Bulan Tahun',
  //   category: 'Kategori',
  //   icon: '📄',
  //   color: 'linear-gradient(135deg, #06b6d4, #0284c7)',
  //   pdf: '/certificates/nama-file.pdf',
  // },
];

const CATEGORIES = ['All', 'Kompetensi', 'Competition', 'Data Science', 'Webinar', 'Penghargaan', 'Pelatihan', 'Akademik'];

// ─────────────────────────────────────────────
// SUB-COMPONENTS
// ─────────────────────────────────────────────

/** Modal untuk preview PDF */
const PdfModal = ({ cert, onClose }) => {
  if (!cert) return null;
  return (
    <div
      onClick={onClose}
      className="cert-modal-overlay"
    >
      <div
        onClick={e => e.stopPropagation()}
        className="cert-modal-inner"
      >
        {/* Modal Header */}
        <div style={{
          padding: '1.25rem 1.5rem',
          borderBottom: '1px solid var(--glass-border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexShrink: 0,
        }}>
          <div>
            <h3 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '0.25rem' }}>
              {cert.title}
            </h3>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>
              {cert.issuer} • {cert.date}
            </span>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            {cert.pdf && (
              <a
                href={cert.pdf}
                download
                style={{
                  padding: '0.45rem 1rem',
                  borderRadius: '8px',
                  background: 'var(--accent)',
                  color: '#fff',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}
              >
                ⬇ Download
              </a>
            )}
            <button
              onClick={onClose}
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid var(--glass-border)',
                color: 'var(--text-main)',
                fontSize: '1rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              ✕
            </button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div style={{ flex: 1, overflow: 'hidden', minHeight: '500px' }}>
          {cert.pdf ? (
            <iframe
              src={cert.pdf}
              title={cert.title}
              style={{ width: '100%', height: '100%', border: 'none', minHeight: '500px' }}
            />
          ) : (
            <div style={{
              height: '100%',
              minHeight: '400px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              color: 'var(--text-dim)',
            }}>
              <div style={{ fontSize: '4rem', opacity: 0.3 }}>📄</div>
              <p style={{ fontSize: '1rem', fontWeight: '500' }}>File PDF belum diunggah</p>
              <p style={{ fontSize: '0.85rem', opacity: 0.7, textAlign: 'center', maxWidth: '360px' }}>
                Letakkan file PDF di folder{' '}
                <code style={{
                  background: 'rgba(255,255,255,0.08)',
                  padding: '2px 8px',
                  borderRadius: '4px',
                  fontFamily: 'monospace',
                  color: 'var(--primary)',
                }}>
                  public/certificates/
                </code>{' '}
                lalu isi properti <code style={{ background: 'rgba(255,255,255,0.08)', padding: '2px 8px', borderRadius: '4px', fontFamily: 'monospace', color: 'var(--primary)' }}>pdf</code> di data sertifikat.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/** Kartu sertifikat */
const CertCard = ({ cert, onView }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--glass-bg)',
        border: '1px solid var(--glass-border)',
        borderRadius: '16px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered ? '0 20px 40px rgba(0,0,0,0.35)' : '0 2px 12px rgba(0,0,0,0.15)',
        borderColor: hovered ? 'rgba(255,255,255,0.15)' : 'var(--glass-border)',
        cursor: 'pointer',
      }}
      onClick={() => onView(cert)}
    >
      {/* Banner */}
      <div style={{
        height: '110px',
        background: cert.color,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '3rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative circles */}
        <div style={{
          position: 'absolute', width: '100px', height: '100px',
          borderRadius: '50%', background: 'rgba(255,255,255,0.08)',
          top: '-20px', right: '-20px',
        }} />
        <div style={{
          position: 'absolute', width: '60px', height: '60px',
          borderRadius: '50%', background: 'rgba(255,255,255,0.05)',
          bottom: '-10px', left: '20px',
        }} />
        <span style={{ position: 'relative', zIndex: 1 }}>{cert.icon}</span>

        {/* Category badge */}
        <span style={{
          position: 'absolute',
          top: '10px',
          left: '12px',
          fontSize: '0.65rem',
          padding: '3px 10px',
          borderRadius: '50px',
          background: 'rgba(0,0,0,0.3)',
          color: '#fff',
          fontWeight: '600',
          letterSpacing: '0.05em',
          backdropFilter: 'blur(4px)',
        }}>
          {cert.category}
        </span>

        {/* PDF status badge */}
        <span style={{
          position: 'absolute',
          top: '10px',
          right: '12px',
          fontSize: '0.65rem',
          padding: '3px 10px',
          borderRadius: '50px',
          background: cert.pdf
            ? 'rgba(16,185,129,0.25)'
            : 'rgba(100,100,100,0.3)',
          color: cert.pdf ? '#10b981' : '#888',
          border: `1px solid ${cert.pdf ? 'rgba(16,185,129,0.4)' : 'rgba(100,100,100,0.3)'}`,
          fontWeight: '600',
          backdropFilter: 'blur(4px)',
        }}>
          {cert.pdf ? '📄 PDF' : '⏳ Soon'}
        </span>
      </div>

      {/* Body */}
      <div style={{ padding: '1.25rem 1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{
          fontSize: '0.95rem',
          fontWeight: '700',
          lineHeight: 1.4,
          marginBottom: '0.3rem',
          color: 'var(--text-bright)',
        }}>
          {cert.title}
        </h3>
        {cert.subtitle && (
          <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginBottom: '0.5rem', fontStyle: 'italic' }}>
            {cert.subtitle}
          </p>
        )}
        <div style={{ marginTop: 'auto', paddingTop: '0.75rem' }}>
          <p style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: '600' }}>
            {cert.issuer}
          </p>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', marginTop: '0.2rem' }}>
            📅 {cert.date}
          </p>
        </div>
      </div>

      {/* View Button */}
      <div style={{
        padding: '0 1.5rem 1.25rem',
      }}>
        <button
          style={{
            width: '100%',
            padding: '0.6rem',
            borderRadius: '10px',
            border: '1px solid var(--glass-border)',
            background: hovered ? 'rgba(255,255,255,0.08)' : 'transparent',
            color: 'var(--text-main)',
            fontSize: '0.82rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.25s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            fontFamily: 'inherit',
          }}
        >
          {cert.pdf ? '🔍 Lihat Sertifikat' : '📂 Belum Ada File'}
        </button>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────

const Certificate = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedCert, setSelectedCert] = useState(null);

  const filtered = activeFilter === 'All'
    ? CERTIFICATES
    : CERTIFICATES.filter(c => c.category === activeFilter);

  const availableCategories = CATEGORIES.filter(cat =>
    cat === 'All' || CERTIFICATES.some(c => c.category === cat)
  );

  return (
    <>
      <section
        id="certificate"
        className="section-padding"
        style={{ position: 'relative', overflow: 'hidden', background: 'var(--bg-secondary)' }}
      >
        {/* Background glows */}
        <div style={{
          position: 'absolute', top: '5%', right: '-8%',
          width: '380px', height: '380px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '5%', left: '-8%',
          width: '320px', height: '320px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div className="container">
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
            <span style={{
              display: 'inline-block',
              fontSize: '0.8rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: '0.75rem',
              opacity: 0.8,
            }}>
              Licenses & Certifications
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.8rem)', marginBottom: '1rem', lineHeight: 1.2 }}>
              My <span className="gradient-text">Certificates</span>
            </h2>
            <p style={{
              color: 'var(--text-dim)',
              fontSize: 'clamp(0.9rem, 1.2vw, 1.05rem)',
              maxWidth: '540px',
              margin: '0 auto',
            }}>
              Sertifikasi dan lisensi yang telah saya raih sepanjang perjalanan karier dan pendidikan.
            </p>
          </div>

          {/* Stats row */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 'clamp(1.5rem, 5vw, 4rem)',
            marginBottom: 'clamp(2rem, 4vw, 3rem)',
            flexWrap: 'wrap',
          }}>
            {[
              { value: CERTIFICATES.length, label: 'Total Sertifikat' },
              { value: CERTIFICATES.filter(c => c.pdf).length, label: 'Tersedia PDF' },
              { value: [...new Set(CERTIFICATES.map(c => c.issuer))].length, label: 'Penerbit' },
            ].map(stat => (
              <div key={stat.label} style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                  fontWeight: '700',
                  background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  lineHeight: 1,
                }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginTop: '0.3rem' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Filter Buttons */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.75rem',
            flexWrap: 'wrap',
            marginBottom: 'clamp(2rem, 4vw, 3rem)',
          }}>
            {availableCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                style={{
                  padding: '0.45rem 1.1rem',
                  borderRadius: '50px',
                  border: activeFilter === cat
                    ? '1px solid var(--accent)'
                    : '1px solid var(--glass-border)',
                  background: activeFilter === cat ? 'var(--accent)' : 'transparent',
                  color: activeFilter === cat ? '#fff' : 'var(--text-dim)',
                  fontSize: '0.82rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontFamily: 'inherit',
                  fontWeight: activeFilter === cat ? '600' : '400',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(clamp(240px, 25vw, 300px), 1fr))',
            gap: 'clamp(1.25rem, 3vw, 2rem)',
          }}>
            {filtered.map(cert => (
              <CertCard key={cert.id} cert={cert} onView={setSelectedCert} />
            ))}
          </div>

          {/* Upload guide */}
          <div style={{
            marginTop: 'clamp(2.5rem, 5vw, 4rem)',
            padding: '1.5rem 2rem',
            background: 'rgba(255,255,255,0.02)',
            border: '1px dashed rgba(255,255,255,0.12)',
            borderRadius: '16px',
            textAlign: 'center',
          }}>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)', lineHeight: 1.8 }}>
              💡 <strong style={{ color: 'var(--text-main)' }}>Cara menambahkan PDF:</strong>{' '}
              Letakkan file PDF di folder{' '}
              <code style={{
                background: 'rgba(0,242,255,0.08)',
                color: 'var(--primary)',
                padding: '2px 8px',
                borderRadius: '4px',
                fontFamily: 'monospace',
              }}>
                public/certificates/
              </code>
              {' '}lalu isi properti{' '}
              <code style={{
                background: 'rgba(0,242,255,0.08)',
                color: 'var(--primary)',
                padding: '2px 8px',
                borderRadius: '4px',
                fontFamily: 'monospace',
              }}>
                pdf
              </code>
              {' '}di file <code style={{ fontFamily: 'monospace', color: 'var(--primary)' }}>Certificate.jsx</code>.
            </p>
          </div>
        </div>
      </section>

      {/* PDF Modal */}
      <PdfModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
    </>
  );
};

export default Certificate;
