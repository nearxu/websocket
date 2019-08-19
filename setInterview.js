/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-19 14:24:21
 * @LastEditTime: 2019-08-19 14:27:50
 * @LastEditors: Please set LastEditors
 */
var timeRun = 0
var interval = setInterval(function () {
  ++timeRun
  console.log(timeRun, 'timerun')
  if (timeRun === 3) {
    console.log('stop')
    clearInterval(interval)
  }
}, 1000)