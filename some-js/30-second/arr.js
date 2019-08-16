/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-16 10:52:47
 * @LastEditTime: 2019-08-16 11:05:58
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