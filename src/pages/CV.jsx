import { Link } from 'react-router-dom';
import { personalInfo, educationInfo, experienceList, projectList } from '../data/portfolioData';
import SkillsGrid from '../components/SkillsGrid.jsx';

const CV = () => {
  return (
    <div className="page__content">
      {/* Header with Title & Download Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3 mb-2 sm:mb-6">
        <h1 className="page__title m-0!">Curriculum Vitae</h1>
        <a
          href={personalInfo.resumePdf}
          download="Keshav_Goyal_Cv.pdf"
          aria-label="Download Keshav Goyal Curriculum Vitae in PDF format"
          className="btn btn--primary inline-flex items-center gap-2 self-start sm:self-auto text-sm"
          style={{ textDecoration: 'none' }}
        >
          <i className="fas fa-download"></i> Download PDF
        </a>
      </div>

      {/* Desktop PDF Viewer */}
      <div className="cv-desktop-viewer">
        <object
          data={personalInfo.resumePdf}
          type="application/pdf"
          width="100%"
          height="100%"
          style={{ width: '100%', height: '100%', display: 'block' }}
        >
          <iframe
            src={personalInfo.resumePdf}
            width="100%"
            height="100%"
            style={{ border: 'none', width: '100%', height: '100%' }}
            title="CV Preview"
          >
            <div className="p-4 text-center">
              <p className="text-sm text-[var(--global-text-color-light)] mb-3">
                Your browser does not support embedded PDF preview.
              </p>
              <a
                href={personalInfo.resumePdf}
                download="Keshav_Goyal_Cv.pdf"
                className="btn btn--primary btn--small"
              >
                <i className="fas fa-download"></i> Download PDF Directly
              </a>
            </div>
          </iframe>
        </object>
      </div>

      {/* Education */}
      <h2>Education</h2>
      <ul className="pl-4 sm:pl-5 my-3">
        <li className="mb-2">
          <strong>{educationInfo.degree}</strong> ({educationInfo.timeline})
          <br />
          <em>{educationInfo.institution}</em>
        </li>
      </ul>

      {/* Work Experience */}
      <h2>Work Experience</h2>
      <ul className="pl-4 sm:pl-5 my-3">
        {experienceList.map((exp, idx) => (
          <li key={exp.id || idx} className="mb-4">
            <strong>
              {exp.role} — {exp.company}
            </strong>{' '}
            <em className="text-[var(--global-text-color-light)]">({exp.duration})</em>
            {exp.subProjects ? (
              exp.subProjects.map((sp, spIdx) => (
                <div key={spIdx} className="my-2 pl-2 border-l-2 border-[var(--global-border-color)]">
                  <p className="font-bold text-sm my-1 text-[var(--global-heading-color)]">• {sp.name}</p>
                  <ul className="pl-4 my-1">
                    {sp.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="text-xs sm:text-sm mb-1">{h}</li>
                    ))}
                  </ul>
                </div>
              ))
            ) : (
              <ul className="pl-4 my-1">
                {exp.highlights.map((h, hIdx) => (
                  <li key={hIdx} className="text-xs sm:text-sm mb-1">{h}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* Technical Skills */}
      <h2>Technical Skills</h2>
      <SkillsGrid />

      {/* Featured Projects */}
      <h2>Featured Projects</h2>
      <ul className="pl-4 sm:pl-5 my-3">
        {projectList.map((item, idx) => (
          <li key={idx} className="mb-3">
            <strong>
              <Link to={`/projects/${item.slug}`}>{item.title}</Link>
            </strong>
            <p className="text-xs sm:text-sm my-1 text-[var(--global-text-color-light)]">
              {item.overview}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CV;
