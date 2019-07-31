function deepClone (obj) {
  let clone = Array.isArray(obj) ? [] : {}
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      clone[i] = typeof obj[i] === 'obj' ? deepClone(obj[i]) : obj[i]
    }
  }
  return clone
}

// JSON.parse(JSON.stringify(obj))