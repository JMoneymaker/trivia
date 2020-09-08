import { useState, useEffect } from 'react';
import { fetchCategoryById } from '../services/jservice';
import { getRandomCategoryId } from '../data/getRandomCategoryIds';
import validateCategory from '../data/categoryValidator';

const useSingleJeopardy = () => {
  const [singleJeopardy, setSingleJeopardy] = useState([]);
  const [loading, setLoading] = useState(true);
  const [singleJeopardyCategories, setSingleJeopardyCategories] = useState([]);
  
  const getSingleJeopardy = () => {
    setLoading(true);
    const categoryId = getRandomCategoryId();

    fetchCategoryById(categoryId)
      .then(validateCategory)
      .then(setSingleJeopardyCategories(categoryId))
      .then(category => setSingleJeopardy(...singleJeopardy, category))
      .finally(setLoading(false))
      .catch();

  };

  console.log(singleJeopardy, '5');

  useEffect(getSingleJeopardy, []);
  // I actually want this to trigger when the larger game state changes...
  
  return [loading, singleJeopardy, singleJeopardyCategories];

};

export default useSingleJeopardy;


//make a while loop instead of the Promise.all
// while(categories.length < 6)
// get random index
// fetch by random id
// validate result and check that category Id is not in categories
// set categories
