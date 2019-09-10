/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-29 11:32:26
 * @LastEditTime: 2019-09-04 15:08:30
 * @LastEditors: Please set LastEditors
 */


/**
 * @description: 从一个二维数组里找出所有可能的组合
 * @param {type} 
 * @return: 
 * 例如
 [
 [a1, a2],
 [b1, b2, b3]
 ]
 预期结果
 a1,b1
 a1,b2
 a1,b3
 a2,b1
 a2,b2
 a2,b3
 思路：
 所有排列组合对应的下标，有一定的规律，例如上面的组合的下标就是
 0,0---0
 0,1---1
 0,2---2
 1,0---3
 1,1---4
 1,2---5
 * 
 设：第一个数组的长度为l1=2, 第二个数组的长度为l2=3, 每种排列对应的顺序从0开始为n，可以得出一个公式
 第一个数组的index i1=n/l2
 第二个数组的index (i2=n%l2)/1
 化为通用的，计算过程就是
 1. 计算所有组合的数目 m=l0*l1*...*ln
 2. 从0～m循环, 当前值记位i
 3. 第一次计算 i=0
 3.1 第一个数组的下标 = i/(l1*...ln)=i/(m/l0)
 3.2 第二个数组的下标 = (i % (m/l0)) / (m/l0/l1)
 */



const caculate = (arr) => {
  let result = []
  for (let i = 1; i <= arr.length; i++) {
    const a = arrayCombine(arr, i)
    result.push({
      mct: i,
      bets: a.length,
      odds: sum(reduceOdds(a))
    })
  }
  return result
}
// 1  2  3  4 5 6
// 6 15 20 15 6 1

const reduceOdds = arr => arr.map(m => sum(m))

const sum = arr => arr.reduce((pre, cur) => pre + cur, 0)

/**
 * 获得指定数组的所有组合
 */
function arrayCombine (targetArr = [], count = 1) {
  if (!Array.isArray(targetArr)) return []

  const resultArrs = []
  // 所有组合的 01 排列
  const flagArrs = getFlagArrs(targetArr.length, count)
  while (flagArrs.length) {
    const flagArr = flagArrs.shift()
    resultArrs.push(targetArr.filter((_, idx) => flagArr[idx]))
  }
  return resultArrs
}
/**
 * 获得从 m 中取 n 的所有组合
 * 思路如下：
 * 生成一个长度为 m 的数组，
 * 数组元素的值为 1 表示其下标代表的数被选中，为 0 则没选中。
 *
 * 1. 初始化数组，前 n 个元素置 1，表示第一个组合为前 n 个数；
 * 2. 从左到右扫描数组元素值的 “10” 组合，找到第一个 “10” 组合后将其变为 “01” 组合；
 * 3. 将其左边的所有 “1” 全部移动到数组的最左端
 * 4. 当 n 个 “1” 全部移动到最右端时（没有 “10” 组合了），得到了最后一个组合。
 */
function getFlagArrs (m, n = 1) {
  if (n < 1 || m < n) return []

  // 先生成一个长度为 m 字符串，开头为 n 个 1， 例如“11100”
  let str = '1'.repeat(n) + '0'.repeat(m - n)
  let pos
  // 1
  const resultArrs = [Array.from(str, x => Number(x))]
  const keyStr = '10'

  while (str.indexOf(keyStr) > -1) {
    pos = str.indexOf(keyStr)
    // 2
    str = str.replace(keyStr, '01')
    // 3
    str = Array.from(str.slice(0, pos))
      .sort((a, b) => b - a)
      .join('') + str.slice(pos)
    // 4
    resultArrs.push(Array.from(str, x => Number(x)))
  }
  return resultArrs
}

const a = caculate([1, 2, 3, 4, 5, 6, 7, 8])

console.log(a)