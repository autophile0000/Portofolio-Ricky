import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      padding: scrolled ? '1rem 0' : '1.5rem 0',
      transition: 'var(--transition)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div className="logo" style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          fontFamily: 'var(--font-heading)',
          color: 'var(--primary)'
        }}>
          Ricky Prasetyo<span style={{ color: 'var(--text-bright)' }}></span>
        </div>

        {/* Desktop Nav */}
        <ul className="desktop-nav" style={{
          display: 'flex',
          gap: '2.5rem',
          fontSize: '0.9rem',
          fontWeight: '500'
        }}>
          {navLinks.map((link) => (
            <li key={link.name}><a href={link.href}>{link.name}</a></li>
          ))}
          <li><a href="#contact" className="btn-primary" style={{ padding: '0.5rem 1.2rem' }}>Hire Me</a></li>
        </ul>

        {/* Mobile Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          style={{
            display: 'none',
            flexDirection: 'column',
            gap: '6px',
            zIndex: 1001
          }}
        >
          <span style={{
            width: '25px',
            height: '2px',
            background: 'var(--primary)',
            transition: 'var(--transition)',
            transform: isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
          }}></span>
          <span style={{
            width: '25px',
            height: '2px',
            background: 'var(--primary)',
            transition: 'var(--transition)',
            opacity: isOpen ? 0 : 1
          }}></span>
          <span style={{
            width: '25px',
            height: '2px',
            background: 'var(--primary)',
            transition: 'var(--transition)',
            transform: isOpen ? 'rotate(-45deg) translate(6px, -7px)' : 'none'
          }}></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isOpen ? 'active' : ''}`} style={{
        position: 'fixed',
        top: 0,
        right: 0,
        width: '100%',
        height: '100vh',
        background: 'rgba(10, 10, 12, 0.98)',
        backdropFilter: 'blur(20px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2rem',
        zIndex: 1000,
        transition: '0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
        visibility: isOpen ? 'visible' : 'hidden'
      }}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            style={{ fontSize: '1.5rem', fontWeight: '600' }}
          >
            {link.name}
          </a>
        ))}
        <a
          href="#contact"
          className="btn-primary"
          onClick={() => setIsOpen(false)}
          style={{ padding: '1rem 2rem', fontSize: '1.2rem' }}
        >
          Hire Me
        </a>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .navbar {
          background: transparent;
        }
        .navbar.scrolled {
          background: rgba(10, 10, 12, 0.8);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--glass-border);
        }
        .navbar ul li a:hover {
          color: var(--primary);
        }
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
        }
      `}} />
    </nav>
  );
};

export default Navbar;
