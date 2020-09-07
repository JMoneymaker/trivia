const removeBadQuestions = array => {
  return array
    .filter(question => question.value && question.question !== '' && !question.invalid_count);
};

const groupByAirdate = (objectArray, property) => {
  return objectArray.reduce(function(acc, obj) {
    let key = obj[property];
    if(!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
};

const removeIncompleteCategories = categoriesObject => {
  return Object.values(categoriesObject)
    .filter(categoryQuestions => categoryQuestions.length === 5);
};

const sortByQuestionValueAndAirdate = categories => {
  return categories.map(category => {
    return category.sort((a, b) => (a.value > b.value) ? 1 : -1);
  }).sort((a, b) => (a.airdate > b.airdate) ? 1 : -1);
};

const validateCategory = array => {
  const goodQuestionsArray = removeBadQuestions(array);
  const categoryGroups = groupByAirdate(goodQuestionsArray, 'airdate');
  const completeCategories = removeIncompleteCategories(categoryGroups);
  return sortByQuestionValueAndAirdate(completeCategories);
};

export default validateCategory;
