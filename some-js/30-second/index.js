// bifurcate

const bifurcate = (arr, filter) =>
  arr.reduce((pre, cur, index) => (pre[filter[index] ? 0 : 1].push(cur), pre), [[], []])

const a = bifurcate(['q', 'w', 'e'], [true, false, true])
console.log(a)

const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  )

const b = chunk([1, 2, 3, 4, 5, 6, 7], 3)
console.log(b)

const countby = arr =>
  arr.reduce((pre, cur) => {
    (cur in pre) ? pre[cur]++ : (pre[cur] = 1)
    return pre
  }, {})

const c = countby([1, 1, 2, 2, 3, 3, 3, 3, 4, 5])

console.log(c)

// math.max(...arr)
const mathMax = obj =>
  Math.max(...Object.keys(obj).map(m => obj[m]))

const d = mathMax(c)

console.log(d)

const countCurrent = (arr, val) => {
  return arr.reduce((pre, cur) => cur === val ? pre + 1 : pre, 0)
}

const f = countCurrent(['a', 'b', 'c', 'c'], 'c')

console.log(f)

const deepFloat = arr =>
  [].concat(...arr.map(m => Array.isArray(m) ? deepFloat(m) : m))

const h = deepFloat([1, 2, [3, 4, [5, [6]]]])

console.log(h)

const diff = (a, b) => {
  const s = new Set(b)
  return a.filter(m => s.has(m))
}

// return a.map(fn).filter(m => s.has(m))
const aa = diff([1, 2, 4], [1, 2])
console.log(aa)

const drop = (arr, n) => arr.slice(n)

const findLastIndex = (arr, fn) =>
  arr.map((v, i) => [i, v])
    .filter(([i, v]) => fn(v, i))
    .pop()[0]

const bb = findLastIndex([1, 2, 3, 4], (n) => n % 2 === 0)

console.log(bb)

const findeIndexArr = (arr, val) =>
  arr.reduce((pre, cur, i) => cur === val ? [...pre, i] : pre, [])

const cc = findeIndexArr([1, 2, 3, 2, 2, 3], 2)

console.log(cc)

const initMNArr = (m, n, val = null) =>
  Array.from({ length: m }).map(() => Array.from({ length: n }).fill(val))

const dd = initMNArr(3, 3, 3)
console.log(dd)

