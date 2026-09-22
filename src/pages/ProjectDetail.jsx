import { useParams, Link } from 'react-router-dom';
import { projectList } from '../data/portfolioData';

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projectList.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="page__content">
        <p>
          <Link to="/projects/">← Back to Projects</Link>
        </p>
        <h1 className="page__title">Project Not Found</h1>
      </div>
    );
  }

  const items = project.highlights || project.keyHighlights || [];

  return (
    <div className="page__content">
      <p>
        <Link to="/projects/">← Back to Projects</Link>
      </p>

      <h1 className="page__title">{project.title}</h1>

      {/* Action links */}
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.2rem', alignItems: 'center' }}>
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--small">
            <i className="fas fa-arrow-up-right-from-square"></i> Open Live Platform
          </a>
        )}

        {project.liveUrls && (
          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
            {project.liveUrls.map((link, lIdx) => (
              <a
                key={lIdx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary btn--small"
              >
                <i className="fas fa-arrow-up-right-from-square"></i> {link.label}
              </a>
            ))}
          </div>
        )}

        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn--inverse btn--small">
            <i className="fab fa-fw fa-github"></i> GitHub Repository
          </a>
        )}
      </div>

      <h2>📌 Project Overview</h2>
      <p>{project.overview}</p>

      {project.problem && project.solution && (
        <ul>
          <li>
            <strong>Problem:</strong> {project.problem}
          </li>
          <li>
            <strong>Solution:</strong> {project.solution}
          </li>
        </ul>
      )}

      {project.keyArchitecture && (
        <p>
          <strong>Key Architecture:</strong> {project.keyArchitecture}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-1.5 my-3 text-left">
        <span className="text-xs font-semibold text-[var(--global-text-color)] mr-1">
          Tech Stack:
        </span>
        {project.techStack.map((tech, idx) => (
          <span
            key={idx}
            className="text-[0.72rem] font-medium px-2 py-0.5 rounded-md border border-[var(--global-border-color)] bg-[var(--global-code-background-color)] text-[var(--global-base-color)] inline-flex items-center"
          >
            {tech}
          </span>
        ))}
      </div>

      <h2>⚙️ Key Highlights &amp; Architecture</h2>
      <ul>
        {items.map((item, idx) => (
          <li key={idx} style={{ marginBottom: '0.8em' }}>
            <strong>{item.title}:</strong> {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectDetail;
