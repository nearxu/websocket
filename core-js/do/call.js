
// Function.prototype.call = function (context) {
//   if (typeof this !== 'function') {
//     console.log('error this not fn')
//   }
//   context = context || window
//   context.fn = this
//   let result
//   if (arguments[1]) {
//     result = context.fn(...arguments[1])
//   } else {
//     result = context.fn()
//   }
//   delete context.fn
//   return result
// }

// 执行上下文 

let fn, bar // 1、进入全局上下文环境

bar = function (x) {
  let b = 5
  fn(x + b) // // 3、进入fn函数上下文环境
}

fn = function (y) {
  let c = 5
  console.log(y + c) //4、fn出栈，bar出栈
}

let c = bar(10) // 2、进入bar函数上下文环境

// 生成变量对象，顺序：创建 arguments 对象 --> 创建function函数声明 --> 创建var变量声明
// 生成作用域链
// 确定this的指向
// 函数执行阶段

let fns = function () {
  console.log(this.name)
}

let obj = {
  name: '',
  fns
}

fns() // undefined
obj.fns() // this => obj

fns.call(obj) // call change this obj

let instance = new fns() // new obj instance

// all sort  fn() < obj.fn() < fn.call(obj) < new fn()

let single = (function () {
  let count = 0
  return {
    plus () {
      return ++count
    },
    minuts () {
      return --count
    }
  }
})()

single.plus()
single.minuts()

