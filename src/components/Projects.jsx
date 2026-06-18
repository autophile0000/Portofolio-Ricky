import React, { useState } from 'react';

// ─────────────────────────────────────────────
// DATA LAYER — di luar komponen agar tidak
// di-recreate setiap render
// ─────────────────────────────────────────────

const PROJECTS_DATA = [
  {
    title: 'SuperApp – Badan Gizi Nasional',
    company: 'CODE.ID',
    period: 'Nov 2025 – Present',
    description:
      'Quality Assurance pada pengembangan SuperApp milik Badan Gizi Nasional. Melakukan pengujian fungsional, regression testing, dan koordinasi dengan tim developer untuk memastikan kualitas aplikasi.',
    tags: [
      'Manual Testing', 'Smoke Testing', 'Sanity Testing',
      'Regression Testing', 'Functional Testing', 'Bug Reporting',
      'SIT', 'E2E Testing',
    ],
    type: 'Mobile & Web',
    icon: '🏛️',
    highlight: true,
    status: 'Current',
  },
  {
    title: 'Portal Mitra – Badan Gizi Nasional',
    company: 'CODE.ID',
    period: 'Sep 2025 – Nov 2025',
    description:
      'Pengujian Portal Mitra milik Badan Gizi Nasional. Merancang test case, mengeksekusi skenario pengujian, dan membuat laporan bug secara mendetail untuk meningkatkan kualitas portal.',
    tags: [
      'Test Case Design', 'Smoke Testing', 'Sanity Testing',
      'Bug Reporting', 'SIT', 'Regression Testing',
      'Functional Testing', 'E2E Testing',
    ],
    type: 'Web',
    icon: '🌐',
    highlight: false,
    status: 'Completed',
  },
  {
    title: 'Volta App',
    company: 'CODE.ID',
    period: 'Aug 2025 – Sep 2025',
    description:
      'QA Tester untuk aplikasi Volta, berlokasi di South Jakarta. Melaksanakan pengujian end-to-end pada fitur-fitur utama aplikasi dan memastikan user experience berjalan optimal.',
    tags: [
      'Test Case Design', 'Smoke Testing', 'Sanity Testing',
      'Bug Reporting', 'SIT', 'Regression Testing',
      'Functional Testing', 'E2E Testing', 'Automation Testing',
    ],
    type: 'Mobile',
    icon: '⚡',
    highlight: false,
    status: 'Completed',
  },
  {
    title: 'OctoSmart – CIMB NIAGA',
    company: 'Bumi Amartha Teknologi Mandiri',
    period: 'Aug 2024 – Apr 2025',
    description:
      'Pengujian fitur web OctoSmart milik CIMB NIAGA pada fase SIT, UAT, dan Beta. Monitoring application logs, verifikasi JSON data request/response, koordinasi dengan developer dan Product Owner.',
    tags: [
      'Test Case Design', 'Smoke Testing', 'Sanity Testing',
      'Bug Reporting', 'SIT', 'Regression Testing',
      'Functional Testing', 'E2E Testing', 'API Testing',
    ],
    type: 'Web',
    icon: '🏦',
    highlight: true,
    status: 'Completed',
  },
  {
    title: 'TROBEN Platform',
    company: 'TROBEN',
    period: 'Nov 2022 – Aug 2024',
    description:
      'QA Engineer selama 1 tahun 10 bulan. Bertanggung jawab atas test planning, pembuatan test case, eksekusi pengujian manual & API testing, bug verification, dan pelaporan hasil test kepada manajemen.',
    tags: [
      'Test Case Design', 'Smoke Testing', 'Sanity Testing',
      'Bug Reporting', 'SIT', 'Regression Testing',
      'Functional Testing', 'E2E Testing', 'API Testing', 'Automation Testing',
    ],
    type: 'Mobile & Web',
    icon: '🚛',
    highlight: false,
    status: 'Completed',
  },
  {
    title: 'Web App – Yayasan Hasnur Centre',
    company: 'YHC (Kampus Merdeka)',
    period: 'Aug 2021 – Dec 2021',
    description:
      'Magang sebagai Programmer – mengembangkan front-end dengan HTML, CSS, JavaScript & Bootstrap 3, backend dengan Laravel framework, implementasi keamanan CSRF & validasi input, serta integrasi API data karyawan.',
    tags: ['Laravel', 'Bootstrap', 'JavaScript', 'PHP', 'API Integration'],
    type: 'Web',
    icon: '💻',
    highlight: false,
    status: 'Internship',
  },
];

const FILTERS = ['All', 'Mobile & Web', 'Web', 'Mobile'];

const TYPE_COLORS = {
  'Mobile & Web': 'linear-gradient(135deg, #6366f1, #8b5cf6)',
  Web: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
  Mobile: 'linear-gradient(135deg, #10b981, #059669)',
};

const STATUS_COLORS = {
  Current:    { bg: 'rgba(16, 185, 129, 0.15)', color: '#10b981', border: 'rgba(16, 185, 129, 0.3)' },
  Completed:  { bg: 'rgba(99, 102, 241, 0.15)', color: '#818cf8', border: 'rgba(99, 102, 241, 0.3)' },
  Internship: { bg: 'rgba(245, 158, 11, 0.15)',  color: '#fbbf24', border: 'rgba(245, 158, 11, 0.3)' },
};

const STATUS_LABEL = {
  Current: '🟢 Current',
  Internship: '🎓 Internship',
  Completed: '✅ Done',
};

// ─────────────────────────────────────────────
// SUB-COMPONENTS
// ─────────────────────────────────────────────

/** Tombol filter (All / Mobile & Web / Web / Mobile) */
const FilterButton = ({ label, isActive, onClick }) => (
  <button
    onClick={onClick}
    style={{
      padding: '0.5rem 1.25rem',
      borderRadius: '50px',
      border: isActive ? '1px solid var(--accent)' : '1px solid var(--glass-border)',
      background: isActive ? 'var(--accent)' : 'transparent',
      color: isActive ? '#fff' : 'var(--text-dim)',
      fontSize: '0.85rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontFamily: 'inherit',
      fontWeight: isActive ? '600' : '400',
    }}
  >
    {label}
  </button>
);

/** Badge status di pojok kanan atas banner kartu */
const StatusBadge = ({ status }) => {
  const sc = STATUS_COLORS[status] || STATUS_COLORS.Completed;
  return (
    <span
      style={{
        position: 'absolute',
        top: '12px',
        right: '12px',
        fontSize: '0.7rem',
        padding: '3px 10px',
        borderRadius: '50px',
        background: sc.bg,
        color: sc.color,
        border: `1px solid ${sc.border}`,
        fontWeight: '600',
        letterSpacing: '0.05em',
        backdropFilter: 'blur(4px)',
        zIndex: 2,
      }}
    >
      {STATUS_LABEL[status] ?? '✅ Done'}
    </span>
  );
};

/** Daftar tag #xxx di bagian bawah kartu */
const TagList = ({ tags }) => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
    {tags.map((tag) => (
      <span
        key={tag}
        style={{
          fontSize: '0.72rem',
          color: 'var(--text-main)',
          opacity: 0.75,
          padding: '3px 10px',
          border: '1px solid var(--glass-border)',
          borderRadius: '4px',
          background: 'rgba(255,255,255,0.03)',
        }}
      >
        #{tag}
      </span>
    ))}
  </div>
);

/** Satu kartu proyek — hover dikelola dengan useState (React-idiomatic) */
const ProjectCard = ({ project }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="glass-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'default',
        border: project.highlight
          ? '1px solid rgba(99,102,241,0.35)'
          : '1px solid var(--glass-border)',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered ? '0 20px 40px rgba(0,0,0,0.3)' : '',
      }}
    >
      {/* Banner */}
      <div
        style={{
          height: '130px',
          background: TYPE_COLORS[project.type] ?? TYPE_COLORS.Web,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '3.5rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Glowy ring */}
        <div
          style={{
            position: 'absolute',
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.08)',
            top: '-20px',
            right: '-20px',
          }}
        />
        <span style={{ position: 'relative', zIndex: 1 }}>{project.icon}</span>
        <StatusBadge status={project.status} />
      </div>

      {/* Body */}
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        {/* Company & Period */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '0.6rem',
          }}
        >
          <span style={{ fontSize: '0.75rem', color: 'var(--accent)', fontWeight: '600', opacity: 0.9 }}>
            {project.company}
          </span>
          <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)', opacity: 0.7 }}>
            {project.period}
          </span>
        </div>

        <h3 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', lineHeight: 1.3, fontWeight: '700' }}>
          {project.title}
        </h3>

        <p
          style={{
            color: 'var(--text-dim)',
            marginBottom: '1.25rem',
            fontSize: '0.88rem',
            lineHeight: '1.65',
            flex: 1,
          }}
        >
          {project.description}
        </p>

        <TagList tags={project.tags} />
      </div>
    </div>
  );
};

/** Tombol CTA LinkedIn di bawah grid */
const LinkedInCTA = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div style={{ textAlign: 'center', marginTop: 'clamp(2.5rem, 5vw, 4rem)' }}>
      <a
        href="https://www.linkedin.com/in/ricky-prasetyo/"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.6rem',
          padding: '0.8rem 2rem',
          borderRadius: '50px',
          background: 'linear-gradient(135deg, #0077b5, #00a0dc)',
          color: '#fff',
          textDecoration: 'none',
          fontWeight: '600',
          fontSize: '0.9rem',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          boxShadow: hovered
            ? '0 8px 30px rgba(0,119,181,0.5)'
            : '0 4px 20px rgba(0,119,181,0.3)',
          transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
        Lihat Profil LinkedIn Lengkap
      </a>
    </div>
  );
};

// ─────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered =
    activeFilter === 'All'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.type === activeFilter);

  return (
    <section id="projects" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background decoration */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          right: '-10%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '-10%',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
          <span
            style={{
              display: 'inline-block',
              fontSize: '0.8rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: '0.75rem',
              opacity: 0.8,
            }}
          >
            Work Experience
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.8rem)', marginBottom: '1rem', lineHeight: 1.2 }}>
            Featured <span className="gradient-text">Portfolio</span>
          </h2>
          <p
            style={{
              color: 'var(--text-dim)',
              fontSize: 'clamp(0.9rem, 1.2vw, 1.05rem)',
              maxWidth: '560px',
              margin: '0 auto',
            }}
          >
            Proyek dan pengalaman QA nyata dari berbagai perusahaan — mulai dari fintech perbankan, logistik, hingga aplikasi nasional.
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.75rem',
            flexWrap: 'wrap',
            marginBottom: 'clamp(2rem, 4vw, 3rem)',
          }}
        >
          {FILTERS.map((f) => (
            <FilterButton
              key={f}
              label={f}
              isActive={activeFilter === f}
              onClick={() => setActiveFilter(f)}
            />
          ))}
        </div>

        {/* Project Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(clamp(280px, 30vw, 360px), 1fr))',
            gap: 'clamp(1.25rem, 3vw, 2rem)',
          }}
        >
          {filtered.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {/* LinkedIn CTA */}
        <LinkedInCTA />
      </div>
    </section>
  );
};

export default Projects;
