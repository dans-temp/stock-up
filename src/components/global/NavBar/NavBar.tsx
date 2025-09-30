import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <Link 
        to="/" 
        className="navbar-link primary"
      >
        Home
      </Link>
      <Link 
        to="/leaderboard" 
        className="navbar-link"
      >
        Leaderboard
      </Link>
      <Link 
        to="/rules" 
        className="navbar-link"
      >
        Rules
      </Link>
    </nav>
  );
}

export default NavBar;