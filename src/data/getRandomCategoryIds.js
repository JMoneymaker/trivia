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

export const getRandomCategoryId = () => {
  const index = getRandomIndex(0, 18399);
  return categoryIds[index];
};

export const getRandomCategoryIds = () => {
  const indexArray = getRandomIndexes();
  return indexArray.map(index => categoryIds[index]);
};

export const makeGameByRound = (round, category) => {
  if(round === 'single'){
    if(category[0].value === 100) return category;
  } else if(round === 'double'){
    if(category[0].value === 200) return category;
  } else {
    return null;
  }
};

