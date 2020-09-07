import React from 'react';
// import Modal from 'react-modal';
import PropTypes from 'prop-types';
import styles from './Question.css';

const Question = ({ question, value, answer, category }) => {
  
  console.log(question, value, answer, category);
  return (
    <li className={styles.Question}>
      <h1>{value}</h1>
      {/* <p>{question}</p>
      <p>{answer}</p> */}
    </li>
  );
};



Question.propTypes = {
  question: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  answer: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired
};

export default Question;
