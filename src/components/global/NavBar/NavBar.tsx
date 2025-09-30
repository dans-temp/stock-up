import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [clicked, setClicked] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setClicked(!clicked);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setClicked(false);
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
        className={`hamburger ${clicked ? 'clicked' : ''}`}
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
          onClick={closeMenu}
        >
          Home
        </Link>
        <Link 
          to="/leaderboard" 
          className={`navbar-link ${isActive('/leaderboard') ? 'primary' : ''}`}
          onClick={closeMenu}
        >
          Leaderboard
        </Link>
        <Link 
          to="/rules" 
          className={`navbar-link ${isActive('/rules') ? 'primary' : ''}`}
          onClick={closeMenu}
        >
          Rules
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;