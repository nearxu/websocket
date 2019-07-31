

// delete arr index
// let arr = [1, 2, 3, 4, 5]
// const clone = Object.assign({}, arr)
// clone.splice(index, 1)
// arr = clone
// console.log(clone)

// 2 arr diff and so on ,delete !
const diffArr = (a, b) => {
  const s = new Set(b)
  return a.filter(m => !s.has(m))
}


const arr1 = [
  { id: 0 },
  { id: 0 },
  { id: 1 }
]

const commonArr = arr => {
  return arr.filter(i => arr.indexof(i) !== arr.lastIndexOf(i))
}

// pipefunction

const pipefunction = (...fns) => fns.reduce((pre, cur) => (...args) => pre(cur(...args)))
const a1 = () => console.log('1')
const a2 = () => console.log('2')
const a3 = () => console.log('3')
pipefunction(a1, a2, a3)() // 321

// sleep

// 
const promisefy = fnc => (...args) => {
  return new Promise((resolve, reject) => fnc(...args, (err, result) => (err ? reject(err) : resolve(result))))
}

const sleep = (ms) => new Promise((resolve, reject) => setTimeout(resolve, ms))

// deepFlatten
const deepFlatten = arr => [].concat(...arr.map(v => Array.isArray(v) ? deepFlatten(v) : v))
console.log(deepFlatten([1, [2, 3, [4, 5, [6]]]]))

// diff
const diff = (a, b) => {
  const s = new Set(a);
  return b.filter(m => s.has(m))
}

const dff2 = (a) => {
  return a.filter(m => a.indexof(m) === a.lastIndexOf(m))
}

// drop
const drop = (arr, n = 1) => arr.slice(n)

const dropRight = (arr, n) => arr.slice(0, -n)

// indexofall
const indexAll = (arr, val) => arr.reduce((pre, cur) => cur === val ? pre.concat(cur) : pre, [])

console.log(indexAll([1, 2, 3, 1, 1], 1))

// array fill
const arrFill = (v, n) => (new Array(n)).fill(v)

console.log(arrFill(3, 3))

// minn and so on, maxn
const minN = arr => arr.sort((a, b) => a - b).slice(0, 1)
const maxN = arr => arr.sort((a, b) => a - b).slice(-1)

console.log(minN([1, 2, 3]), maxN([4, 5, 6]))

// remove

const removeArr = (arr, fn) => {
  return Array.isArray(arr) ?
    arr.filter(fn)
    : []
}

console.log(removeArr([1, 2, 3, 4], (n) => n % 2 === 0))

// similar
const similar = (a, b) => a.filter(m => b.includes(m))

console.log(similar([1, 2, 3, 4, 2], [1, 2, 3]))

// find diff
const findDiff = (a, b) => {
  const s = new Set(a)
  const v = new Set(b)
  return [...a.filter(m => !v.has(m)), ...b.filter(i => !s.has(i))]
}

console.log(findDiff([1, 2, 3], [3, 4, 5]))

// concat two arr

const concatArr = (a, b) => Array.from(new Set([...a, ...b]))
const setArr = arr => [...new Set(arr)]

// [] [id,name] item => item.id >24
const reduceFilter = (data, keys, fn) =>
  data.filter(fn).map(m =>
    keys.reduce((pre, cur) => {
      pre[cur] = m[cur]
      return pre
    })
  )

const remove = (arr, fn) =>
  Array.isArray(arr) ?
    arr.filter(fn).reduce((pre, cur) => {
      pre.splice(pre.indexOf(cur), 1)
      return pre.concat(cur)
    }, [])
    :
    []

const rr = remove([1, 2, 3, 4], n => n % 2 === 0)

console.log(rr, 'rr')

const rrr = (arr, fn) => arr.filter(fn)

console.log(rrr([1, 2, 3, 4], n => n % 2 === 0))