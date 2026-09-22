import { personalInfo, educationInfo, projectList } from '../data/portfolioData';
import ImpactMetrics from '../components/ImpactMetrics.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import SkillsGrid from '../components/SkillsGrid.jsx';

const About = () => {
  return (
    <div className="page__content">
      {/* Intro Summary */}
      <p style={{ fontSize: '1.05em', lineHeight: '1.7' }}>
        {personalInfo.summary}
      </p>

      {/* Impact & Key Metrics */}
      <ImpactMetrics />

      {/* Technical Skills */}
      <h2>Technical Skills</h2>
      <SkillsGrid />

      {/* Education & Core Coursework */}
      <h2>Education</h2>
      <ul>
        <li>
          <strong>{educationInfo.degree}</strong> — {educationInfo.timeline}
          <br />
          <em>{educationInfo.institution}</em>
          <p style={{ margin: '0.3em 0 0', fontSize: '0.9em', color: 'var(--global-text-color-light)' }}>
            <strong>Core Coursework:</strong> {educationInfo.coursework.join(', ')}.
          </p>
        </li>
      </ul>

      {/* Featured Projects */}
      <h2>Featured Projects</h2>
      <div>
        {projectList.map((proj, idx) => (
          <ProjectCard key={proj.slug} project={proj} index={idx + 1} />
        ))}
      </div>
    </div>
  );
};

export default About;
