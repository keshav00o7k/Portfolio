import { Link } from 'react-router-dom';
import '../css/projectCard.css';

const ProjectCard = ({ project, index, headingLevel = 'h2' }) => {
  const HeadingTag = headingLevel;

  return (
    <div className="project-card">
      {/* Top Row: Title + Live Badge */}
      <div className="project-card__top">
        <HeadingTag className="project-card__title">
          <Link to={`/projects/${project.slug}`} aria-label={`View case study: ${project.title}`}>
            {index ? `${index}. ` : ''}{project.title}
          </Link>
        </HeadingTag>

        <div className="project-card__badge">
          <span className="pulse-dot"></span>
          <span>{project.badge || 'Live Production'}</span>
        </div>
      </div>

      {/* Description */}
      <p className="project-card__desc">
        {project.overview}
      </p>

      {/* Tech Stack Pills (trimmed for clean card scan; full list on Case Study) */}
      <div className="project-card__tech">
        {project.techStack.slice(0, 5).map((tech, tIdx) => (
          <span key={tIdx} className="tech-pill">
            {tech}
          </span>
        ))}
        {project.techStack.length > 5 && (
          <span className="tech-pill tech-pill--more">
            +{project.techStack.length - 5} more
          </span>
        )}
      </div>

      {/* Action Buttons */}
      <div className="project-card__actions">
        <Link
          to={`/projects/${project.slug}`}
          className="btn-card btn-card--primary"
          aria-label={`View Case Study for ${project.title}`}
        >
          View Case Study <i className="fas fa-arrow-right text-xs"></i>
        </Link>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-card btn-card--outline"
            aria-label={`Open Live Platform: ${project.title}`}
          >
            <i className="fas fa-arrow-up-right-from-square text-xs"></i> Live Platform
          </a>
        )}

        {project.liveUrls &&
          project.liveUrls.map((link, lIdx) => (
            <a
              key={lIdx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-card btn-card--outline"
              aria-label={`Open ${link.label}: ${project.title}`}
            >
              <i className="fas fa-arrow-up-right-from-square text-xs"></i> {link.label}
            </a>
          ))}

        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-card btn-card--outline"
            aria-label={`View source code for ${project.title} on GitHub`}
          >
            <i className="fab fa-github"></i> GitHub
          </a>
        ) : (
          project.isPrivateRepo && (
            <span className="project-card__private-badge" title="Source code is private to the client">
              <i className="fas fa-lock text-xs" aria-hidden="true"></i> Private Client Repo
            </span>
          )
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
