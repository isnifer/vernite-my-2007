module.exports = function dolboebify(string) {
  let isUp = true
  return string.split('').reduce((memo, item) => {
    let current = item
    if (current !== ' ') {
      current = isUp ? current.toUpperCase() : current.toLowerCase()
      isUp = !isUp
    }

    return memo + current
  }, '')
}
