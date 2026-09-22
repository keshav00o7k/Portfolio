import { useLocation } from 'react-router-dom';
import { personalInfo } from '../data/portfolioData';

const Sidebar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const sidebarClass = `sidebar sticky ${!isHomePage ? 'sidebar--hidden-mobile' : ''}`;

  return (
    <div className={sidebarClass}>
      <div className="author__wrapper" itemScope itemType="http://schema.org/Person">
        <div className="author__avatar">
          <img
            src={personalInfo.avatar}
            className=" object-cover author__avatar"
            alt={personalInfo.name}
            fetchPriority="high"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://ui-avatars.com/api/?name=Keshav+Goyal&background=2f7f93&color=fff&size=256";
            }}
          />
        </div>

        <div className="author__content">
          <h3 className="author__name">{personalInfo.name}</h3>
          <p style={{ margin: '0.2em 0 0.5em', fontSize: '0.85em', fontWeight: 600, color: 'var(--global-base-color)' }}>
            {personalInfo.title}
          </p>
          <p className="author__bio">{personalInfo.tagline}</p>
        </div>

        <div className="author__urls-wrapper">
          <a
            href={personalInfo.resumePdf}
            download="Keshav_Goyal_Cv.pdf"
            className="btn btn--primary btn--block"
            style={{ marginBottom: '10px', textDecoration: 'none' }}
          >
            <i className="fas fa-download"></i> Download Resume
          </a>

          <ul className="author__urls social-icons">
            <li className="author__desktop">
              <i className="fas fa-fw fa-location-dot" aria-hidden="true"></i>
              <span>{personalInfo.location}</span>
            </li>
            <li className="author__desktop">
              <i className="fas fa-fw fa-building-columns" aria-hidden="true"></i>
              <span>{personalInfo.college}</span>
            </li>
            <li>
              <a href={`mailto:${personalInfo.email}`}>
                <i className="fas fa-fw fa-envelope" aria-hidden="true"></i>
                <span>Email</span>
              </a>
            </li>
            <li>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-fw fa-github" aria-hidden="true"></i>
                <span>GitHub</span>
              </a>
            </li>
            <li>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-fw fa-linkedin" aria-hidden="true"></i>
                <span>LinkedIn</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
