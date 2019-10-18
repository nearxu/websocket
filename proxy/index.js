/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-17 15:49:14
 * @LastEditTime: 2019-10-17 16:25:52
 * @LastEditors: Please set LastEditors
 */
var data = { foo: 'foo' }

var p = new Proxy(data, {
  get (target, key, receiver) {
    return target[key]
  },
  set (target, key, value, receiver) {
    console.log('set value')
    target[key] = value
  }
})

p.foo = 123

var dataArr = [1, 2, 3]

var pArr = new Proxy(dataArr, {
  get (target, key, receiver) {
    // console.log('get value', key)
    // console.log(receiver)
    const res = Reflect.get(target, key, receiver)
    // return target[key]
    return res
  },
  set (target, key, value, receiver) {
    // console.log('set value', key, value)
    // target[key] = value
    // return true
    return Reflect.set(target, key, value, receiver)
  }
})

pArr.push(4)

// proxy 只能代理一层
// 多次触发 set / get

