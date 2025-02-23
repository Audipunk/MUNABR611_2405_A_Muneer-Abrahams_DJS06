"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.objectKeyTransformation = exports.findExtremePrices = exports.concatArray = exports.priceManipulation = exports.filterByNameLength = exports.logProductName = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//@ts-check
// ========= Advanced Exercises (Single console.log Execution) ===========
//Log Products:

/**
 * Function that iterates over the products array, logging each product name.
 * @param {Array<{ product: string, price: number }>} productsArray
 * @returns {void}
 */
var logProductName = function logProductName(productsArray) {
  return productsArray.forEach(function (singleProduct) {
    return console.log(singleProduct.product);
  });
}; //Filter by Name Length:

/**
 * function that filters out products with names longer than 5 characters.
 * @param {Array<string>} namesArray
 */


exports.logProductName = logProductName;

var filterByNameLength = function filterByNameLength(namesArray) {
  console.log(namesArray.filter(function (name) {
    return name.length < 6;
  }));
}; //Price Manipulation:

/**
 * function that filters out products without prices, converts string prices
 * to numbers, and calculates the total price
 * @param {Array<{ product: string, price: number| string }>} productsArray
 */


exports.filterByNameLength = filterByNameLength;

var priceManipulation = function priceManipulation(productsArray) {
  return console.log(productsArray.filter(function (product) {
    return product.price && product.price !== "";
  }).map(function (product) {
    return Number(product.price);
  }).reduce(function (total, price) {
    return total + price;
  }, 0));
}; //Concatenate Product Names:

/**
 * function that concatenates all product names into a single string.
 * @param {Array<object>} array
 */


exports.priceManipulation = priceManipulation;

var concatArray = function concatArray(array) {
  console.log(array.reduce(function (acc, curr) {
    return acc + curr.product + ", ";
  }, ""));
}; //Find Extremes in Prices: logic is

/**
 * Function that identifies the highest and lowest-priced items,
 * @param {Array<{ product: string, price: number | string }>} products
 * @returns {object} containing highest and lowest price and produce
 */


exports.concatArray = concatArray;

var getExtreme = function getExtreme(products) {
  return products.filter(function (product) {
    return typeof product.price === "string" ? product.price.trim() !== "" : product.price !== undefined;
  }).map(function (product) {
    return _objectSpread({}, product, {
      price: typeof product.price === "string" ? Number(product.price) : product.price
    });
  }).reduce(function (acc, product) {
    if (product.price > acc.highest.price) acc.highest = product;
    if (product.price < acc.lowest.price) acc.lowest = product;
    return acc;
  }, {
    highest: {
      price: -Infinity
    },
    lowest: {
      price: Infinity
    }
  });
};
/**
 * HOF that calls function getExtreme and logs a string formatted as "Highest: X. Lowest: Y."
 * @param {Array<{ product: string, price: number }>} products
 */


var findExtremePrices = function findExtremePrices(products) {
  console.log("Highest: ".concat(getExtreme(products).highest.product, " at ").concat(getExtreme(products).highest.price, ". Lowest: ").concat(getExtreme(products).lowest.product, " at ").concat(getExtreme(products).lowest.price, "."));
}; //Object Transformation:

/**
 * Transforms an array of products into an array of objects with `name` and `cost` keys.
 *
 * @param {Array<{ product: string, price: number }>} products - The array of product objects.
 */


exports.findExtremePrices = findExtremePrices;

var objectKeyTransformation = function objectKeyTransformation(products) {
  console.log(Object.entries(products).reduce(function (acc, curr) {
    /** @type {{ name: string, cost: any }[]} */
    var updatedAcc = acc;
    updatedAcc.push({
      name: curr[0],
      cost: curr[1].price
    });
    return updatedAcc;
  },
  /** @type {{ name: string, cost: any }[]} */
  []));
};

exports.objectKeyTransformation = objectKeyTransformation;