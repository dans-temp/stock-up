import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/global/NavBar/NavBar';
import Home from './components/pages/Home/Home';
import CurrentLeaderboard from './components/pages/Leaderboard/CurrentLeaderboard';
import HistoricalLeaderboard from './components/pages/Leaderboard/HistoricalLeaderboard';
import Rules from './components/pages/Rules/Rules';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leaderboard" element={<CurrentLeaderboard />} />
          <Route path="/history" element={<HistoricalLeaderboard />} />
          <Route path="/rules" element={<Rules />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
