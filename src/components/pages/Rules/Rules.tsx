import React from 'react';
import rulesBarrelImage from '../../../assets/images/rules-barrel.png';
import './Rules.css';

function Rules() {
  return (
    <div className="page-container">
      <div className="rules-container">
        <h1 className="rules-title">Rules</h1>        
        <div className="rules-section">
          <h2 className="section-title">💰 Entry Fee</h2>
          <p>Everyone contributes $20 to enter the challenge.</p>
        </div>

        <div className="rules-section">
          <h2 className="section-title">🏆 Prizes</h2>
          <ul className="prize-list">
            <li><strong>🏆 1st Place:</strong> Wins the entire prize pool (minus 2nd place's entry fee).</li>
            <li><strong>🥈 2nd Place:</strong> Gets their $20 back.</li>
            <li><strong>🗑 Last Place:</strong> Must buy 1st place a beer 🍺.</li>
          </ul>
        </div>

        <div className="rules-section">
          <h2 className="section-title">💸 Simulated Investing</h2>
          <p>We'll be using pretend money for tracking performance, but if you're feeling bold, you can invest with real money too, and put your money where your mouth is!</p>
        </div>

        <div className="rules-barrel-container">
          <img src={rulesBarrelImage} alt="Rules Mascot" className="rules-barrel-image" />
        </div>

        <div className="rules-section">
          <h2 className="section-title">📊 Stock Selection</h2>
          <p>Each player will choose:</p>
          <ul>
            <li><strong>4 unique stocks</strong> they believe will increase in value.</li>
            <li><strong>1 stock</strong> they believe will decrease in value (this is your short pick).</li>
          </ul>
          <p>We'll simulate investing $20 in each stock, for a total of $100 per player.</p>
          
          <div className="short-explanation">
            <h3>🔁 For the short pick, think of the graph as flipped:</h3>
            <p>If the stock drops 20%, you gain 20%. If it rises 10%, you lose 10%.</p>
            <p>You can only lose the money you invenst in a short pick no matter how high it goes up.</p>
          </div>
        </div>

        <div className="rules-section">
          <h2 className="section-title">✅ Stock Eligibility</h2>
          <p>You may only select individual stocks listed on:</p>
          
          <div className="allowed">
            <h3>✅ Allowed exchanges:</h3>
            <ul>
              <li>NASDAQ</li>
              <li>NYSE</li>
              <li>Toronto Stock Exchange (TSX)</li>
              <li>OTC</li>
            </ul>
          </div>
          
          <div className="not-allowed">
            <h3>🚫 Not allowed:</h3>
            <ul>
              <li>ETFs (e.g., S&P 500)</li>
              <li>Mutual Funds</li>
              <li>Index Funds</li>
              <li>Crypto</li>
              <li>Commodities</li>
              <li>Any bundled or derivative instruments</li>
            </ul>
          </div>
        </div>

        <div className="rules-section">
          <h2 className="section-title">📅 Timeline</h2>
          <div className="timeline-item">
            <strong>Pick Deadline:</strong> All selections must be posted in this Teams group chat by September 30th. Once you post them here they are locked in and you cannot make changes after.
          </div>
          <div className="timeline-item">
            <strong>Start Date:</strong> The challenge begins October 1st. Starting prices will be based on market open that day.
          </div>
          <div className="timeline-item">
            <strong>End Date:</strong> Final prices will be recorded at market close on December 31st and whoever has gained the most money is the winner.
          </div>
          
          <div className="final-score">
            <p>📈 Your final score will be based on the combined performance of all 5 stocks.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rules;