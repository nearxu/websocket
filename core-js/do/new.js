//  创建一个新对象且将其隐式原型指向构造函数原型
function New (fn) {
  return function () {
    let obj = {
      __proto__: fn.prototype
    }
    fn.call(obj, ...arguments)
    return obj
  }
}

const a = (name) => this.name = name

let b = New(a)('near')

console.log(b)