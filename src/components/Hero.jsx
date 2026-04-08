import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="section-padding" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '8rem'
    }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: '1.2fr 1fr',
        gap: '4rem',
        alignItems: 'center'
      }}>
        <div className="hero-content fade-in">
          <h2 style={{
            fontSize: '1.2rem',
            color: 'var(--primary)',
            letterSpacing: '2px',
            marginBottom: '1rem',
            fontWeight: '600'
          }}>GUARDIAN OF QUALITY</h2>
          <h1 style={{
            fontSize: 'max(4rem, 5vw)',
            lineHeight: '1.1',
            marginBottom: '1.5rem',
            fontWeight: '700'
          }}>
            Ensuring <span className="gradient-text">Excellence</span> In Every Pixel.
          </h1>
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--text-dim)',
            marginBottom: '2.5rem',
            maxWidth: '500px'
          }}>
            Hi, I'm Ricky Prasetyo. A passionate QA Engineer dedicated to breaking software so you can build it better. Specializing in automation frameworks and robust testing strategies.
          </p>
          <div style={{display: 'flex', gap: '1.5rem'}}>
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="#contact" className="glass-card" style={{
              padding: '0.8rem 1.5rem',
              borderRadius: '12px',
              fontWeight: '600'
            }}>Contact Me</a>
          </div>
        </div>
        <div className="hero-visual fade-in" style={{
          position: 'relative',
          animationDelay: '0.2s'
        }}>
          <div style={{
            width: '120%',
            aspectRatio: '1',
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
            border: '1px solid rgba(255,255,255,0.1)'
          }}>
            {/* Window Header */}
            <div style={{
              background: 'rgba(255,255,255,0.05)',
              padding: '0.8rem 1.2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              borderBottom: '1px solid rgba(255,255,255,0.05)'
            }}>
              <div style={{width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56'}}></div>
              <div style={{width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e'}}></div>
              <div style={{width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f'}}></div>
              <div style={{marginLeft: '1rem', fontSize: '0.7rem', color: 'var(--text-dim)', letterSpacing: '1px'}}>METRICS.YAML</div>
            </div>
            
            {/* Code Content */}
            <div style={{
              padding: '2rem',
              textAlign: 'left',
              fontFamily: 'var(--mono)',
              fontSize: '0.95rem',
              lineHeight: '1.8'
            }}>
              <div><span style={{color: 'var(--text-dim)'}}>1</span> <span style={{color: '#6272a4'}}>Quality Assurance Metrics</span></div>
              <div><span style={{color: 'var(--text-dim)'}}>2</span> <span style={{color: '#ff79c6'}}>metrics</span>:</div>
              <div style={{paddingLeft: '1.5rem'}}>
                <span style={{color: 'var(--text-dim)'}}>3</span> <span style={{color: '#50fa7b'}}>test_coverage</span>: <span style={{color: '#bd93f9'}}>98.5%</span>
              </div>
              <div style={{paddingLeft: '1.5rem'}}>
                <span style={{color: 'var(--text-dim)'}}>4</span> <span style={{color: '#50fa7b'}}>bugs_found</span>: <span style={{color: '#bd93f9'}}>1242</span>
              </div>
              <div style={{paddingLeft: '1.5rem'}}>
                <span style={{color: 'var(--text-dim)'}}>5</span> <span style={{color: '#50fa7b'}}>ci_cd_status</span>: <span style={{color: '#f1fa8c'}}>"passing"</span>
              </div>
              <div style={{paddingLeft: '1.5rem'}}>
                <span style={{color: 'var(--text-dim)'}}>6</span> <span style={{color: '#50fa7b'}}>last_scan</span>: <span style={{color: '#f1fa8c'}}>"{(new Date()).toLocaleDateString()}"</span>
              </div>
              <div><span style={{color: 'var(--text-dim)'}}>7</span> <span style={{color: '#6272a4'}}>System Status: Ready</span></div>
              <div style={{marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <div style={{width: '8px', height: '8px', borderRadius: '50%', background: '#27c93f', boxShadow: '0 0 10px #27c93f'}}></div>
                <span style={{fontSize: '0.8rem', color: '#27c93f'}}>SYSTEMS ONLINE</span>
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
          .hero-content p {
            margin-inline: auto;
          }
          .hero-content div {
            justify-content: center;
          }
        }
      `}} />
    </section>
  );
};

export default Hero;
