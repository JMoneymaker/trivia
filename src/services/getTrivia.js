export const getRandomQuestion = () => {
  return fetch('https://jservice.io/api/random')
    .then(res => res.json());
};

export const getCategory = (categotyId) => {
  return fetch(`https://jservice.io/api/clues?category=${categotyId}`)
    .then(res => res.json());
};
