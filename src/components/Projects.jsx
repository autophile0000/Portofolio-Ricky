import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Auto-Sentinel Framework',
      description: 'A custom Playwright-based framework with automated visual regression and accessibility testing.',
      tags: ['Playwright', 'TypeScript', 'Axe-core'],
      type: 'Automation'
    },
    {
      title: 'Perf-Load Suite',
      description: 'Distributed performance testing suite capable of simulating 10k concurrent users.',
      tags: ['JMeter', 'Docker', 'AWS'],
      type: 'Performance'
    },
    {
      title: 'Guardian CI/CD Pipeline',
      description: 'Automated quality gates integrated into GitHub Actions with real-time Slack reporting.',
      tags: ['GitHub Actions', 'Docker', 'Slack API'],
      type: 'DevOps'
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <div style={{textAlign: 'center', marginBottom: 'clamp(2rem, 5vw, 4rem)'}}>
          <h2 style={{fontSize: 'clamp(2rem, 5vw, 2.5rem)', marginBottom: '1rem'}}>Selected <span className="gradient-text">Work</span></h2>
          <p style={{color: 'var(--text-dim)', fontSize: 'clamp(0.9rem, 1.2vw, 1rem)'}}>A showcase of my recent automation and testing projects.</p>
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
                <p style={{color: 'var(--text-dim)', marginBottom: '1.5rem', fontSize: '0.95rem'}}>
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
