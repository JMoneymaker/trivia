import React, { useState } from 'react';
import { GameContext } from '../hooks/useGameContext';

// eslint-disable-next-line react/prop-types
const GameProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const value = { score, setScore };

  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;

