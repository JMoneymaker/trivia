import { SET_CATEGORIES, SET_CATEGORIES_LOADING, SET_CETEGORY_IDS } from '../actions/gameActions';

export const initialGameState = {
  loading: false,
  categories: [],
  categoryIds: []
};

export default function reducer(state, action) {
  switch(action.type) {
    case SET_CATEGORIES:
      return { ...state, loading: false, categories: action.payload };
    case SET_CATEGORIES_LOADING:
      return { ...state, loading: true };
    case SET_CETEGORY_IDS:
      return { ...state, loading: false, categoryIds: action.payload };
    default:
      return state;
  }
}
