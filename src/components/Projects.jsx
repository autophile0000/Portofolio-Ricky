import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Auto-Sentinel Framework',
      description: 'Framework kustom berbasis Playwright yang dilengkapi dengan pengujian regresi visual dan aksesibilitas otomatis.',
      tags: ['Playwright', 'TypeScript', 'Axe-core'],
      type: 'Automation'
    },
    {
      title: 'Perf-Load Suite',
      description: 'Instrumen pengujian performa terdistribusi yang mampu mensimulasikan ribuan pengguna bersamaan untuk menguji skalabilitas sistem.',
      tags: ['JMeter', 'Docker', 'AWS'],
      type: 'Performance'
    },
    {
      title: 'Guardian CI/CD Pipeline',
      description: 'Penyusunan pipeline CI/CD dengan quality gates otomatis dan pelaporan Slack secara real-time untuk mempercepat siklus rilis.',
      tags: ['GitHub Actions', 'Docker', 'Slack API'],
      type: 'DevOps'
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <div style={{textAlign: 'center', marginBottom: 'clamp(2rem, 5vw, 4rem)'}}>
          <h2 style={{fontSize: 'clamp(2rem, 5vw, 2.5rem)', marginBottom: '1rem'}}>Featured <span className="gradient-text">Portfolio</span></h2>
          <p style={{color: 'var(--text-dim)', fontSize: 'clamp(0.9rem, 1.2vw, 1rem)'}}>
            Beberapa proyek pengujian dan otomasi yang pernah saya kembangkan.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(280px, 30vw, 350px), 1fr))',
          gap: 'clamp(1.5rem, 5vw, 2.5rem)'
        }}>
          {projects.map((project, index) => (
            <div key={index} className="glass-card" style={{
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{
                height: '200px',
                background: 'var(--bg-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3rem',
                borderBottom: '1px solid var(--glass-border)'
              }}>
                {project.type === 'Automation' ? '🤖' : project.type === 'Performance' ? '⚡' : '🚀'}
              </div>
              <div style={{padding: '2rem'}}>
                <h3 style={{fontSize: '1.4rem', marginBottom: '1rem'}}>{project.title}</h3>
                <p style={{color: 'var(--text-dim)', marginBottom: '1.5rem', fontSize: '0.95rem', lineHeight: '1.6'}}>
                  {project.description}
                </p>
                <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginTop: 'auto'}}>
                  {project.tags.map((tag, i) => (
                    <span key={i} style={{
                      fontSize: '0.75rem',
                      color: 'var(--text-main)',
                      opacity: 0.8,
                      padding: '2px 8px',
                      border: '1px solid var(--glass-border)',
                      borderRadius: '4px'
                    }}>#{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
