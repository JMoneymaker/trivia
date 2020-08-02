import React from 'react';
import Category from './Category';
import styles from './Board.css';

const Board = () => {
  return ( 
    <>
      <section className={styles.Board}>
        <Category categoryId={0} />;
        <Category categoryId={1} />;
        <Category categoryId={2} />;
        <Category categoryId={3} />;
        <Category categoryId={4} />;
        <Category categoryId={5} />;
      </section>
    </>
  );
};

export default Board;
