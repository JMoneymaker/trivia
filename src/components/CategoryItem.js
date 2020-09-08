import React from 'react';
import PropTypes from 'prop-types';
import styles from './Question.css';

const CategoryItem = ({ value, question, answer, category }) => {
    
  return (
    <div className={styles.Question}>
      <h1>{category}</h1>
      <h1>{value}</h1>
      <p>{question}</p>
      <p>{answer}</p>
    </div>
  );
};

CategoryItem.propTypes = {
  question: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired
};

export default CategoryItem;
