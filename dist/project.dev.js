"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arraysToSingleObject = exports.findChar = exports.removeFilterCount = exports.sortAphabet = exports.calcNameLength = exports.uppercaseProvinces = exports.logNamesAndProvinces = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

//ForEach Basics:

/**
 * Function to log each name and each province to the console in the format "Name (Province)".
 * @param {Array<string>} namesArray
 * @param {Array<string>} provincesArray
 */
var logNamesAndProvinces = function logNamesAndProvinces(namesArray, provincesArray) {
  namesArray.forEach(function (name, index) {
    return console.log("".concat(name, " (").concat(provincesArray[index], ")"));
  });
}; //Uppercase Transformation:

/**
 * Function to create a new array of province names in all uppercase and log the new array to the console.
 * @param {Array<string>} provincesArray
 */


exports.logNamesAndProvinces = logNamesAndProvinces;

var uppercaseProvinces = function uppercaseProvinces(provincesArray) {
  console.log(provincesArray.map(function (province) {
    return province.toUpperCase();
  }));
}; //Name Lengths:

/**
 * Function to create a new array using map that contains the length of each name.
 * @param {Array<string>} namesArray
 */


exports.uppercaseProvinces = uppercaseProvinces;

var calcNameLength = function calcNameLength(namesArray) {
  console.log(namesArray.map(function (name) {
    return name.length;
  }));
}; //Sorting:

/**
 * Function to sort sort the provinces alphabetically.
 * @param {Array<string>} provincesArray
 */


exports.calcNameLength = calcNameLength;

var sortAphabet = function sortAphabet(provincesArray) {
  //this is done to ensure OG array stays immutable
  console.log(_toConsumableArray(provincesArray).sort());
}; //Filtering Cape:

/**
 * Helper function that filters(based on argument passed) out unwanted items of an array
 * @param {string} filter
 * @returns {Function}
 */


exports.sortAphabet = sortAphabet;

var countWithout = function countWithout(filter) {
  return function (array) {
    return array.filter(function (item) {
      return !item.includes(filter);
    }).length;
  };
}; //higher-order function dynamically adjusted based on input

/**
 * HOF that gets called and that makes use of filter countWitout
 * @param {string[]} array
 * @param {string} filter
 */


var removeFilterCount = function removeFilterCount(array, filter) {
  return console.log(countWithout(filter)(array));
}; //Finding 'S':

/**
 * Function that creates a boolean array to determine if a name contains a char
 * @param {Array<string>} array
 * @param {char} char
 */


exports.removeFilterCount = removeFilterCount;

var findChar = function findChar(array, _char) {
  var handler = function handler(item) {
    return item.split("").some(function (letter) {
      return letter === _char.toString();
    });
  };

  console.log(array.map(handler));
}; //Creating Object Mapping:

/**
 * Function that transforms the names array into an object mapping names to their respective provinces.
 * @param {Array<string>} array1
 * @param {Array<string>} array2
 */


exports.findChar = findChar;

var arraysToSingleObject = function arraysToSingleObject(array1, array2) {
  var handler = function handler(accumulated, current, index) {
    accumulated.push({
      name: current,
      province: array2[index]
    });
    return accumulated;
  };

  console.log(array1.reduce(handler, []));
};

exports.arraysToSingleObject = arraysToSingleObject;