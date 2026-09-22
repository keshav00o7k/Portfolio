import { Link } from 'react-router-dom';
import '../css/projectCard.css';

const ProjectCard = ({ project, index }) => {
  return (
    <div className="project-card">
      {/* Top Row: Title + Live Badge */}
      <div className="project-card__top">
        <h3 className="project-card__title">
          <Link to={`/projects/${project.slug}`}>
            {index ? `${index}. ` : ''}{project.title}
          </Link>
        </h3>

        <div className="project-card__badge">
          <span className="pulse-dot"></span>
          <span>Live Production</span>
        </div>
      </div>

      {/* Description */}
      <p className="project-card__desc">
        {project.overview}
      </p>

      {/* Tech Stack Pills */}
      <div className="project-card__tech">
        {project.techStack.map((tech, tIdx) => (
          <span key={tIdx} className="tech-pill">
            {tech}
          </span>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="project-card__actions">
        <Link to={`/projects/${project.slug}`} className="btn-card btn-card--primary">
          View Case Study <i className="fas fa-arrow-right text-xs"></i>
        </Link>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-card btn-card--outline"
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
            >
              <i className="fas fa-arrow-up-right-from-square text-xs"></i> {link.label}
            </a>
          ))}

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-card btn-card--outline"
          >
            <i className="fab fa-github"></i> GitHub
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
