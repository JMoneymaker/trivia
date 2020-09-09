import React from 'react';
import PropTypes from 'prop-types';
// import { useSelector } from 'react-redux';
// import { getCategories } from '../selectors/gameSelectors';
import Category from './Category';
import styles from './Board.css';


const Board = ({ roundQuestions }) => {

  return ( 
    <>
      <section className={styles.Board}>
        { 
          roundQuestions.map((categoryArray, i) => <Category key={i}questions={categoryArray} />) 
        }
      </section>
    </>
  );
};

Board.propTypes = {
  roundQuestions: PropTypes.array.isRequired,
};

export default Board;
