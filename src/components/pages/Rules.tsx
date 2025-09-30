import React from 'react';

function Rules() {
  return (
    <div style={{ padding: '2rem', color: 'white' }}>
      <h1>Game Rules</h1>
      <div style={{ maxWidth: '800px', lineHeight: '1.6' }}>
        <h2>How to Play</h2>
        <ul>
          <li>Each player starts with $20 invested in each of their selected stocks</li>
          <li>The investment value is calculated from September 1st, 2025 to the current date</li>
          <li>Your portfolio total is the sum of all your stock investment values</li>
          <li>The leaderboard ranks players by their total portfolio value</li>
        </ul>
        
        <h2>Stock Selection</h2>
        <ul>
          <li>Each player has a predetermined list of 5 stocks</li>
          <li>The last stock in each player's list is "shorted" (gains when stock goes down)</li>
          <li>Shorted stocks have inverted percentage changes and a different background color</li>
        </ul>
        
        <h2>Scoring</h2>
        <ul>
          <li>Green values indicate profits (above $20)</li>
          <li>Red values indicate losses (below $20)</li>
          <li>The player with the highest total portfolio value wins</li>
        </ul>
      </div>
    </div>
  );
}

export default Rules;