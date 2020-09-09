import { useState, useEffect } from 'react';
import { fetchCategoryById } from '../services/jservice';
import { getRandomCategoryId, makeGameByRound } from '../data/getRandomCategoryIds';
import validateCategory from '../data/categoryValidator';

const useGameRound = (round) => {
  const [roundQuestions, setRoundQuestions] = useState([]);
  const [roundReady, setRoundReady] = useState(false);

  let roundQuestionsArray = [];
  
  const fetchRoundQuestions = () => {
    const categoryId = getRandomCategoryId();
    fetchCategoryById(categoryId)
      .then(validateCategory)
      .then(category => category && makeGameByRound(round, category))
      .then(category => category && roundQuestionsArray.push(category))
      .then(() => roundQuestionsArray.length === 6 ? setRoundReady(true) : fetchRoundQuestions())
      .finally(() => setRoundQuestions(roundQuestionsArray))
      .catch(error => console.log(error));
  };

  useEffect(fetchRoundQuestions, [round]);
  
  return [roundQuestions, roundReady];

};

export default useGameRound;
