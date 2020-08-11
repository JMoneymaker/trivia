import React from 'react';
import Question from './Question';
import PropTypes from 'prop-types';
import styles from './Category.css';

const Category = ({ questions }) => {
  
  return (
    <>
      <ul className={styles.Category}>
        <li>Category</li>
        {questions.map(question => 
          <Question key={question.id} 
            question={question.question} 
            value={question.value} 
            answer={question.answer}
            category={question.category.title} 
          />)}
      </ul>
    </>
  );
};

Category.propTypes = {
  questions: PropTypes.array.isRequired
};

export default Category;
