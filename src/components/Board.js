import React from 'react';
import Category from './Category';
import styles from './Board.css';

const Board = () => {
  return ( 
    <>
      <section className={styles.Board}>
        <Category categoryId={'5000'} />;
        <Category categoryId={'2000'} />;
        <Category categoryId={'1000'} />;
        <Category categoryId={'100'} />;
        <Category categoryId={'300'} />;
        <Category categoryId={'320'} />;
      </section>
    </>
  );
};

export default Board;
