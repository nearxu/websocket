let user = {
  name: 'tom',
  year: 18
}

let proxy = new Proxy(user, {
  get (target, property) {
    let val = target[property]
    return val
  },
  set (target, property, val) {
    target[property] = val
  }
})