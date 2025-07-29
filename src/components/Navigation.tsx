import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation: React.FC = () => {
  const location = useLocation();
  const [isCompetitionsOpen, setIsCompetitionsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const isCompetitionActive = () => {
    return ['/liga-profesional', '/copa-libertadores', '/copa-sudamericana', '/copa-argentina'].includes(location.pathname);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsCompetitionsOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsCompetitionsOpen(false);
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-brand">
          <Link to="/" className="brand-link" onClick={closeMobileMenu}>
            <svg className="football-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
              <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
              <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
            </svg>
            <h1>Fútbol Directo</h1>
          </Link>
        </div>
        
        {/* Hamburger menu for mobile */}
        <button 
          className={`hamburger-menu ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <div className={`nav-menu ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Inicio
          </Link>
          <Link 
            to="/promedios" 
            className={`nav-link ${isActive('/promedios') ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            Promedios
          </Link>
          
          <div className="nav-dropdown">
            <button 
              className={`nav-link dropdown-toggle ${isCompetitionActive() ? 'active' : ''}`}
              onClick={() => setIsCompetitionsOpen(!isCompetitionsOpen)}
            >
              Competencias
              <svg className="dropdown-arrow" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 10l5 5 5-5z"/>
              </svg>
            </button>
            <div className={`dropdown-menu ${isCompetitionsOpen ? 'show' : ''}`}>
              <Link 
                to="/liga-profesional" 
                className={`dropdown-item ${isActive('/liga-profesional') ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                Liga Profesional
              </Link>
              <Link 
                to="/copa-libertadores" 
                className={`dropdown-item ${isActive('/copa-libertadores') ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                Copa Libertadores
              </Link>
              <Link 
                to="/copa-sudamericana" 
                className={`dropdown-item ${isActive('/copa-sudamericana') ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                Copa Sudamericana
              </Link>
              <Link 
                to="/copa-argentina" 
                className={`dropdown-item ${isActive('/copa-argentina') ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                Copa Argentina
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 