import { experienceList } from '../data/portfolioData';

const Experience = () => {
  return (
    <div className="page__content">
      <h1 className="page__title">Work Experience</h1>

      {experienceList.map((exp, idx) => (
        <div key={exp.id || idx} style={{ marginBottom: '2.5em' }}>
          <h2 style={{ marginBottom: '0.2em' }}>
            {exp.role} — {exp.company}
          </h2>
          <p style={{ margin: '0 0 0.8em', color: 'var(--global-text-color-light)', fontStyle: 'italic' }}>
            {exp.type} · {exp.location} · {exp.duration}
          </p>

          {/* Subprojects or direct highlights */}
          {exp.subProjects ? (
            exp.subProjects.map((sp, spIdx) => (
              <div key={spIdx} style={{ marginBottom: '1.4em' }}>
                <h3 style={{ margin: '0.8em 0 0.3em', fontSize: '1.05em' }}>
                  • {sp.name}
                </h3>

                {/* Live URLs */}
                {sp.liveUrl && (
                  <p style={{ margin: '0 0 0.4em', fontSize: '0.85em' }}>
                    <a href={sp.liveUrl} target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-arrow-up-right-from-square"></i> Live Platform: {sp.liveUrl}
                    </a>
                  </p>
                )}

                {sp.liveUrls && (
                  <p style={{ margin: '0 0 0.4em', fontSize: '0.85em' }}>
                    <i className="fas fa-arrow-up-right-from-square"></i> Live Portals:{' '}
                    {sp.liveUrls.map((link, lIdx) => (
                      <span key={lIdx}>
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                          {link.label}
                        </a>
                        {lIdx < sp.liveUrls.length - 1 ? ' | ' : ''}
                      </span>
                    ))}
                  </p>
                )}

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

          <p style={{ margin: '0.5em 0 0' }}>
            <strong>Tech Stack:</strong>{' '}
            {exp.techStack.map((tech, tIdx) => (
              <code key={tIdx} style={{ marginRight: '5px' }}>
                {tech}
              </code>
            ))}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Experience;
