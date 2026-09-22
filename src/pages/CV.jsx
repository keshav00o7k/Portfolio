import { Link } from 'react-router-dom';
import { personalInfo, educationInfo, experienceList, projectList } from '../data/portfolioData';
import SkillsGrid from '../components/SkillsGrid.jsx';

const CV = () => {
  return (
    <div className="page__content">
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          marginBottom: '1.5rem',
        }}
      >
        <h1 className="page__title" style={{ margin: 0 }}>
          Curriculum Vitae
        </h1>
        <a
          href={personalInfo.resumePdf}
          download="Keshav_Goyal_Cv.pdf"
          className="btn btn--primary"
          style={{
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <i className="fas fa-download"></i> Download PDF
        </a>
      </div>

      {/* PDF Viewer */}
      <div
        style={{
          marginBottom: '2rem',
          border: '1px solid var(--global-border-color)',
          borderRadius: '8px',
          overflow: 'hidden',
          height: '480px',
          background: 'rgba(255,255,255,0.03)',
        }}
      >
        <iframe
          src={personalInfo.resumePdf}
          width="100%"
          height="100%"
          style={{ border: 'none' }}
          title="CV Preview"
        />
      </div>

      <h2>Education</h2>
      <ul>
        <li>
          <strong>{educationInfo.degree}</strong> ({educationInfo.timeline})
          <ul>
            <li>
              <em>{educationInfo.institution}</em>
            </li>
            <li>
              <strong>Core Coursework:</strong> {educationInfo.coursework.join(', ')}.
            </li>
          </ul>
        </li>
      </ul>

      <h2>Work Experience</h2>
      <ul>
        {experienceList.map((exp, idx) => (
          <li key={exp.id || idx} style={{ marginBottom: '1.2em' }}>
            <strong>
              {exp.role} — {exp.company}
            </strong>{' '}
            <em>({exp.duration})</em>
            {exp.subProjects ? (
              exp.subProjects.map((sp, spIdx) => (
                <div key={spIdx} style={{ margin: '0.4em 0 0.4em 0.8em' }}>
                  <p style={{ margin: '0.2em 0', fontWeight: 'bold' }}>• {sp.name}</p>
                  <ul>
                    {sp.highlights.map((h, hIdx) => (
                      <li key={hIdx}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))
            ) : (
              <ul>
                {exp.highlights.map((h, hIdx) => (
                  <li key={hIdx}>{h}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      <h2>Technical Skills</h2>
      <SkillsGrid />

      <h2>Featured Projects</h2>
      <ul>
        {projectList.map((item, idx) => (
          <li key={idx} style={{ marginBottom: '0.8em' }}>
            <strong>
              <Link to={`/projects/${item.slug}`}>{item.title}</Link>
            </strong>
            <p style={{ margin: '0.2rem 0', color: 'var(--global-text-color-light)' }}>
              {item.overview}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CV;
