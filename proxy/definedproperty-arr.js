/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-17 16:30:50
 * @LastEditTime: 2019-10-17 16:56:25
 * @LastEditors: Please set LastEditors
 */
// 还是老套路，定义一个observe方法
function defineReactive (data, key, val) {
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get: function defineGet () {
      console.log(`get key: ${key} val: ${val}`)
      return val
    },
    set: function defineSet (newVal) {
      console.log(`set key: ${key} val: ${newVal}`)
      // 还记得我们上面讨论的闭包么
      // 此处将新的值赋给val，保存在内存中，从而达到赋值的效果
      val = newVal
    }
  })
}
function observe (data) {
  Object.keys(data).forEach(function (key) {
    defineReactive(data, key, data[key])
  })
}

let test = [1, 2, 3]
// 初始化
observe(test)
// object and array 一样监听

// 然后数组做了一层特别的处理

// push splice