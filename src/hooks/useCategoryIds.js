import { useState, useEffect } from 'react';
import { getCategoryIds } from '../services/jservice';

const useCategoryIds = () => {
  const [categoryIds, setCategoryIds] = useState([]);

  useEffect(() => {
    getCategoryIds(300)
      .then(res => setCategoryIds(res));
  }, []);
  
  return categoryIds;
};

// const categoryValidator = category => {
//   return category.length % 5 === 0 &&
//     category[0].value === 200 || category[0].value === 400 ? 
//     { ...category } : null;
// };

// const questionValidator = questions => {
// };

// const validateCategory = (categoryQuestions) => {
//   return categoryQuestions.filter(categoryValidator);
// };

export default useCategoryIds;

// 18400
