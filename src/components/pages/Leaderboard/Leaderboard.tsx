import React, { useState } from 'react';
import StockGraph from '../../global/StockGraph/StockGraph';
import './Leaderboard.css';

const users = [
  { name: "Dan", stocks: ['AAPL', 'MSFT', 'NVDA', 'TSLA', 'AMZN'] },
  { name: "Lionel", stocks: ['GOOGL', 'META', 'NFLX', 'BABA', 'AMD'] },
  // { name: "Yiming", stocks: ['SPOT', 'SHOP', 'ICE', 'ROKU', 'PLTR'] },
  // { name: "Raghav", stocks: ['CRM', 'ADBE', 'NOW', 'SNOW', 'DDOG'] },
  // { name: "Matt", stocks: ['UBER', 'LYFT', 'ABNB', 'DASH', 'COIN'] },
  // { name: "Liyang", stocks: ['ZM', 'DOCU', 'CRWD', 'ZS', 'OKTA'] },
];

function Leaderboard() {
  const [portfolios, setPortfolios] = useState<{ [user: string]: { [symbol: string]: number } }>({});
  const [expandedUser, setExpandedUser] = useState<string | null>(null);

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
    setExpandedUser(prev => prev === userName ? null : userName);
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
                  {expandedUser === person.name ? '▼' : '▶'}
                </div>
              </div>
              {expandedUser === person.name && (
                <div className="stocks-section visible">
                  <h3 className="stocks-title">Portfolio</h3>
                  <div className="stocks-grid">
                    {person.stocks.map((symbol, idx) => (
                      <StockGraph
                        key={symbol}
                        symbol={symbol}
                        onInvestmentValue={value => person.handleValue(symbol, value)}
                        shorted={idx === person.stocks.length - 1}
                      />
                    ))}
                  </div>
                </div>
              )}
              {expandedUser !== person.name && (
                <div className="stocks-section hidden">
                  {person.stocks.map((symbol, idx) => (
                    <StockGraph
                      key={symbol}
                      symbol={symbol}
                      onInvestmentValue={value => person.handleValue(symbol, value)}
                      shorted={idx === person.stocks.length - 1}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;