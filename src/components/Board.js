import React from 'react';
import PropTypes from 'prop-types';
// import { useSelector } from 'react-redux';
// import { getCategories } from '../selectors/gameSelectors';
import Category from './Category';
import styles from './Board.css';


const Board = ({ singleJeopardy, doubleJeopardy }) => {
  // const categories = useSelector(getCategories);
  const firstRound = singleJeopardy.slice(0, 6);
  const secondRound = doubleJeopardy.slice(0, 6);
  // const [gameRound, setGameRound] = useState('single');
  let gameRound = 'single';

  return ( 
    <>
      <section className={styles.Board}>
        {gameRound === 'single' ? 
          firstRound.map((category, i) => <Category key={i}questions={category} />) 
          : secondRound.map((category, i)=> <Category key={i}questions={category} />)}
      </section>
    </>
  );
};

Board.propTypes = {
  singleJeopardy: PropTypes.array.isRequired,
  doubleJeopardy: PropTypes.array.isRequired
};

export default Board;
