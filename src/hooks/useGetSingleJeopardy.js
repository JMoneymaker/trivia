import { useState, useEffect } from 'react';
import { fetchCategoryById } from '../services/jservice';
import { getRandomCategoryId, makeGameByRound } from '../data/getRandomCategoryIds';
import validateCategory from '../data/categoryValidator';

const useJeopardyRound = (round = 'single') => {
  const [jeopardyRound, setJeopardyRound] = useState([]);
  const [categoryComplete, setCategoryComplete] = useState(false);
  const [loading, setLoading] = useState(false);

  let jeopardyRoundArray = [];
  
  const getJeopardyRound = () => {
    setLoading(true);
    const categoryId = getRandomCategoryId();
    fetchCategoryById(categoryId)
      .then(validateCategory)
      .then(category => category && makeGameByRound(round, category))
      .then(category => category && jeopardyRoundArray.push(category))
      .then(() => jeopardyRoundArray.length === 6 ? setCategoryComplete(true) : getJeopardyRound())
      .then(() => setLoading(false))
      .finally(() => setJeopardyRound(jeopardyRoundArray))
      .catch();
  };

  useEffect(getJeopardyRound, [round]);
  // I actually want this to trigger when the larger game state changes...
  
  return [loading, jeopardyRound, categoryComplete];

};

export default useJeopardyRound;


//make a while loop instead of the Promise.all
// while(categories.length < 6)
// get random index
// fetch by random id
// validate result and check that category Id is not in categories
// set categories
