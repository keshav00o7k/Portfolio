import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  return (
    <div className="page__footer">
      <footer>
        <div className="page__footer-follow">
          <ul className="social-icons">
            <li><strong>Follow:</strong></li>
            <li>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github" aria-hidden="true"></i> GitHub
              </a>
            </li>
            <li>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin" aria-hidden="true"></i> LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div className="page__footer-copyright">
          &copy; {new Date().getFullYear()} {personalInfo.name}, Powered by React &amp; Vite.<br />
          {personalInfo.location}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
