import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link 
          to="/" 
          className={`navbar-link ${isActive('/') ? 'primary' : ''}`}
        >
          Home
        </Link>
        <Link 
          to="/leaderboard" 
          className={`navbar-link ${isActive('/leaderboard') ? 'primary' : ''}`}
        >
          Leaderboard
        </Link>
        <Link 
          to="/rules" 
          className={`navbar-link ${isActive('/rules') ? 'primary' : ''}`}
        >
          Rules
        </Link>
      </div>
      
      {/* Mobile hamburger menu */}
      <div 
        className={`hamburger ${isMenuOpen ? 'clicked' : ''}`}
        onClick={toggleMenu}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      
      {/* Mobile dropdown menu */}
      <div className={`dropdown-menu ${isMenuOpen ? 'show' : ''}`}>
        <Link 
          to="/" 
          className={`navbar-link ${isActive('/') ? 'primary' : ''}`}
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </Link>
        <Link 
          to="/leaderboard" 
          className={`navbar-link ${isActive('/leaderboard') ? 'primary' : ''}`}
          onClick={() => setIsMenuOpen(false)}
        >
          Leaderboard
        </Link>
        <Link 
          to="/rules" 
          className={`navbar-link ${isActive('/rules') ? 'primary' : ''}`}
          onClick={() => setIsMenuOpen(false)}
        >
          Rules
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;