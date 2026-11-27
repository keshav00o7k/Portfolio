import { skillCategories } from '../data/portfolioData';
import '../css/skillsGrid.css';

const SkillsGrid = () => {
  return (
    <div className="skills-list">
      {skillCategories.map((cat, idx) => (
        <div key={idx} className="skill-group">
          <div className="skill-group__header">
            <i className={`${cat.icon} skill-group__icon`} aria-hidden="true"></i>
            <h3 className="skill-group__title">{cat.category}</h3>
          </div>

          <p className="skill-group__items">
            {cat.skills.join(' · ')}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SkillsGrid;
