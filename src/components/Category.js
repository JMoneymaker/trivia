import React, { useState, useEffect } from 'react';
import { getCategory } from '../services/getTrivia';
import CategoryItem from './CategoryItem';
import PropTypes from 'prop-types';

const Category = ({ categoryId }) => {
  const [categoryArray, setCategoryArray] = useState([]);

  useEffect(() => {
    getCategory(categoryId)
      .then(res => setCategoryArray(res));
  }, []);

  const aQuestions = (categoryArray.slice(0, 5));

  return (
    <>
      <ul>
        {aQuestions.map((question, i) => 
          <CategoryItem key={i} 
            question={question.question} 
            value={question.value} 
            answer={question.answer} 
            category={question.category.title} 
          />)};
      </ul>
    </>
  );
};

Category.propTypes = {
  categoryId: PropTypes.string.isRequired
};

export default Category;
