import React from 'react';
import { useSelector } from 'react-redux';
import { getCategories } from '../selectors/gameSelectors';
import Category from './Category';
import styles from './Board.css';


const Board = () => {
  const categories = useSelector(getCategories);

  return ( 
    <>
      <section className={styles.Board}>
        {categories.map(category => <Category key={category.id}questions={category} />)}
      </section>
    </>
  );
};

export default Board;
