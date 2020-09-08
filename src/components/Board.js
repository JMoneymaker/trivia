import React from 'react';
import PropTypes from 'prop-types';
// import { useSelector } from 'react-redux';
// import { getCategories } from '../selectors/gameSelectors';
import Category from './Category';
import styles from './Board.css';


const Board = ({ singleJeopardy }) => {
  // const categories = useSelector(getCategories);
  const firstRound = singleJeopardy.slice(0, 6);
  // const [gameRound, setGameRound] = useState('single');

  return ( 
    <>
      <section className={styles.Board}>
        { 
          firstRound.map((category, i) => <Category key={i}questions={category} />) 
        }
      </section>
    </>
  );
};

Board.propTypes = {
  singleJeopardy: PropTypes.array.isRequired,
};

export default Board;
