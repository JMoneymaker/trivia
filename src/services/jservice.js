export const getRandomQuestion = () => {
  return fetch('https://jservice.io/api/random')
    .then(res => res.json());
};

export const fetchCategoryById = categoryId => {
  return fetch(`https://jservice.io/api/clues?category=${categoryId}`)
    .then(res => res.json());
};

// export const fetchCategoryIds = offset => {
//   return fetch(`https://jservice.io/api/categories?count=100&offset=${offset}`)
//     .then(res => res.json())
//     .then(res => res.map(object => object.id));
// };

// export const getQuestionsByCategory = categoryId => {
//   return fetch(`https://jservice.io/api/clues?category=${categoryId}`)
//     .then(questionArray => questionArray.json());
// };
