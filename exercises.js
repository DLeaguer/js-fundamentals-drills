/* #doubleArray
 *
 * Takes in an array of numbers and returns an array with each element doubled
 *
 * @param {Array} // [1,2,3]
 * @return {Array} // [2,4,6]
 */
var doubleArray = function(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2) 
  }
  return result
}

/* #sumArrays
 *
 * Takes in two arrays of numbers and returns the sum of both arrays.
 *
 * @param {Array} // [1,2,3]
 * @param {Array} // [4,5,6]
 * @return {Bool} // 21
 */
var sumArrays = function(arr1, arr2) {
  var sum = 0;
  for (var i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  for (var j = 0; j < arr2.length; j++) {
    sum += arr2[j];
  }
  return sum;
}


/* #stringCount
 *
 * Takes in a string and returns the length of the string.
 *
 * @param {String}
 * @return {Number}
 */
var stringCount = function(str) {
  return str.length;
}

/* #arrayLength
 *
 * Takes in an array and returns the length of the array.
 *
 * @param {Array}
 * @return {Number}
 */
var arrayLength = function(arr) {
  return arr.length;
}

/* #countAll
 *
 * Takes in an array and returns the sum of all numbers in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var countAll = function(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

/* #countStrings
 *
 * Takes in an array of strings and returns an array of string lengths.
 *
 * @param {Array} // ['dog', 'cat', 'bird']
 * @return {Array}
 */
var countStrings = function(arr) {
  var strLengths = [];
  for (var i = 0; i < arr.length; i++) {
    strLengths.push(arr[i].length);
  }
  return strLengths;
}

/* #countAllStrings
 *
 * Takes in an array of strings and returns the sum of all string lengths.
 *
 * @param {String} // ['dog', 'cat', 'bird']
 * @return {Number}
 */
var countAllStrings = function(str) {
  var strLengths = 0;
  for (var i = 0; i < str.length; i++) {
    strLengths += str[i].length;
  }
  return strLengths;
}

/* #convertToArray
 *
 * Takes in an object and returns all the values of the object in an array.
 *
 * @param {Object}
 * @return {Array}
 */
var convertToArray = function(obj) {
  var arr = [];
  for (var key in obj) {
    arr.push(obj[key]);
  }
  console.log(arr);
  return arr;
}

/* #objectSize
 *
 * Takes in an object and returns the number of key value pairs in the object.
 *
 * @param {Object}
 * @return {Number}
 */
var objectSize = function(obj) {
  var count = 0;
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
        count++;
    }
  }
  console.log(count);
  return count;
}

/* #createZeroFilledArray
 *
 * Takes in a number and fills an array with that number of zeroes.
 *
 * @param {Number}
 * @return {Zero}
 */
var createZeroFilledArray = function(num) {
  console.log(num);
  var zeros = [];
  for (var i = 0; i < num; i++) {
    zeros.push(0);
  }
  console.log(zeros);
  return zeros;
}


/* #poppedArray
 *
 * Takes in an array of numbers and returns an array of all but the last element of the array.
 *
 * @param {Array}
 * @return {Array}
 */
var poppedArray = function(arr) {
  arr.splice(-1);
  return arr;
}

/* #splitString
 *
 * Takes in a string and returns an array of each individual character in the string.
 *
 * @param {String}
 * @return {Array}
 */
var splitString = function(str) {
  var arr = str.split("");
  return arr;
}

/* #lengthOfLast
 *
 * Takes in an array of strings and returns the length of the last string.
 *
 * @param {String}
 * @return {Number}
 */
var lengthOfLast = function(str) {
  console.log(str);
  var lastStr = str.pop();
  console.log(lastStr);
  console.log(lastStr.length);
  return lastStr.length;
}

/* #sumBelowTen
 *
 * Takes in an array of numbers and returns the sum of all numbers below 10.
 *
 * @param {Array}
 * @return {Number}
 */
var sumBelowTen = function(arr) {
  var sum = 0;
  for (var i = 0; i < 10; i++) {
    if (typeof arr[i] !== typeof undefined && arr[i] < 10) {
      sum += arr[i];
      console.log('arr[i] ' + arr[i]);
     }
  }
  console.log('sum ' + sum);
  return sum;
}


/* #moreThanTenLetters
 *
 * Takes in an array of strings and returns the amount of elements that have more than ten letters.
 *HANDY LINKS
 * @param {String}
 * @return {Number}
 */
var moreThanTenLetters = function(str) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    console.log(str[i]);
    if (str[i].length > 10) {
      console.log(str[i]);
      count++;
    }
  }
  console.log(count);
  return count;
}

/* #multiplyAll
 *
 * Takes in an array of numbers and returns the product of all elements.
 *
 * @param {Array}
 * @return {Number}
 */
var multiplyAll = function(arr) {
  console.log(arr);
  var product = 1;
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    product *= arr[i];
  }
  console.log(product);
  return product;
}

/* #sumAllPositive
 *
 * Takes in an array of numbers and returns the sum of all non-negative numbers.
 *
 * @param {String}
 * @return {Number}
 */
var sumAllPositive = function(str) {
  console.log(str);
  var sum = 0;
  for (var i = 0; i < str.length; i++) {
    console.log(str[i]);
    if (str[i] > 0) {
      sum += str[i];
    }
  }
  console.log(sum);
  return sum;
}

/* #stringCountBelowThree
 *
 * Takes in an array of strings and returns the amount of strings that have three characters or less.
 *
 * @param {Array}
 * @return {Number}
 */
var stringCountBelowThree = function(arr) {
  console.log(arr);
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i].length <= 3) {
      count++;
      console.log(count);
    }
  }
  console.log(count);
  return count;
}

/* #countObjects
 *
 * Takes in an array of objects and returns the amount of objects in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var countObjects = function(arr) {
  console.log(arr);
  var count = 0;
  for (var key in arr) {
    console.log(arr[key]);
    count++;
  }
  console.log(count);
  return count;
}

/* #getObjectKeys
 *
 * Takes in an object and returns an array of all the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getObjectKeys = function(obj) {
  console.log(obj);
  for (var key in obj) {
    console.log(obj[key]);
  }
  console.log(Object.keys(obj));
  return Object.keys(obj);
}

/* #getObjectValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
var getObjectValues = function(obj) {
  console.log(obj);
  var arr = [];
  for (var key in obj) {
    console.log(obj[key]);
    arr.push(obj[key]);
  }
  console.log(arr);
  return arr;
}

/* #makeObject
 *
 * Takes in two arguments 'key' and 'value' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Object}
 */
var makeObject = function(key, value) {
  console.log(key);
  console.log(value);
  var obj = {};
  obj[key] = value;
  console.log(obj);
  return obj;
}

/* #makeObjectReverse
 *
 * Takes in two arguments 'value' and 'key' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Bool}
 */
var makeObjectReverse = function(value, key) {
  console.log(value);
  console.log(key);
  var obj = {};
  obj[key] = value;
  console.log(obj);
  return obj;
}

/* #tupleToObject
 *
 * Takes in a tuple (an array with two elements) and returns it into a single key-value pair in an object.
 *
 * @param {Array}
 * @return {Object}
 */
var tupleToObject = function(arr) {
  console.log(arr);
  var obj = {};
  for (var i = 0; i < arr.length-1; i++) {
    console.log(arr[i] + ' ' +arr[i + 1]);
    obj[arr[i]] = arr[i + 1];
  }
  console.log(obj);
  return obj;
}

/* #tupleToObjectReverse
 *
 * Takes in a tuple and returns it into a single key-value pair with second tuple element as key and first tuple element as value.
 *
 * @param {Array}
 * @return {Object}
 */
var tupleToObjectReverse = function(arr) {
  console.log(arr);
  var obj = {};
  for (var i = 0; i < arr.length-1; i++) {
    console.log(arr[i] + ' ' + arr[i + 1]);
    obj[arr[i + 1]] = arr[i];
  }
  console.log(obj);
  return obj;
}

/* #strToKeys
 *
 * Takes in an array of strings and returns an object with all string elements as the object's keys and all values set to 0.
 *
 * @param {Array}
 * @return {Object}
 */
var strToKeys = function(arr) {
  console.log(arr);
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    obj[arr[i]] = 0;
  }
  console.log(obj);
  return obj;
}

/* #getValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
var getValues = function(obj) {
  console.log(obj);
  var arr = [];
  for (var key in obj) {
    arr.push(obj[key]);
  }
  console.log(arr);
  return arr;
}

/* #getKeys
 *
 * Takes in an object and returns an array of the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getKeys = function(obj) {
  console.log(obj);
  console.log(Object.keys(obj));
  return Object.keys(obj);
}

/* #objectToArray
 *
 * Takes in an object and returns an array of tuples where each tuple has 
 * the object's key as element 0 and object's value as element 1.
 *
 * @param {Object}
 * @return {Array}
 */
var objectToArray = function(obj) {
  console.log(obj);
  // var arr = Object.entries(obj);
  // console.log(arr);
  // return arr;
  var arr = [];
    for (var key in obj) {
      arr.push([key, obj[key]]);
    }
    console.log(arr);
    return arr;
}

/* #arrayToObject
 *
 * takes in an array and returns an object with keys set to the elements in the array and
 * all values set to false.
 *
 * @param {Array}
 * @return {Object}
 */
var arrayToObject = function(arr) {
  console.log(arr);
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    obj[arr[i]] = false;
  }
  console.log(obj);
  return obj;
}

/* #arraysToObject
 *
 * takes in two arrays, the first array elements will be keys of an object and second array elements 
 * will be values of an object.
 *
 * @param {Array}
 * @param {Array}
 * @return {Object}
 */
var arraysToObject = function(key, value) {
  console.log(key, value);
  var obj = {};
  for (var i = 0; i < key.length; i++) {
    obj[key[i]] = value[i];
  }
  console.log(obj);
  return obj;
}

/* #objectsToTuples
 *
 * takes in two objects and returns an array of tuples of the key value pairs of all objects in both arrays.
 *
 * @param {Object}
 * @param {Object}
 * @return {Array}
 */
var objectsToTuples = function(obj1, obj2) {
  console.log(obj1, obj2);
  var arr = [];
  for (var key in obj1) {
    arr.push([key, obj1[key]]);
  }
  for (var prop in obj2) {
    arr.push([prop, obj2[prop]]);
  }
  console.log(arr);
  return arr;
}

/* #mapArrayValues
 *
 * takes in an array of strings and returns an object with keys of the array elements and values all set to True.
 *
 * @param {Array}
 * @return {Object}
 */
var mapArrayValues = function(arr) {
  console.log(arr);
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
   obj[arr[i]] = true;
  }
  console.log(obj);
  return obj;
}

/* #mapStringCounts
 *
 * takes in an array of strings and returns an object with key names set to the elements in the array.
 * If the character count of the key name is greater than or equal to 5 set the value to true,
 * otherwise set to false.
 *
 * @param {Array}
 * @return {Object}
 */
var mapStringCounts = function(arr) {
  console.log(arr);
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length >= 5) {
      obj[arr[i]] = true;
    }
    else {
      obj[arr[i]] = false;
    }
  }
  console.log(obj);
  return obj;
}

/* #arrayToObjectNums
 *
 * takes in an array of numbers and returns an object with keys set to 
 * each element of the array and all values set to true.
 *
 * @param {Array}
 * @return {Object}
 */
var arrayToObjectNums = function(arr) {
  console.log(arr);
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    obj[arr[i]] = true;
  }
  console.log(obj);
  return obj;
}

/* #stringToKeys
 *
 * takes in a string and returns an object whos keys are each letter of the string and all values set to true.
 * 
 * @param {String}
 * @return {Object}
 */
var stringToKeys = function(str) {
  console.log(str);
  var arr = str.split('');
  console.log(arr);
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    obj[arr[i]] = true;
  }
  console.log(obj);
  return obj;
}

/* #charCountMap
 *
 * takes in an array of strings and returns an object with keys set to each element of the array 
 * and values set to the character count of each key name.
 *
 * @param {Array}
 * @return {Object}
 */
var charCountMap = function(arr) {
  console.log(arr);
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    obj[arr[i]] = arr[i].length;
  }
  console.log(obj);
  return obj;
}

/* #frequencyMap
 *
 * takes in an array of strings and returns an object with the string as the key and the number of occurences as the value.
 *
 * @param {String}
 * @return {Bool}
 */
var frequencyMap = function(str) {
  console.log(str);
  var obj = {}, i, value;
  for (var i = 0; i < str.length; i++) {
    value = str[i];
    if (typeof obj[value] === 'undefined') {
      obj[value] = 1;
    }
    else {
      obj[value]++;
    }
  }
  console.log(obj);
  return obj;
}

/* #tupleConvertToObject
 *
 * takes in an array of tuples and and returns an object whos keys are 
 * the first element of the tuples and values are second element of the tuples.
 *
 * @param {String}
 * @return {Bool}
 */
var tupleConvertToObject = function(arr) {
  console.log(arr);
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    for (var j = 0; j < arr[i].length-1; j++) {
      console.log(arr[i][j]);
      obj[arr[i][j]] = arr[i][j + 1];
    }
  }
  console.log(obj);
  return obj;
}


module.exports = {
  doubleArray: doubleArray,
  sumArrays: sumArrays, 
  stringCount: stringCount,
  arrayLength: arrayLength,
  countAll: countAll,
  countStrings: countStrings,
  countAllStrings: countAllStrings,
  convertToArray: convertToArray,
  objectSize: objectSize,
  createZeroFilledArray: createZeroFilledArray,
  poppedArray: poppedArray,
  splitString: splitString,
  lengthOfLast: lengthOfLast,
  sumBelowTen: sumBelowTen,
  moreThanTenLetters: moreThanTenLetters,
  multiplyAll: multiplyAll,
  sumAllPositive: sumAllPositive,
  stringCountBelowThree: stringCountBelowThree,
  countObjects: countObjects,
  getObjectKeys: getObjectKeys,
  getObjectValues: getObjectValues,
  makeObject: makeObject,
  makeObjectReverse: makeObjectReverse,
  tupleToObject: tupleToObject,
  tupleToObjectReverse: tupleToObjectReverse,
  strToKeys: strToKeys,
  getValues: getValues,
  getKeys: getKeys,
  objectToArray: objectToArray,
  arrayToObject: arrayToObject,
  arraysToObject: arraysToObject,
  objectsToTuples: objectsToTuples,
  mapArrayValues: mapArrayValues,
  mapStringCounts: mapStringCounts,
  arrayToObjectNums: arrayToObjectNums,
  stringToKeys: stringToKeys,
  charCountMap: charCountMap,
  frequencyMap: frequencyMap,
  tupleConvertToObject: tupleConvertToObject
}