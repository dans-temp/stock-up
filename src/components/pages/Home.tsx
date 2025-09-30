import React from 'react';

function Home() {
  return (
    <div style={{ padding: '2rem', color: 'white', textAlign: 'center' }}>
      <h1>Welcome to Stock-Up!</h1>
      <div style={{ maxWidth: '600px', margin: '0 auto', lineHeight: '1.8' }}>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
          The ultimate stock portfolio competition where friends compete to see whose investment strategy performs the best!
        </p>
        
        <div style={{ background: '#1a1a1a', padding: '2rem', borderRadius: '10px', marginBottom: '2rem' }}>
          <h2>🏆 Current Game Status</h2>
          <p>Competition started: September 1st, 2025</p>
          <p>Each player invested $20 in 5 different stocks</p>
          <p>Check the Leaderboard to see who's winning!</p>
        </div>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <div style={{ background: '#2a2a2a', padding: '1rem', borderRadius: '8px', minWidth: '150px' }}>
            <h3>📈 Track Performance</h3>
            <p>Real-time stock data and portfolio values</p>
          </div>
          <div style={{ background: '#2a2a2a', padding: '1rem', borderRadius: '8px', minWidth: '150px' }}>
            <h3>🎯 Short Positions</h3>
            <p>Each player has one "shorted" stock that gains when the price drops</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;