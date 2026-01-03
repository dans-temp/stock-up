import React from 'react';
import Leaderboard from './Leaderboard';

const users = [
  { name: "Dan", stocks: ['WMT', 'CEG', 'NFLX', 'JNJ', 'PLTR'] },
  { name: "Lionel", stocks: ['K.TO', 'ARG.TO', 'LEGN', 'MOH', 'CVNA'] },
  { name: "Yiming", stocks: ['MVST', 'NEXT', 'WELL.TO', 'LULU', 'RGC'] },
  { name: "Raghav", stocks: ['NFLX', 'ORCL', 'NVO', 'T.TO', 'DJT'] },
  // { name: "Matt", stocks: ['INTC', 'OPEN', 'ICE', 'RZLV', 'MARA'] },
  { name: "Liyang", stocks: ['WDC', 'TEM', 'HWM', 'SHOP.TO', 'GLOB'] },
  { name: "David", stocks: ['BMO', 'NTDOY', 'ATZ.TO', 'FRCOY', 'LAKE'] },
  { name: "Kalyan", stocks: ['TTWO', 'SONY', 'ORCL', 'SCHW', 'SLV'] },
  { name: "Alex", stocks: ['NVDA', 'AMD', 'ICE', 'CVE', 'RIVN'] },
];

function CurrentLeaderboard() {
  return <Leaderboard users={users} />;
}

export default CurrentLeaderboard;
