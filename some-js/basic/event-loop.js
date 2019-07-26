
// js 在执行可执行的脚本时，首先会创建一个全局可执行上下文globalContext，每当执行到一个函数调用时都会创建一个可执行上下文（execution context）EC。当然可执行程序可能会存在很多函数调用，那么就会创建很多EC，所以 JavaScript 引擎创建了执行上下文栈（Execution context stack，ECS）来管理执行上下文。当函数调用完成，js会退出这个执行环境并把这个执行环境销毁，回到上一个方法的执行环境...这个过程反复进行，直到执行栈中的代码全部执行完毕:

function fn3 () {
  console.log('f3')
}

function fn2 () {
  console.log()
  fn3()
}