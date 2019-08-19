/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-16 10:52:47
 * @LastEditTime: 2019-08-16 19:20:02
 * @LastEditors: Please set LastEditors
 */
const a = [1, 2, 3, 4, 4, 4, 5, 5]


function fn (arr) {
  let result = []
  let i = 0
  result[i] = [arr[0]];
  arr.reduce(function (prev, cur) {
    (cur === prev) ? result[i].push(cur) : result[++i] = [cur];
    return cur;
  });
  return result;
}
const b = fn(a)

console.log(b)

const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) => arr.slice(i * size, (i + 1) * size))

const bb = [1, 2, 3, 4, 5]

console.log(chunk(bb, 2))

const cc = [1, 2, 33, 34, 34, 44, 45, 66]

const combineCC = arr => {
  let result = []
  let i = 0
  result[i] = [arr[0]]
  arr.reduce((pre, cur) => {
    (cur - pre === 1) ? result[i].push(cur) : result[++i] = [cur]
    return cur
  })
  return result
}

console.log(combineCC(cc))