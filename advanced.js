//@ts-check
// ========= Advanced Exercises (Single console.log Execution) ===========
//Log Products:
/**
 * Function that iterates over the products array, logging each product name.
 * @param {Array<{ product: string, price: number }>} productsArray
 * @returns {void}
 */
export const logProductName = (productsArray) =>
    productsArray.forEach((singleProduct) => console.log(singleProduct.product));
  
  //Filter by Name Length:
  /**
   * function that filters out products with names longer than 5 characters.
   * @param {Array<string>} namesArray
   */
  export const filterByNameLength = (namesArray) => {
    console.log(namesArray.filter((name) => name.length < 6));
  };
  
  //Price Manipulation:
  /**
   * function that filters out products without prices, converts string prices
   * to numbers, and calculates the total price
   * @param {Array<{ product: string, price: number| string }>} productsArray
   */
  export const priceManipulation = (productsArray) =>
    console.log(
      productsArray
        .filter((product) => product.price && product.price !== "")
        .map((product) => Number(product.price))
        .reduce((total, price) => total + price, 0)
    );
  
  //Concatenate Product Names:
  /**
   * function that concatenates all product names into a single string.
   * @param {Array<object>} array
   */
  export const concatArray = (array) => {
    console.log(array.reduce((acc, curr) => acc + curr.product + ", ", ""));
  };
  
  //Find Extremes in Prices: logic is
  /**
   * Function that identifies the highest and lowest-priced items,
   * @param {Array<{ product: string, price: number | string }>} products
   * @returns {object} containing highest and lowest price and produce
   */
  const getExtreme = (products) => {
    return products
      .filter((product) =>
        typeof product.price === "string"
          ? product.price.trim() !== ""
          : product.price !== undefined
      )
      .map((product) => ({
        ...product,
        price:
          typeof product.price === "string"
            ? Number(product.price)
            : product.price,
      }))
      .reduce(
        (acc, product) => {
          if (product.price > acc.highest.price) acc.highest = product;
          if (product.price < acc.lowest.price) acc.lowest = product;
          return acc;
        },
        { highest: { price: -Infinity }, lowest: { price: Infinity } }
      );
  };
  
  /**
   * HOF that calls function getExtreme and logs a string formatted as "Highest: X. Lowest: Y."
   * @param {Array<{ product: string, price: number }>} products
   */
  export const findExtremePrices = (products) => {
    console.log(
      `Highest: ${getExtreme(products).highest.product} at ${
        getExtreme(products).highest.price
      }. Lowest: ${getExtreme(products).lowest.product} at ${
        getExtreme(products).lowest.price
      }.`
    );
  };
  
  //Object Transformation:
  /**
   * Transforms an array of products into an array of objects with `name` and `cost` keys.
   *
   * @param {Array<{ product: string, price: number }>} products - The array of product objects.
   */
  export const objectKeyTransformation = (products) => {
    console.log(
      Object.entries(products).reduce((acc, curr) => {
        /** @type {{ name: string, cost: any }[]} */
        const updatedAcc = acc;
        updatedAcc.push({
          name: curr[0],
          cost: curr[1].price,
        });
        return updatedAcc;
      }, /** @type {{ name: string, cost: any }[]} */ ([]))
    );
  };