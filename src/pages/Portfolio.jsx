import { projectList } from '../data/portfolioData';
import ProjectCard from '../components/ProjectCard.jsx';

const Portfolio = () => {
  return (
    <div className="page__content">
      <h1 className="page__title">Featured Projects</h1>

      <div className="entries-list">
        {projectList.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
