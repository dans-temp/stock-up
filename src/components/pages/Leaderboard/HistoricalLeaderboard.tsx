import React from 'react';
import Leaderboard from './Leaderboard';
import historicalDataJson from '../../../data/historical-data.json';

function HistoricalLeaderboard() {
  const q4Data = historicalDataJson.quarters.Q4_2025;
  
  return (
    <Leaderboard historicalData={q4Data} />
  );
}

export default HistoricalLeaderboard;
