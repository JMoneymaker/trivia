import React, { useEffect } from 'react';
import Board from './Board';
import { fetchCategoryById, fetchCategoryIds } from '../services/jservice';
import { useDispatch, useSelector } from 'react-redux';
import { setCategories, setCategoriesLoading, setCategoryIds } from '../actions/gameActions';
import { getCategoriesLoading } from '../selectors/gameSelectors';
import styles from './Question.css';

const TheBigBoard = () => {
  const dispatch = useDispatch();
  const loading = useSelector(getCategoriesLoading);

  useEffect(() => {
    dispatch(setCategoriesLoading());
    fetchCategoryIds(400)
      .then(categoryIds => {
        dispatch(setCategoryIds(categoryIds));
        return categoryIds;
      })
      .then(categoryIds => {
        return Promise.all(categoryIds.map(categoryId => (
          fetchCategoryById(categoryId)
        ))).then(res  => dispatch(setCategories(res)));
      });
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
