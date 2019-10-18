/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-18 17:06:45
 * @LastEditTime: 2019-10-18 17:08:46
 * @LastEditors: Please set LastEditors
 */
// definedProperty


let person = {}
Object.defineProperty(person, 'name', {
  get () {
    console.log('name属性被读取了...');
    return val;
  },
  set (newVal) {
    console.log('name属性被修改了...');
    val = newVal;
  }
})

person.name = 'tom'