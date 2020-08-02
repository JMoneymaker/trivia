import { useState, useEffect } from 'react';
import { getQuestionsByCategory } from '../services/getTrivia';
// import useCategoryIds from '../hooks/useCategoryIds';

const useCategories = (categoryId) => {
//   const categoryIds = useCategoryIds([]);
  const [questions, setQuestions] = useState([]);

  //   console.log(categoryIds); //this is working

  useEffect(() => {
    getQuestionsByCategory(categoryId)
      .then(res  => setQuestions(res));
  }, []);
  
  return questions ;
};

export default useCategories;

// 18400

