import { useState, useEffect } from 'react';
import { fetchCategoryById } from '../services/jservice';
import { getRandomCategoryId } from '../data/getRandomCategoryIds';
import validateCategory from '../data/categoryValidator';

const useSingleJeopardy = () => {
  const [singleJeopardy, setSingleJeopardy] = useState([]);
  //   const [loading, setLoading] = useState(true);
  //   const [singleJeopardyCategories, setSingleJeopardyCategories] = useState([]);
  
  const getSingleJeopardy = () => {
    // while(singleJeopardyArray.length < 6){
    const categoryId = getRandomCategoryId();
    fetchCategoryById(categoryId)
      .then(validateCategory)
      .then(category => setSingleJeopardy(...singleJeopardy, category))
      .catch();
  };

  console.log(singleJeopardy, '5');

  useEffect(getSingleJeopardy, []);
  // I actually want this to trigger when the larger game state changes...
  
  return [singleJeopardy];

};

export default useSingleJeopardy;


//make a while loop instead of the Promise.all
// while(categories.length < 6)
// get random index
// fetch by random id
// validate result and check that category Id is not in categories
// set categories
