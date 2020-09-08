import { useState, useEffect } from 'react';
import { fetchCategoryById } from '../services/jservice';
import { getRandomCategoryIds } from '../data/getRandomCategoryIds';
import validateCategories from '../data/categoryValidator';

const useCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const categoryIds = getRandomCategoryIds();
    Promise.all(categoryIds.map(categoryId => (
      fetchCategoryById(categoryId))))
      .then(res  => setCategories(validateCategories(res)));
  }, []);
  
  return categories;
};

export default useCategories;


//make a while loop instead of the Promise.all
// while(categories.length < 6)
// get random index
// fetch by random id
// validate result and check that category Id is not in categories
// set categories
