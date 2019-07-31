function a () { }

function b () { }

b.prototype = new a() // 

const c = new b() // question all c have a fn

function d () {
  a.call(this)
}

const dd = new d() // solution all have

//caculate

function parent (name) {
  this.name = name
}

parent.prototype.getName = function () {
  console.log(this.name)
}

function child (name, year) {
  this.year = year
  parent.call(this, name)
}

child.prototype = new parent()
child.prototype.constructor = child

const child1 = new child('near', '18')

child1.getName()