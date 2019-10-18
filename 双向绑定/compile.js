/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-18 17:06:45
 * @LastEditTime: 2019-10-18 17:06:45
 * @LastEditors: your name
 */
function compile (node, exp) {
  var self = this
  var initText = this.vm[exp]
  this.updateText(node, initText)
  new Watcher(this.vm, exp, function (value) {
    self.updateText(node, value)
  })
}