import React from 'react';

const Skills = () => {
  const skills = [
    { title: 'Automation', tools: ['Playwright', 'Selenium', 'Cypress', 'Appium'], icon: '⚡' },
    { title: 'Frameworks', tools: ['JUnit', 'TestNG', 'PyTest', 'Robot'], icon: '🏗️' },
    { title: 'CI/CD', tools: ['Jenkins', 'GitHub Actions', 'GitLab CI'], icon: '🔄' },
    { title: 'Performance', tools: ['JMeter', 'k6', 'Lighthouse'], icon: '📈' },
    { title: 'API Testing', tools: ['Postman', 'RestAssured', 'SoapUI'], icon: '🔗' },
    { title: 'Management', tools: ['Jira', 'TestRail', 'Zephyr'], icon: '📋' },
  ];

  return (
    <section id="skills" className="section-padding" style={{background: 'var(--bg-secondary)'}}>
      <div className="container">
        <div style={{textAlign: 'center', marginBottom: 'clamp(2rem, 5vw, 4rem)'}}>
          <h2 style={{fontSize: 'clamp(2rem, 5vw, 2.5rem)', marginBottom: '1rem'}}>Technical <span className="gradient-text">Arsenal</span></h2>
          <p style={{color: 'var(--text-dim)', fontSize: 'clamp(0.9rem, 1.2vw, 1rem)'}}>Tools and technologies I use to maintain high quality standards.</p>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(250px, 30vw, 300px), 1fr))',
          gap: 'clamp(1rem, 3vw, 2rem)'
        }}>
          {skills.map((skill, index) => (
            <div key={index} className="glass-card" style={{padding: '2rem'}}>
              <div style={{fontSize: '2rem', marginBottom: '1.5rem'}}>{skill.icon}</div>
              <h3 style={{fontSize: '1.5rem', marginBottom: '1rem'}}>{skill.title}</h3>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.8rem'}}>
                {skill.tools.map((tool, i) => (
                  <span key={i} style={{
                    padding: '0.4rem 1rem',
                    background: 'var(--bg-accent)',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    border: '1px solid var(--glass-border)',
                    color: 'var(--primary)'
                  }}>
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
