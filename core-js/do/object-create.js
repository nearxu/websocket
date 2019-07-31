function create (obj) {
  function F () { }
  F.prototype = obj
  return new F()
}


const a = [1, 2, 4]

const b = create(a)

console.log(b)