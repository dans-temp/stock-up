import React from 'react';
import { Link } from 'react-router-dom';
import barrelImage from '../../../assets/images/Barrel.png';
import './Home.css';

function Home() {
  return (
    <div className="page-container">
      <div className="home-container">
        <h1 className="app-title">Stock-Up</h1>
        
        <div className="logo-container">
          <img src={barrelImage} alt="Stock-Up Mascot" className="mascot-image" />
        </div>
        
        <p className="slogan">Invest. Compete. Win.</p>
        
        <div className="action-buttons">
          <Link to="/rules" className="home-button rules-button">
            � Rules
          </Link>
          <Link to="/leaderboard" className="home-button leaderboard-button">
            🏆 Leaderboard
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;