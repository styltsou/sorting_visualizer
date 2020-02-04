const resetArray = (min, max, len) => {
  const arr = [];

  for (let i = 0; i < len; i++) {
    arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }

  return arr;
};

export default resetArray;
