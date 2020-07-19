const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for(const key in collection) {
        callback(collection[key])
      }
      return collection
    },

    map: function(collection, callback) {
      const newCollection = []
      for(const key in collection) {
        newCollection.push(callback(collection[key]))
      }
      return newCollection
    },

    reduce: function(collection, callback, acc) {
      let result = (acc ? acc : collection[0])
      let coll = Object.assign({}, collection)
      acc ? "" : delete coll[0]

      for(let key in coll) {
        result = (callback(result, coll[key], coll))
      }
      return result
    },

    find: function(collection, predicate){
      for (const i in collection) {
        if (predicate(collection[i]) === true) {
          return collection[i]
          }
      }
    },

    filter: function(collection, predicate) {
      const newArr = []
      for (const i in collection) {
        if (predicate(collection[i]) === true) {
          newArr.push(collection[i])
        }
      }
      return newArr
    },

    size: function(collection) {
      return Object.keys(collection).length
    },

    first: function(array, n) {
      const newArr = []
      if (n === undefined) {
        return array[0]
      } else {
        return array.slice(0, n)
      }
    },

    last: function(array, n) {
      const newArr = []
      if (n === undefined) {
        return array[array.length-1]
      } else {
        return array.slice(array.length - n)
      }
    },

    compact: function(array) {
      const newArr = []
      for (const i in array){
        if (array[i]) {
          newArr.push(array[i])
        }
      }
      return newArr
    },

    sortBy: function(arr, iteratee){
      return [...arr].sort(function(a,b) {return iteratee(a) - iteratee(b)})
    },

    flatten: function flatten(array, shallow){
      let newArr = []
      for(const i in array){
        if (shallow === true){
          if(Array.isArray(array[i])) {
              newArr = newArr.concat(array[i])
          } else {
              newArr.push(array[i])
          }
        }
        else {
          if(Array.isArray(array[i])) {
              newArr = newArr.concat(flatten(array[i]))
          } else {
              newArr.push(array[i])
          }
        }
      }
      return newArr
    },

    uniq: function(collection, isSorted = false, callback = (e => e)) {
      let uniqArray = []
      let last = null
      for(let elem of collection) {
        if(!(isSorted && elem === last)) {
          if(!uniqArray.find(e => e.elemValue === callback(elem))){
            uniqArray.push({elem, elemValue: callback(elem)})
            last = elem
          }
        }
      }
      return uniqArray.map(e => e.elem)
    },

    keys: function(obj) {
      return Object.keys(obj)
    },

    values: function(obj) {
      return Object.values(obj)
    },

    functions: function(fi) {
      let newArr = []
     for(const i in fi){
       if(typeof fi[i] == "function" ){
       newArr.push(fi[i])
       }
     }
     newArr.sort()
     return newArr
   },

    functions: function(collection) {
      let result = []
      for(let key in collection) {
        if(typeof collection[key] === 'function') { result.push(collection[key]) }
      }
      return result.sort().reverse()
    },


  }
})()

fi.libraryMethod()
