import React from 'react';
import Board from './Board';
// import { fetchCategoryById, fetchCategoryIds } from '../services/jservice';
// import { useSelector } from 'react-redux';
// import { setCategories, setCategoriesLoading, setCategoryIds } from '../actions/gameActions';
// import { getCategoriesLoading } from '../selectors/gameSelectors';
import styles from './TheBigBoard.css';
// import useCategories from '../hooks/useCategories';
// import { makeGameRounds } from '../data/getRandomCategoryIds';
import useSingleJeopardy from '../hooks/useGetSingleJeopardy';

const TheBigBoard = () => {
  // const dispatch = useDispatch();
  // const categories = useCategories();
  const [loading, singleJeopardy] = useSingleJeopardy();
  // const loading = useSelector(getCategoriesLoading);

  if(loading) return <h1>Loading...</h1>;

  return (
    <div className={styles.TheBigBoard}>
      <div className={styles.boardHeader}>
        <header className={styles.statsContainer}>
          <p className={styles.score}>score:</p> 
        </header>
      </div>
      <div className={styles.boardMiddle}>
        <div className={styles.leftBar}></div>
        <div className={styles.categoryGridFrame}>
          <Board 
            singleJeopardy={singleJeopardy}
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
