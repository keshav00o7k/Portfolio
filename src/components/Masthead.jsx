import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Masthead = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="masthead">
      <div className="masthead__inner-wrap">
        <div className="masthead__menu">
          <nav id="site-nav" className="greedy-nav">
            {/* Desktop Brand */}
            <NavLink className="site-title site-title--desktop" to="/" style={{ fontWeight: 700 }} onClick={closeMenu}>
              Keshav Goyal
            </NavLink>

            {/* Mobile Brand */}
            <NavLink className="site-title site-title--mobile" to="/" onClick={closeMenu}>
              Keshav Goyal
            </NavLink>

            {/* Mobile Theme Toggle */}
            <a
              id="theme-toggle-mobile"
              className="theme-toggle-mobile"
              role="button"
              aria-label="Toggle theme"
              onClick={toggleTheme}
            >
              <i className="fa-solid fa-sun" aria-hidden="true" title="toggle theme"></i>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              className={menuOpen ? 'close' : ''}
              type="button"
              aria-label="Toggle Navigation Menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="visually-hidden">Toggle Menu</span>
              <div className="navicon"></div>
            </button>

            {/* Navigation Links */}
            <ul className={`visible-links ${menuOpen ? 'is-open' : ''}`}>
              <li className="masthead__menu-item">
                <NavLink to="/" end onClick={closeMenu}>
                  About &amp; Skills
                </NavLink>
              </li>
              <li className="masthead__menu-item">
                <NavLink to="/experience/" onClick={closeMenu}>
                  Experience
                </NavLink>
              </li>
              <li className="masthead__menu-item">
                <NavLink to="/projects/" onClick={closeMenu}>
                  Projects
                </NavLink>
              </li>
              <li className="masthead__menu-item">
                <NavLink to="/cv/" onClick={closeMenu}>
                  CV
                </NavLink>
              </li>
              <li className="masthead__menu-item">
                <NavLink to="/year-archive/" onClick={closeMenu}>
                  Insights (Blog)
                </NavLink>
              </li>

              {/* Desktop Theme Toggle */}
              <li id="theme-toggle" className="masthead__menu-item persist tail">
                <a role="button" aria-label="Toggle theme" onClick={toggleTheme}>
                  <i id="theme-icon" className="fa-solid fa-sun" aria-hidden="true" title="toggle theme"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Masthead;
