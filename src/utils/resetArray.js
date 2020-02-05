const resetArray = (len) => {
  const arr = [];
  const min = 10;
  const max = 800;

  for (let i = 0; i < len; i++) {
    arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }

  return arr;
};

export default resetArray;
