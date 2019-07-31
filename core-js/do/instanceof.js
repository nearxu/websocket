function instance (left, right) {
  let lf = left.__proto__
  let rt = right.prototype
  while (true) {
    if (lf === null || rt === null) {
      return false
    }
    if (lf === rt) {
      return true
    }
    lf = lf.__proto__
  }
}

function Person () { } // fn have prototype

const person = new Person() // obj have __proto__

console.log(Person.prototype === person.__proto__)

// constructor => fn

console.log(Person === Person.prototype.constructor)

// prototype null

console.log(Object.prototype.__proto__ === null)
