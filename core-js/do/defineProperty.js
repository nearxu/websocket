let data = {
  name: 'near'
}

const defineNative = obj => {
  Object.keys(data).forEach((key) => {
    Object.defineProperty(data, key, {
      set: function () {
        console.log('set：' + key)
      },
      get: function () {
        console.log('get:' + obj[key])
      }
    })
  })
}

defineNative(data)

data.name
data.name = 'xxx'