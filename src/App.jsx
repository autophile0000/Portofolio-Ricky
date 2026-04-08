import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer style={{
        padding: '3rem 0',
        textAlign: 'center',
        background: 'var(--bg-primary)',
        borderTop: '1px solid var(--glass-border)',
        fontSize: '0.9rem',
        color: 'var(--text-dim)'
      }}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Ricky Prasetyo. All rights reserved.</p>
          <div style={{marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '1.5rem'}}>
            <a href="#" style={{color: 'var(--text-main)'}}>LinkedIn</a>
            <a href="#" style={{color: 'var(--text-main)'}}>GitHub</a>
            <a href="#" style={{color: 'var(--text-main)'}}>Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
