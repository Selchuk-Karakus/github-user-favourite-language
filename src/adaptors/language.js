const GetLanguageAdaptor = (repos) => {
  const getAllLanguages = repos
    .filter((repo) => repo.language !== null)
    .map((filteredRepo) => filteredRepo.language);

  // Count the occurrence of each language
  const countOfLanguages = getAllLanguages.reduce((countOfLan, language) => {
    Object.keys(countOfLan).includes(language)
      ? countOfLan[language]++
      : (countOfLan[language] = 1);
    return countOfLan;
  }, {});

  // Match the highest occurrence with the language and identify its ind
  let maxIndex = Object.values(countOfLanguages).reduce(
    (maxValInd, numOccurrence, ind) => {
      if (numOccurrence > maxValInd.max) {
        maxValInd.max = numOccurrence;
        maxValInd.index = ind;
      }
      return maxValInd;
    },
    { index: 0, max: 0 }
  ).index;
  // Use the index of the most occurring language to grab it from the collection
  let maxLanguageOccurs = Object.keys(countOfLanguages)[maxIndex];
  return maxLanguageOccurs;
};

export default GetLanguageAdaptor;
