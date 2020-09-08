const fs = require('fs').promises;
const superagent = require('superagent');

const fetchCategoryIds = offset => {
  const url = `https://jservice.io/api/categories?count=100&offset=${offset}`;
  return superagent
    .get(url)
    .then(res => res.body)
    .then(res => res.map(object => object.id))
    .then(writeIdsToFile)
    .catch();
};

const writeIdsToFile = fetchedIds => {
        
  return fs.readFile('category-ids.json', 'utf8')
    .then(data => { 
      const oldIds = JSON.parse(data);
      return fs.writeFile('category-ids.json', JSON.stringify([...oldIds, ...fetchedIds]), 'utf8'); 
    });
};

const saveIds = async() => {
  let offset = 0;
  while(offset !== 18400){
    await fetchCategoryIds(offset);
    offset += 100;
    console.log(offset);
  }
    
};

saveIds()
  .then(() => console.log('Ids saved'));
