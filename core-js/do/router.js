class Router {
  constructor() {
    this.routes = []
    this.index = ''
  }
  storeRoute (path, cb) {
    this.routes[path] = cb
  }
  freshRoute () {
    this.index = location.hash.slice(1) || ''
    this.routes[this.index]
  }
}