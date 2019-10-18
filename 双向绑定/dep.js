/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-18 17:06:45
 * @LastEditTime: 2019-10-18 17:06:45
 * @LastEditors: your name
 */
function dep () {
  this.subs = []
}

dep.prototype = {
  addSub: function (sub) {
    this.subs.push()
  },
  notify: function () {
    this.subs.forEach((sub) => sub.update())
  }
}