/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-03 10:56:53
 * @LastEditTime: 2019-09-03 11:00:33
 * @LastEditors: Please set LastEditors
 */
const a = ['a', 'b', 'c']
const b = [
  { 'a': 1, 'b': 11, 'c': 111 },
  { 'a': 2, 'b': 22, 'c': 222 },
  { 'a': 3, 'b': 33, 'c': 333 },
]

const combine = (a, b) => {
  return a.map(m => b.map(item => [].push(item[m])))
}

const c = combine(a, b)
console.log(c)