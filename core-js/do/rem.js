function px2rem (params) {
  let doc = document.documentElement
  let width = doc.getBoundingClientRect().width
  let rem = width / 75
  doc.stytle.fontSize = rem + 'px'
}

addEventListener('resize', px2rem)