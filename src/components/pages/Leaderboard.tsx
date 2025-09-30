import React, { useState } from 'react';
import StockGraph from '../global/StockGraph/StockGraph';

const users = [
  { name: "Dan", stocks: ['AAPL', 'MSFT', 'NVDA', 'TSLA', 'AMZN'] },
  { name: "Lionel", stocks: ['GOOGL', 'META', 'NFLX', 'BABA', 'AMD'] },
];

function Leaderboard() {
  const [portfolios, setPortfolios] = useState<{ [user: string]: { [symbol: string]: number } }>({});

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
      <h1>Leaderboard</h1>
      {leaderboard.map(person => (
        <div key={person.name} style={{ marginBottom: '2.5rem', width: '100%' }}>
          <p style={{ fontWeight: 600, fontSize: '1.5rem', margin: 0 }}>{person.name}'s Stocks</p>
          {person.stocks.map((symbol, idx) => (
            <StockGraph
              key={symbol}
              symbol={symbol}
              onInvestmentValue={value => person.handleValue(symbol, value)}
              shorted={idx === person.stocks.length - 1}
            />
          ))}
          <p style={{ fontWeight: 700, fontSize: '1.3rem', marginTop: '1rem' }}>
            Portfolio Total: <span style={{ color: person.total >= 100 ? 'var(--color-green)' : 'var(--color-red)' }}>${person.total.toFixed(2)}</span>
          </p>
        </div>
      ))}
    </div>
  );
}

export default Leaderboard;