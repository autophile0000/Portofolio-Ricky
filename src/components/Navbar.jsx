import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar" style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      padding: '1.5rem 0',
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
          Ricky Prasetyo<span style={{ color: 'var(--text-bright)' }}> </span>
        </div>
        <ul style={{
          display: 'flex',
          gap: '2.5rem',
          fontSize: '0.9rem',
          fontWeight: '500'
        }}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact" className="btn-primary" style={{ padding: '0.5rem 1.2rem' }}>Hire Me</a></li>
        </ul>
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
        .navbar {
          background: rgba(10, 10, 12, 0.8);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid var(--glass-border);
        }
        .navbar ul li a:hover {
          color: var(--primary);
        }
      `}} />
    </nav>
  );
};

export default Navbar;
