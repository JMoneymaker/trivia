import React, { useContext } from 'react';
import Board from './Board';
import styles from './TheBigBoard.css';
import useGameRound from '../hooks/useGameRound';
import { GameContext } from '../hooks/useGameContext';

const TheBigBoard = () => {
  const { score, round } = useContext(GameContext);
  const [roundQuestions, roundReady] = useGameRound(round);

  if(!roundReady) return <h1>Loading...</h1>;

  return (
    <div className={styles.TheBigBoard}>
      <div className={styles.boardHeader}>
        <header className={styles.statsContainer}>
          <p className={styles.score}>score: $ {score}</p> 
        </header>
      </div>
      <div className={styles.boardMiddle}>
        <div className={styles.leftBar}></div>
        <div className={styles.categoryGridFrame}>
          <Board 
            roundQuestions={roundQuestions}
          />
        </div>
        <div className={styles.rightBar}></div>
      </div>
      <div className={styles.boardFooter}>
      </div>
    </div>
  );
};

export default TheBigBoard;
