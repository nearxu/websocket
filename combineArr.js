/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-02 16:32:05
 * @LastEditTime: 2019-09-02 20:56:27
 * @LastEditors: Please set LastEditors
 */
const arr1 = [
  { id: 0, val: 0 },
  { id: 1, val: 1 },
  { id: 2, val: 2 },
  { id: 3, val: 3 },
  { id: 4, val: 4 },
]

// // result [[0,1,2,3,4],[0,1,2,3,4]]

const combineArr = arr => {
  // do some
  // 通过hash收集所有的keys
  let hash = {};
  arr.forEach(v => Object.keys(v).forEach(key => hash[key] = hash[key] || []));

  // 返回数组
  return Object.keys(hash).map(key => arr.map(v => v[key]));
}

const a = combineArr(arr1)
console.log(a)

