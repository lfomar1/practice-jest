const analyzeArray = (array) => {
  const min = Math.min(...array);
  const max = Math.max(...array);
  const length = array.length;
  const averageSum = array.reduce((sum, value) => sum + value, 0);
  const average = averageSum / array.length;
  const object = {
    average: average,
    min: min,
    max: max,
    length: length,
  };
  return object;
};
module.exports = analyzeArray;
