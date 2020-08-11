import React from 'react';
import { useSelector } from 'react-redux';
import { getCategories } from '../selectors/gameSelectors';
import Category from './Category';
import styles from './Board.css';


const Board = () => {
  const categories = useSelector(getCategories);

  const categoryElements = categories.map(category => (
    <li key={category._id}>
      <Category questions={category.slice(0, 5)} />
    </li>
  ));

  return ( 
    <>
      <section className={styles.Board}>
        {categoryElements}
      </section>
    </>
  );
};

export default Board;
