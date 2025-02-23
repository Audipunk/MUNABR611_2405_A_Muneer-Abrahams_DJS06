//ForEach Basics:
/**
 * Function to log each name and each province to the console in the format "Name (Province)".
 * @param {Array<string>} namesArray
 * @param {Array<string>} provincesArray
 */
export const logNamesAndProvinces = (namesArray, provincesArray) => {
    namesArray.forEach((name, index) =>
      console.log(`${name} (${provincesArray[index]})`)
    );
  };
  
  //Uppercase Transformation:
  /**
   * Function to create a new array of province names in all uppercase and log the new array to the console.
   * @param {Array<string>} provincesArray
   */
  export const uppercaseProvinces = (provincesArray) => {
    console.log(provincesArray.map((province) => province.toUpperCase()));
  };
  
  //Name Lengths:
  /**
   * Function to create a new array using map that contains the length of each name.
   * @param {Array<string>} namesArray
   */
  export const calcNameLength = (namesArray) => {
    console.log(namesArray.map((name) => name.length));
  };
  
  //Sorting:
  /**
   * Function to sort sort the provinces alphabetically.
   * @param {Array<string>} provincesArray
   */
  export const sortAphabet = (provincesArray) => {
    //this is done to ensure OG array stays immutable
    console.log([...provincesArray].sort());
  };
  
  //Filtering Cape:
  /**
   * Helper function that filters(based on argument passed) out unwanted items of an array
   * @param {string} filter
   * @returns {Function}
   */
  const countWithout = (filter) => (array) =>
    array.filter((item) => !item.includes(filter)).length;
  //higher-order function dynamically adjusted based on input
  /**
   * HOF that gets called and that makes use of filter countWitout
   * @param {string[]} array
   * @param {string} filter
   */
  export const removeFilterCount = (array, filter) =>
    console.log(countWithout(filter)(array));
  
  //Finding 'S':
  /**
   * Function that creates a boolean array to determine if a name contains a char
   * @param {Array<string>} array
   * @param {char} char
   */
  export const findChar = (array, char) => {
    const handler = (item) =>
      item.split("").some((letter) => letter === char.toString());
    console.log(array.map(handler));
  };
  
  //Creating Object Mapping:
  /**
   * Function that transforms the names array into an object mapping names to their respective provinces.
   * @param {Array<string>} array1
   * @param {Array<string>} array2
   */
  export const arraysToSingleObject = (array1, array2) => {
    const handler = (accumulated, current, index) => {
      accumulated.push({ name: current, province: array2[index] });
      return accumulated;
    };
    console.log(array1.reduce(handler, []));
  };