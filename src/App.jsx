import { Routes, Route } from 'react-router-dom';
import Masthead from './components/Masthead.jsx';
import Sidebar from './components/Sidebar.jsx';
import Footer from './components/Footer.jsx';

import About from './pages/About.jsx';
import Experience from './pages/Experience.jsx';
import CV from './pages/CV.jsx';
import Portfolio from './pages/Portfolio.jsx';
import ProjectDetail from './pages/ProjectDetail.jsx';
import Insights from './pages/Insights.jsx';

const App = () => {
  return (
    <>
      <Masthead />

      <div id="main" role="main">
        <Sidebar />

        <div className="main-content-wrapper">
          <div className="archive">
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/experience/" element={<Experience />} />
              <Route path="/projects/" element={<Portfolio />} />
              <Route path="/projects/:slug" element={<ProjectDetail />} />
              <Route path="/cv/" element={<CV />} />
              <Route path="/year-archive/" element={<Insights />} />
              <Route path="*" element={<About />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
