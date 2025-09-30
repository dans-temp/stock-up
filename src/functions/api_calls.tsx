export async function fetchYahooChartData(
  stock: string,
  yfRange: string | { from: number; to: number },
  interval: string
): Promise<{ time: string; price: number }[]> {
  let url;
  if (typeof yfRange === 'object') {
    // Custom period1/period2 for Yahoo Finance
    url = `https://corsproxy.io/?https://query1.finance.yahoo.com/v8/finance/chart/${stock}?period1=${yfRange.from}&period2=${yfRange.to}&interval=${interval}`;
  } else {
    url = `https://corsproxy.io/?https://query1.finance.yahoo.com/v8/finance/chart/${stock}?range=${yfRange}&interval=${interval}`;
  }
  const res = await fetch(url);
  if (!res.ok) throw new Error('API error');
  const json = await res.json();
  const result = json.chart.result[0];
  const timestamps = result.timestamp;
  const prices = result.indicators.quote[0].close;
  // Format data for recharts
  return timestamps.map((t: number, i: number) => ({
    time: new Date(t * 1000).toLocaleString(
      'en-US',
      typeof yfRange === 'string' && yfRange === '1d'
        ? { hour: '2-digit', minute: '2-digit' }
        : { year: '2-digit', month: 'short', day: '2-digit' }
    ),
    price: prices[i],
  })).filter((d: any) => d.price !== null);
}
