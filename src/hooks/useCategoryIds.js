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

export default useCategoryIds;

// 18400
