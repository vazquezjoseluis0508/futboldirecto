import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-brand">
          <Link to="/" className="brand-link">
            <h1>Fútbol Directo</h1>
          </Link>
        </div>
        
        <div className="nav-menu">
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
          >
            Calendario
          </Link>
          <Link 
            to="/tabla" 
            className={`nav-link ${isActive('/tabla') ? 'active' : ''}`}
          >
            Tabla de Posiciones
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 