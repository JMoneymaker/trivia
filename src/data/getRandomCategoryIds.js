import categoryIds from './category-ids.json';
const getRandomIndex = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const getRandomIndexes = () => {
  let indexes = [];

  while(indexes.length !== 20){
    const randomIndex = getRandomIndex(0, 18399);
    if(!indexes.includes(randomIndex))
      indexes.push(randomIndex);
  }
  return indexes;
};

export const getRandomCategoryIds = () => {
  const indexArray = getRandomIndexes();
  return indexArray.map(index => categoryIds[index]);
};

export const makeGameRounds = array => {
  let singleJeopardy = [];
  let doubleJeopardy = [];
  array.map(category => {
    if(category[0].value === 100) singleJeopardy.push(category);
    if(category[0].value === 200) doubleJeopardy.push(category);
  });
  return [singleJeopardy, doubleJeopardy];
};
