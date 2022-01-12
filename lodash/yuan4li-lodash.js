var yuan4li = {
  /**
   * 
   * @param {*} array 
   * @param {*} size 
   * @returns 
   */
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

  concat: function (array, values) {
    let result = [],
      n = array.length,
        v = values
    
    for (let i = 0; i < n; i++){
      result.push(array[i])
    }

    
  },
  
  drop: function (array, n = 1) {
    let a = []
    for (let i = n; i < array.length; i++){
      a.push(array[i])
    }
    return a
  },

  dropRight: function (array, n = 1) {
    let a = []
    for (let i = 0; i < array.length - n; i++){
      a.push(array[i])
    }
    return a
  },

  fill: function (array, value, start = 0, end = array.length) {
    for (let i = start; i < end; i++){
      array[i] = value
    }
    return array     
  },

  flatten: function (array) {
    let a = []
    for (let i = 0; i < array.length; i++){
      if (Array.isArray(array(i))) {
        for (let j = 0; j < array[i].length; j++){
          a.push(array[i][j])
        }
      } else {
        a.push(array[i])
      }
    }
    return a
  },

  flattenDeep: function (array) {
    let result = []
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i]))
        flattenDeep(array[i]).forEach(element => result.push(element))
      else
        result.push(i)
    }
  return result
  },
  
  


  



    



























}
 