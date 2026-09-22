import { skillCategories } from '../data/portfolioData';
import '../css/skillsGrid.css';

const SkillsGrid = () => {
  return (
    <div className="skills-container">
      {skillCategories.map((cat, idx) => (
        <div key={idx} className="skill-category-card">
          <div className="skill-category-header">
            <i className={`${cat.icon} skill-category-icon`}></i>
            <h3 className="skill-category-title">{cat.category}</h3>
          </div>

          <div className="skills-tags-wrap">
            {cat.skills.map((skill, sIdx) => (
              <span key={sIdx} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsGrid;
