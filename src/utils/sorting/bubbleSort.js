// import swap from '../swap';

const bubbleSort = arr => {
  let swapped;
  let data = {swaps: [], comparisons: []};
  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        data.swaps.push({
          idxa: i,
          idxb: i + 1
        });
        swapped = true;
      }
    }
  } while (swapped);
  return data.swaps;
};

export default bubbleSort;
