import React, { useEffect } from 'react';
import Board from './Board';
import { fetchCategoryIds, fetchCategoryById } from '../services/jservice';
import { useDispatch, useSelector } from 'react-redux';
import { setCategories, setCategoriesLoading } from '../actions/gameActions';
import { getCategoriesLoading } from '../selectors/gameSelectors';
import styles from './Question.css';

const TheBigBoard = () => {
  const dispatch = useDispatch();
  const loading = useSelector(getCategoriesLoading);

  useEffect(() => {
    dispatch(setCategoriesLoading());
    fetchCategoryIds()
      .then(categoryIds => 
        categoryIds.map(({ categoryId }) => {(fetchCategoryById(categoryId));
        }))
      .then(category => dispatch(setCategories(category)));
  }, []);

  if(loading) return <h1>Loading...</h1>;

  return (
    <div className={styles.QuestionCard}>
      <div className={styles.topBar}>
        <header className={styles.cardHeader}>
          <div className={styles.tally}>
          </div>
        </header>
      </div>
      <div className={styles.topSubBar}></div>
      <div className={styles.cardQuestion}>
        <div className={styles.leftBar}></div>
        <div className={styles.questionFrame}>
          <Board />
        </div>
        <div className={styles.rightBar}></div>
      </div>
      <div className={styles.bottomBar}>
        <footer className={styles.cardFooter}>
        </footer>
      </div>
    </div>
  );
};

export default TheBigBoard;


import React from 'react';
import { useSelector } from 'react-redux';
import { getCategories } from '../selectors/gameSelectors';
import Category from './Category';
import styles from './Board.css';

const Board = () => {
  const categories = useSelector(getCategories);
  console.log(categories);

  const categoryElements = categories.map(category => {
    <li>
      <Category {...category} />
    </li>;
  });

  return ( 
    <>
      <section className={styles.Board}>
        <ul>{categoryElements}</ul>
      </section>
    </>
  );
};

export default Board;
