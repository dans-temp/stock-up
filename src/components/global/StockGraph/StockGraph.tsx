import React, { useEffect, useState, useRef } from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid
} from 'recharts';
import { fetchYahooChartData } from '../../../functions/api_calls';
import './StockGraph.css';

const RANGES = [
  { label: 'Sept 1', value: 'sept1' },
  { label: '1D', value: '1d' },
  { label: '5D', value: '5d' },
  { label: '1M', value: '1mo' },
  { label: 'YTD', value: 'ytd' },
  { label: '1Y', value: '1y' },
  { label: '5Y', value: '5y' },
];

function getYahooRange(range: string) {
  if (range === 'sept1') {
    // Custom: from 2025-09-01 to now, daily interval
    const from = Math.floor(new Date('2025-09-01T00:00:00Z').getTime() / 1000);
    const to = Math.floor(Date.now() / 1000);
    return { range: { from, to }, interval: '1d', isCustom: true };
  }
  switch (range) {
    case '1d': return { range: '1d', interval: '5m' };
    case '5d': return { range: '5d', interval: '15m' };
    case '1mo': return { range: '1mo', interval: '1h' };
    case 'ytd': return { range: 'ytd', interval: '1d' };
    case '1y': return { range: '1y', interval: '1d' };
    case '5y': return { range: '5y', interval: '1wk' };
  }
}

interface StockGraphProps {
  symbol?: string;
  onInvestmentValue?: (value: number | null) => void;
  shorted?: boolean;
}

const StockGraph: React.FC<StockGraphProps> = ({ symbol, onInvestmentValue, shorted }) => {
  const [range, setRange] = useState('sept1');
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sept1InvestmentValue, setSept1InvestmentValue] = useState<number | null>(null);
  const sept1InvestmentValueSet = useRef(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const config = getYahooRange(range);
        if (!symbol) {
          setError('No symbol provided');
          setData([]);
          setLoading(false);
          return;
        }
        let chartData;
        if (config && config.isCustom && typeof config.range === 'object') {
          chartData = await fetchYahooChartData(symbol, config.range, config.interval);
        } else if (config) {
          chartData = await fetchYahooChartData(symbol, config.range, config.interval);
        } else {
          setError('Invalid range');
          setData([]);
          setLoading(false);
          return;
        }
        setData(chartData);
      } catch (e) {
        setError('Failed to fetch chart data');
        setData([]);
      }
      setLoading(false);
    };
    fetchData();
  }, [range, symbol]);

  // Calculate percentage change for the currently displayed range
  let percentChange: number | null = null;
  let isUp = false;
  if (data.length > 1) {
    const start = data[0].price;
    const end = data[data.length - 1].price;
    if (start && end) {
      percentChange = ((end - start) / start) * 100;
      if (shorted) {
        percentChange = -percentChange;
      }
      isUp = percentChange > 0;
    }
  }

  useEffect(() => {
    if (!sept1InvestmentValueSet.current && range === 'sept1' && percentChange !== null) {
      const value = 20 * (1 + percentChange / 100);
      setSept1InvestmentValue(value);
      sept1InvestmentValueSet.current = true;
      if (onInvestmentValue && !isNaN(value)) {
        onInvestmentValue(value);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, percentChange, range]);

  return (
    <div>
      {sept1InvestmentValue !== null && (
        <div style={{
          textAlign: 'center',
          fontSize: '1.4rem',
          fontWeight: 600,
          color: sept1InvestmentValue >= 20 ? 'var(--color-green)' : 'var(--color-red)',
          marginBottom: '0.2rem',
        }}>
          ${sept1InvestmentValue.toFixed(2)}
        </div>
      )}
      <div
        className="stock-graph-container"
        style={shorted ? { background: '#2d1a1a' } : {}}
      >
        {symbol && (
          <div className="stock-graph-symbol">{symbol.toUpperCase()}{shorted ? ' (Short)' : ''}</div>
        )}
        {percentChange !== null && (
          <div style={{
            textAlign: 'center',
            fontSize: '1.3rem',
            fontWeight: 600,
            color: isUp ? 'var(--color-green)' : 'var(--color-red)',
            marginBottom: '0.3rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            {isUp ? '▲' : '▼'}
            {Math.abs(percentChange).toFixed(2)}%
          </div>
        )}
        <div className="stock-graph-range-buttons">
          {RANGES.map(r => (
            <button
              key={r.value}
              onClick={() => setRange(r.value)}
              className={range === r.value ? 'active' : ''}
            >
              {r.label}
            </button>
          ))}
        </div>
        <div className="stock-graph-chart-area">
          {loading && <p>Loading chart...</p>}
          {error && <p className="stock-graph-error">{error}</p>}
          {!loading && !error && data.length > 0 && (
            <ResponsiveContainer width="100%" height={150}>
              <LineChart data={data} margin={{ top: 5, right: 15, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="time" minTickGap={15} tick={{ fill: '#fff', fontSize: 10 }} />
                <YAxis domain={['auto', 'auto']} tick={{ fill: '#fff', fontSize: 10 }} />
                <Tooltip contentStyle={{ background: '#333', border: 'none', color: '#fff' }} />
                <Line type="monotone" dataKey="price" stroke="#61dafb" dot={false} strokeWidth={1.5} />
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
    </div>
  );
};

export default StockGraph;
