import { useState, useEffect } from 'react';
import { getCategory } from '../services/jservice';
import useCategoryIds from '../hooks/useCategoryIds';

const useCategories = () => {
  const categoryIds = useCategoryIds();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    Promise.all(categoryIds.map(({ categoryId }) => (
      getCategory(categoryId)
    ))).then(res  => setCategories(res));
  }, [categoryIds]);
  
  return categories;
};

export default useCategories;

// 18400

