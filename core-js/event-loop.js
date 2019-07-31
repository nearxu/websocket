
//  主线程循环：即主线程会不停的从执行栈中读取事件，会执行完所有栈中的同步代码

// 任务队列: 遇到一个异步事件后，并不会一直等待异步事件返回结果，而是会将这个事件挂在与执行栈不同的队列中

let a = () => {
  setTimeout(() => {
    console.log('任务队列 1')
  }, 0)
  for (let i = 0; i < 500; i++) {
    console.log('a for 500')
  }
}

let b = () => {
  setTimeout(() => {
    console.log('任务队列 2')
  }, 0)
  for (let i = 0; i < 500; i++) {
    console.log('b for 500')
  }
}

a()
b()
