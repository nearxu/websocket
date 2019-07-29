let doExchange = function (doubleArrays) {
  let doubleLen1 = 0;
  let doubleLen2 = 0;
  let newLen = 0;
  let tempArr = [];
  let tempIdx = 0;
  let doubleI = 0;
  let doubleJ = 0;
  let doubleK = 0;
  let newTemp = [];
  let doubleLen = doubleArrays.length;

  if (doubleLen > 1) {
    doubleLen1 = doubleArrays[0].length;
    doubleLen2 = doubleArrays[1].length;
    newLen = doubleLen1 * doubleLen2;
    tempArr = new Array(newLen);
    tempIdx = 0;
    for (doubleI = 0; doubleI < doubleLen1; doubleI++) {
      for (doubleJ = 0; doubleJ < doubleLen2; doubleJ++) {
        tempArr[tempIdx] = doubleArrays[0][doubleI] + '&' +
          doubleArrays[1][doubleJ];
        tempIdx++;
      }
    }
    newTemp = new Array(doubleLen - 1);
    for (doubleK = '2'; doubleK < doubleLen; doubleK++) {
      newTemp[doubleK - 1] = doubleArrays[doubleK];
    }
    newTemp[0] = tempArr;

    return doExchange(newTemp);
  }

  return doubleArrays[0];
};
const a = doExchange([[1, 2, 3], ['a', 'b', 'c']])

console.log(a)