import { useState } from 'react';
import { Link } from 'react-router-dom';
import { personalInfo, educationInfo, experienceList, projectList } from '../data/portfolioData';
import HeroCanvas from '../components/HeroCanvas.jsx';
import ImpactMetrics from '../components/ImpactMetrics.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import RevealSection from '../components/RevealSection.jsx';
import SkillsGrid from '../components/SkillsGrid.jsx';

const About = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback if clipboard API is unavailable
    }
  };

  return (
    <div className="page__content">
      {/* Hero Section */}
      <section
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem',
          marginBottom: '0.5rem',
        }}
      >
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              fontSize: '0.78rem',
              fontWeight: 600,
              color: 'var(--global-base-color)',
              marginBottom: '0.6rem',
            }}
          >
            <span className="pulse-dot" style={{ display: 'inline-block' }}></span>
            <span>{personalInfo.availability}</span>
          </div>

          <h1
            className="page__title"
            style={{
              marginTop: 0,
              marginBottom: '0.5rem',
              fontSize: '1.9rem',
              lineHeight: 1.2,
              letterSpacing: '-0.01em',
            }}
          >
            Full-Stack Developer &amp; Computer Vision Engineer
          </h1>

          <p style={{ fontSize: '1rem', lineHeight: '1.68', marginBottom: '1rem', color: 'var(--global-text-color)' }}>
            {personalInfo.summary}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', alignItems: 'center' }}>
            <a href="#featured-projects" className="btn-card btn-card--primary">
              View Featured Projects <i className="fas fa-arrow-down text-xs" aria-hidden="true"></i>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-card btn-card--outline"
            >
              <i className="fab fa-linkedin text-xs" aria-hidden="true"></i> LinkedIn
            </a>
          </div>
        </div>

        <div className="hidden md:block">
          <HeroCanvas />
        </div>
      </section>

      {/* Impact & Key Metrics */}
      <RevealSection delay={60}>
        <ImpactMetrics />
      </RevealSection>

      {/* Technical Skills */}
      <RevealSection delay={80}>
        <h2>Technical Skills</h2>
        <SkillsGrid />
      </RevealSection>

      {/* Education & Core Coursework */}
      <RevealSection delay={80}>
        <h2>Education</h2>
        <ul>
          <li>
            <strong>{educationInfo.degree}</strong> — {educationInfo.timeline}
            <br />
            <em>{educationInfo.institution}</em>
            {educationInfo.cgpa && (
              <span> · CGPA: {educationInfo.cgpa}</span>
            )}
            <p style={{ margin: '0.3em 0 0', fontSize: '0.9em', color: 'var(--global-text-color-light)' }}>
              <strong>Core Coursework:</strong> {educationInfo.coursework.join(', ')}.
            </p>
          </li>
        </ul>
      </RevealSection>

      {/* Experience Highlight */}
      <RevealSection delay={80}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.8rem', marginBottom: '0.75rem', borderBottom: '1px solid var(--global-border-color)', paddingBottom: '0.35rem' }}>
          <h2 style={{ margin: 0, borderBottom: 'none', paddingBottom: 0 }}>Experience</h2>
          <Link to="/experience" style={{ fontSize: '0.88rem', fontWeight: 600, textDecoration: 'none' }}>
            View full experience →
          </Link>
        </div>
        <div
          style={{
            position: 'relative',
            paddingLeft: '1.35rem',
            margin: '1rem 0 2rem',
            borderLeft: '2px solid var(--global-border-color)',
          }}
        >
          {experienceList.map((exp, idx) => (
            <div
              key={exp.id}
              style={{
                position: 'relative',
                paddingBottom: idx === experienceList.length - 1 ? 0 : '1.15rem',
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  left: '-1.73rem',
                  top: '0.32rem',
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: idx === 0 ? 'var(--global-base-color)' : 'var(--global-bg-color)',
                  border: `2px solid ${idx === 0 ? 'var(--global-base-color)' : 'var(--global-text-color-light)'}`,
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.25rem 1rem' }}>
                <span style={{ fontWeight: 700, fontSize: '0.96rem', color: 'var(--global-heading-color)' }}>
                  {exp.role} · <span style={{ color: 'var(--global-base-color)', fontWeight: 600 }}>{exp.company}</span>
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--global-text-color-light)' }}>
                  {exp.duration}
                </span>
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--global-text-color-light)', marginTop: '0.15rem' }}>
                {exp.type} · {exp.location}
              </div>
            </div>
          ))}
        </div>
      </RevealSection>

      {/* Featured Projects */}
      <RevealSection delay={80}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.8rem', marginBottom: '0.75rem', borderBottom: '1px solid var(--global-border-color)', paddingBottom: '0.35rem' }}>
          <h2 id="featured-projects" style={{ margin: 0, borderBottom: 'none', paddingBottom: 0 }}>
            Featured Projects
          </h2>
          <Link to="/projects" style={{ fontSize: '0.88rem', fontWeight: 600, textDecoration: 'none' }}>
            View all {projectList.length} projects →
          </Link>
        </div>
        <div className="projects-grid">
          {projectList
            .filter((proj) => proj.featured !== false)
            .map((proj, idx) => (
              <ProjectCard key={proj.slug} project={proj} index={idx + 1} headingLevel="h3" />
            ))}
        </div>
      </RevealSection>

      {/* Bottom Contact CTA (Clean Divider — No Box) */}
      <RevealSection delay={80}>
        <section
          style={{
            marginTop: '2.5rem',
            paddingTop: '1.75rem',
            borderTop: '1px solid var(--global-border-color)',
            textAlign: 'left',
          }}
        >
          <h2 style={{ marginTop: 0, marginBottom: '0.4rem', borderBottom: 'none', paddingBottom: 0 }}>
            Let&apos;s Work Together
          </h2>
          <p style={{ margin: '0 0 1rem', fontSize: '0.95rem', color: 'var(--global-text-color-light)', lineHeight: 1.6 }}>
            {personalInfo.availability}. Have a role, freelance project, or technical question? Feel free to reach out directly.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem', alignItems: 'center' }}>
            <a
              href={`mailto:${personalInfo.email}`}
              className="btn-card btn-card--primary"
            >
              <i className="fas fa-envelope" aria-hidden="true"></i> Email Me
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-card btn-card--outline"
            >
              <i className="fab fa-linkedin" aria-hidden="true"></i> LinkedIn
            </a>
            <a
              href={personalInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-card btn-card--outline"
            >
              <i className="fab fa-whatsapp" aria-hidden="true"></i> WhatsApp
            </a>
            <a
              href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
              className="btn-card btn-card--outline"
            >
              <i className="fas fa-phone" aria-hidden="true"></i> {personalInfo.phone}
            </a>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="btn-card btn-card--outline"
              style={{ cursor: 'pointer' }}
            >
              <i className={`fas ${copied ? 'fa-check' : 'fa-copy'}`} aria-hidden="true"></i>{' '}
              {copied ? 'Copied!' : `Copy ${personalInfo.email}`}
            </button>
          </div>
        </section>
      </RevealSection>
    </div>
  );
};

export default About;
