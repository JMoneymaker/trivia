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
