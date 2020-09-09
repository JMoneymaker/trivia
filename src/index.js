import React from 'react';
import { render } from 'react-dom';
import GameProvider from './providers/GameContextProvider';
import App from './components/App'; 
import './index.css';

render(
  <GameProvider>
    <App />
  </GameProvider>,
  document.getElementById('root')
);
