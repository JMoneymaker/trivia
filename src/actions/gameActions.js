export const SET_CATEGORIES = 'SET_CATEGORIES';
export const setCategories = categories => ({
  type: SET_CATEGORIES,
  payload: categories
});

export const SET_CATEGORIES_LOADING = 'SET_CATEGORIES_LOADING';
export const setCategoriesLoading = () => ({
  type: SET_CATEGORIES_LOADING
});

export const SET_CETEGORY_IDS = 'SET_CATEGORY_IDS';
export const setCategoryIds = categoryIds => ({
  type: SET_CETEGORY_IDS,
  payload: categoryIds
});

