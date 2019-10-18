/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-17 16:58:18
 * @LastEditTime: 2019-10-17 17:22:20
 * @LastEditors: Please set LastEditors
 */
/**
 * @description: 订阅模式
 * @param {type} 
 * @return: 
 */

var observer = {
  add: function (callback) {
    this.subscribes.push(callback)
  },
  remove: function (callback) {
    this.subscribes.forEach((m, i) => {
      if (m === callback) {
        this.subscribes.splice(i, 1)
      }
    })
  },
  publish: function (args) {
    this.subscribes.forEach(m => m(args))
  }
}

