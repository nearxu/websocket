class EventEmit {
  constructor() {
    this.events = this.events || new Map()
  }
  add (type, fn) {
    if (!this.events.get(type)) {
      this.events.set(type, fn)
    }
  }
  emit (type) {
    let handle = this.events.get(type)
    handle.apply(this, [...arguments].slice(1))
  }
}

let emits = new EventEmit()

emits.add('age', (age) => {
  console.log(age)
})

emits.emit('age', 18)