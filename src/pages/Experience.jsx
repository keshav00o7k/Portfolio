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

          <div className="flex flex-wrap items-center gap-1.5 mt-2 text-left">
            <span className="text-xs font-semibold text-[var(--global-text-color)] mr-1">
              Tech Stack:
            </span>
            {exp.techStack.map((tech, tIdx) => (
              <span
                key={tIdx}
                className="text-[0.72rem] font-medium px-2 py-0.5 rounded-md border border-[var(--global-border-color)] bg-[var(--global-code-background-color)] text-[var(--global-base-color)] inline-flex items-center"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
