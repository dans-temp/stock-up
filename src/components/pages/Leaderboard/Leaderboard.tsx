import React, { useState } from 'react';
import StockGraph from '../../global/StockGraph/StockGraph';
import './Leaderboard.css';

const users = [
  { name: "Dan", stocks: ['INTC', 'MSFT', 'NTDOY', 'ICE', 'TGT'] },
  { name: "Lionel", stocks: ['LYFT', 'SNAP', 'DJT', 'CNC', 'ASBP'] },
  { name: "Yiming", stocks: ['OPFI', 'MVST', 'ADBE', 'CROX', 'RGC'] },
  { name: "Raghav", stocks: ['ICE', 'NVDA', 'NVO', 'DOW', 'TSLA'] },
  { name: "Matt", stocks: ['INTC', 'OPEN', 'ICE', 'RZLV', 'MARA'] },
  { name: "Liyang", stocks: ['HIMS', 'IONQ', 'APP', 'SOFI', 'BLNK'] },
];

function Leaderboard() {
  const [portfolios, setPortfolios] = useState<{ [user: string]: { [symbol: string]: number } }>({});
  const [expandedUsers, setExpandedUsers] = useState<Set<string>>(new Set());

  function handlePortfolioValue(user: string, symbol: string, value: number | null) {
    setPortfolios(prev => ({
      ...prev,
      [user]: {
        ...(prev[user] || {}),
        ...(value === null || isNaN(value)
          ? (() => {
              const { [symbol]: _, ...rest } = prev[user] || {};
              return rest;
            })()
          : { [symbol]: value }),
      },
    }));
  }

  function toggleUserExpansion(userName: string) {
    setExpandedUsers(prev => {
      const newSet = new Set(prev);
      if (newSet.has(userName)) {
        newSet.delete(userName);
      } else {
        newSet.add(userName);
      }
      return newSet;
    });
  }

  const leaderboard = users.map(user => {
    const total = Object.values(portfolios[user.name] || {}).reduce((sum, v) => sum + v, 0);
    return {
      ...user,
      total,
      handleValue: (symbol: string, value: number | null) =>
        handlePortfolioValue(user.name, symbol, value),
    };
  }).sort((a, b) => b.total - a.total);

  return (
    <div className="page-container">
      <div className="leaderboard-container">
        <h1 className="leaderboard-title">🏆 Leaderboard</h1>
        <div className="competitors-grid">
          {leaderboard.map((person, index) => (
            <div key={person.name} className={`competitor-card rank-${index + 1}`}>
              <div 
                className="competitor-header clickable" 
                onClick={() => toggleUserExpansion(person.name)}
              >
                <div className="rank-badge">#{index + 1}</div>
                <h2 className="competitor-name">{person.name}</h2>
                <div className="portfolio-total">
                  <span className="total-label">Portfolio Total:</span>
                  <span className={`total-value ${person.total >= 100 ? 'profit' : 'loss'}`}>
                    ${person.total.toFixed(2)}
                  </span>
                </div>
                <div className="expand-indicator">
                  {expandedUsers.has(person.name) ? '▼' : '▶'}
                </div>
              </div>
              <div className={`stocks-section ${expandedUsers.has(person.name) ? 'visible' : 'hidden'}`}>
                <div className="stocks-grid">
                  {person.stocks.map((symbol, idx) => (
                    <React.Fragment key={symbol}>
                      <StockGraph
                        symbol={symbol}
                        onInvestmentValue={value => person.handleValue(symbol, value)}
                        shorted={idx === person.stocks.length - 1}
                      />
                      {expandedUsers.has(person.name) && idx < person.stocks.length - 1 && (
                        <div className="stock-divider"></div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;