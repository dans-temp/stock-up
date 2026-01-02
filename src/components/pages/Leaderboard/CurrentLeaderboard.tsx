import React from 'react';
import Leaderboard from './Leaderboard';

const users = [
  { name: "Dan", stocks: ['INTC', 'MSFT', 'NTDOY', 'ICE', 'TGT'] },
  { name: "Lionel", stocks: ['LYFT', 'SNAP', 'DJT', 'CNC', 'ASBP'] },
  { name: "Yiming", stocks: ['OPFI', 'MVST', 'ADBE', 'CROX', 'RGC'] },
  { name: "Raghav", stocks: ['ICE', 'NVDA', 'NVO', 'DOW', 'TSLA'] },
  { name: "Matt", stocks: ['INTC', 'OPEN', 'ICE', 'RZLV', 'MARA'] },
  { name: "Liyang", stocks: ['HIMS', 'IONQ', 'APP', 'SOFI', 'BLNK'] },
];

function CurrentLeaderboard() {
  return <Leaderboard users={users} />;
}

export default CurrentLeaderboard;




/*

const users = [
  { name: "Dan", stocks: ['WMT', 'CEG', 'NFLX', 'JNJ', 'PLTR'] },
  // { name: "Lionel", stocks: ['ARG.TO', 'BYDDY', 'DJT', 'CNC', 'ASBP'] },
  // { name: "Yiming", stocks: ['OPFI', 'MVST', 'ADBE', 'CROX', 'RGC'] },
  // { name: "Raghav", stocks: ['ICE', 'NVDA', 'NVO', 'DOW', 'TSLA'] },
  // { name: "Matt", stocks: ['INTC', 'OPEN', 'ICE', 'RZLV', 'MARA'] },
  { name: "Liyang", stocks: ['WDC', 'TEM', 'HWM', 'SHOP', 'GLOB'] },
  { name: "David", stocks: ['BMO', 'NTDOY', 'ATZAF', 'FRCOY', 'LAKE'] },
];

*/