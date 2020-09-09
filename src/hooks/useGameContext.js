import React from 'react';

export const GameContext = React.createContext({
  score: 0,
  setScore: () => {},
  round: 'single',
  setRound: () => {}
});

