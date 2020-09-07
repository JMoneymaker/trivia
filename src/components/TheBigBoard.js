import React from 'react';
import Board from './Board';
// import { fetchCategoryById, fetchCategoryIds } from '../services/jservice';
import { useSelector } from 'react-redux';
// import { setCategories, setCategoriesLoading, setCategoryIds } from '../actions/gameActions';
import { getCategoriesLoading } from '../selectors/gameSelectors';
import styles from './Question.css';
// import useCategories from '../hooks/useCategories';
// import { makeGameRounds } from '../data/getRandomCategoryIds';
import useSingleJeopardy from '../hooks/useGetSingleJeopardy';

const TheBigBoard = () => {
  // const dispatch = useDispatch();
  // const categories = useCategories();
  const [singleJeopardy] = useSingleJeopardy();
  const loading = useSelector(getCategoriesLoading);

  console.log(singleJeopardy);
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
          <Board 
            singleJeopardy={singleJeopardy}
            // doubleJeopardy={doubleJeopardy}
          />
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
