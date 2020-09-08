import { useState, useEffect } from 'react';
import { fetchCategoryById } from '../services/jservice';
import { getRandomCategoryId } from '../data/getRandomCategoryIds';
import validateCategory from '../data/categoryValidator';

const useSingleJeopardy = () => {
  const [singleJeopardy, setSingleJeopardy] = useState([]);
  const [categoryComplete, setCategoryComplete] = useState(false);
  const [loading, setLoading] = useState(false);

  let singleJeopardyArray = [];
  
  const getSingleJeopardy = () => {
    setLoading(true);
    const categoryId = getRandomCategoryId();
    fetchCategoryById(categoryId)
      .then(validateCategory)
      .then(category => category && singleJeopardyArray.push(category))
      .then(() => singleJeopardyArray.length === 6 ? setCategoryComplete(true) : getSingleJeopardy())
      .then(setSingleJeopardy(singleJeopardyArray))
      .finally(() => setLoading(false))
      .catch();
  };

  useEffect(getSingleJeopardy, []);
  // I actually want this to trigger when the larger game state changes...
  
  return [loading, singleJeopardy, categoryComplete];

};

export default useSingleJeopardy;


//make a while loop instead of the Promise.all
// while(categories.length < 6)
// get random index
// fetch by random id
// validate result and check that category Id is not in categories
// set categories
