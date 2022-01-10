var yuan4li = {
  chunk: (array, size) => {
    let n = array.length
    if (n <= size) { return [array] }
    let temp = []
    let result = []

    for (i = 0; i < n; i++){
      temp.push( array[i])
      if (temp.length == size) {
        result.push(temp)
        temp = []
      }
    }
    if (temp.length != 0) {
      result.push(temp)
    }
    return result
  },

  compact: function (array) {
    let result = []
    let n = array.length
    for (let i = 0; i < n; i++){
      if (array[i]) {
        result.push(array[i])
      }
    }
    return result
  },
























}
 