import React from 'react';
import CategoryItem from './CategoryItem';

const Category = (questions) => {

  return (
    <>
      <ul>
        {questions.map((question, i) => 
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


export default Category;
