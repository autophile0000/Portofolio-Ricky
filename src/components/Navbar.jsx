import React, { useState, useEffect } from 'react';

// ─── Data ──────────────────────────────────────
const NAV_LINKS = [
  { name: 'Home',        href: '#home' },
  { name: 'About',       href: '#about' },
  { name: 'Skills',      href: '#skills' },
  { name: 'Projects',    href: '#projects' },
  { name: 'Certificate', href: '#certificate' },
];

// ─── Component ─────────────────────────────────
const Navbar = () => {
  const [isOpen,   setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        padding: scrolled ? '0.75rem 0' : '1.25rem 0',
        transition: 'padding 0.3s ease, background 0.3s ease',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
            fontWeight: '700',
            fontFamily: 'var(--font-heading)',
            color: 'var(--primary)',
            flexShrink: 0,
          }}
        >
          Ricky Prasetyo
        </a>

        {/* ── Desktop Nav ── */}
        <ul
          className="desktop-nav"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'clamp(1rem, 2vw, 1.8rem)',
            fontSize: '0.88rem',
            fontWeight: '500',
          }}
        >
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                style={{ color: 'var(--text-main)', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'var(--primary)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-main)'}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Hire Me — selalu tampil di desktop */}
        <a
          href="#contact"
          className="btn-primary desktop-hireme"
          style={{ padding: '0.5rem 1.2rem', fontSize: '0.88rem', flexShrink: 0 }}
        >
          Hire Me
        </a>

        {/* ── Hamburger Toggle ── */}
        <button
          className="mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          style={{
            display: 'none',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '5px',
            width: '36px',
            height: '36px',
            padding: '4px',
            flexShrink: 0,
            zIndex: 1100,
          }}
        >
          <span style={{
            display: 'block',
            width: '22px', height: '2px',
            background: 'var(--primary)',
            borderRadius: '2px',
            transition: '0.3s',
            transform: isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
          }} />
          <span style={{
            display: 'block',
            width: '22px', height: '2px',
            background: 'var(--primary)',
            borderRadius: '2px',
            transition: '0.3s',
            opacity: isOpen ? 0 : 1,
          }} />
          <span style={{
            display: 'block',
            width: '22px', height: '2px',
            background: 'var(--primary)',
            borderRadius: '2px',
            transition: '0.3s',
            transform: isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
          }} />
        </button>
      </div>

      {/* ── Mobile Full-Screen Menu ── */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(10, 10, 12, 0.97)',
          backdropFilter: 'blur(20px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2.5rem',
          zIndex: 1050,
          transition: 'opacity 0.35s ease, visibility 0.35s ease',
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? 'visible' : 'hidden',
          pointerEvents: isOpen ? 'auto' : 'none',
        }}
      >
        {/* Close area */}
        <button
          onClick={closeMenu}
          aria-label="Close menu"
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            fontSize: '1.5rem',
            color: 'var(--text-dim)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          ✕
        </button>

        {NAV_LINKS.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={closeMenu}
            style={{
              fontSize: 'clamp(1.5rem, 5vw, 2rem)',
              fontWeight: '600',
              color: 'var(--text-bright)',
              letterSpacing: '0.02em',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--primary)'}
            onMouseLeave={e => e.target.style.color = 'var(--text-bright)'}
          >
            {link.name}
          </a>
        ))}

        <a
          href="#contact"
          className="btn-primary"
          onClick={closeMenu}
          style={{ padding: '0.9rem 2.5rem', fontSize: '1.1rem' }}
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
