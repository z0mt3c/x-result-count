'use strict'

module.exports = {
  parse (value) {
    if (typeof value === 'string') {
      const indexOfMinus = value.indexOf('-')
      const indexOfSlash = value.indexOf('/', indexOfMinus)

      if (indexOfSlash !== -1 && indexOfMinus !== -1) {
        const skip = parseInt(value.substring(0, indexOfMinus), 10)
        const stop = parseInt(value.substring(indexOfMinus + 1, indexOfSlash), 10)
        const total = parseInt(value.substr(indexOfSlash + 1), 10)
        return {skip: skip, count: stop - skip, total: total}
      }
    }

    return null
  },
  generate (data) {
    if (data && data.skip >= 0 && data.count >= 0 && data.total >= 0) {
      const from = data.skip
      const to = from + data.count
      return `${from}-${to}/${data.total}`
    } else {
      return null
    }
  }
}
