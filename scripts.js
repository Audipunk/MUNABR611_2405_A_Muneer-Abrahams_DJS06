// A list of provinces:
const provinces = [
  "Western Cape",
  "Gauteng",
  "Northern Cape",
  "Eastern Cape",
  "KwaZulu-Natal",
  "Free State",
];

// A list of names:
const names = [
  "Ashwin",
  "Sibongile",
  "Jan-Hendrik",
  "Sifso",
  "Shailen",
  "Frikkie",
];

// A list of products with prices:
const products = [
  { product: "banana", price: "2" },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: "8" },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// 1
// ForEach Basics:forEach to log each name and each province to the console. Then, log each name with a matching province in the format "Name (Province)".
names.forEach((name) => console.log(name));
provinces.forEach((province) => console.log(province));

// Loops through provinces object and uses index to add name
provinces.forEach((province, i) => {
  console.log(`${names[i]} (${province})`);
  i++;
});

// 2
// Uppercase Transformation: Use map to create a new array of province names in all uppercase. Log the new array to the console.
const uppercaseProvinces = provinces.map((province) => {
  return province.toUpperCase();
});
console.log(uppercaseProvinces);

// 3
// Name Lengths: Create a new array using map that contains the length of each name.
const nameLengths = names.map((name) => {
  return name.length;
});
console.log(nameLengths);

// 4
// Sorting: Use sort to alphabetically sort the provinces.
console.log(provinces.sort());

// 5
// Filtering Cape: Use filter to remove provinces containing "Cape". Log the count of remaining provinces.
const remainingProvinces = provinces.filter((province) => {
  return !province.match("Cape");
  // Returns the number of provinces that don't contain "Cape"
}).length;
console.log(remainingProvinces);

// 6
// Finding 'S': Create a boolean array using map and some to determine if a name contains the letter 'S'.
const findingS = names.map((name) => {
  // Brakes names down into letters and checks for "S"
  return name.split("").some((letter) => letter == "S");
});
console.log(findingS);

// 7
// Creating Object Mapping: Use reduce to transform the names array into an object mapping names to their respective provinces.
const objectMapping = names.reduce((acc, name, i) => {
  acc[name] = provinces[i];
  return acc;
}, {});
console.log(objectMapping);

// Advanced Exercises (Single console.log Execution)
// For these exercises, wrap your logic in a single console.log statement:

// 1
// Log Products: Iterate over the products array, logging each product name.
console.log(...products.map((item) => item.product));

// 2
// Filter by Name Length: Filter out products with names longer than 5 characters.
console.log(products.filter((item) => item.product.length <= 5));

// 3
// Price Manipulation: Filter out products without prices, convert string prices to numbers, and calculate the total price using reduce.
console.log(
  products
    // Filter out products without prices
    .filter((item) => Number(item.price) >= 1)
    // calculates the total price
    .reduce((acc, currentValue) => acc + Number(currentValue.price), 0)
);

// 4
// Concatenate Product Names: Use reduce to concatenate all product names into a single string.
console.log(
  products.reduce((acc, currentValue) => acc + currentValue.product, "")
);

// 5
// Find Extremes in Prices: Identify the highest and lowest-priced items, returning a string formatted as "Highest: X. Lowest: Y."
const minMaxPrice = products
  // Filter out products without prices
  .filter((item) => Number(item.price) >= 1)
  // Converts to an object containg the prices
  .map((item) => item.price);

const min = Math.min(...minMaxPrice);
const max = Math.max(...minMaxPrice);

console.log(`Highest: ${max}`, "\n", `Lowest: ${min}`);

// 6
// Object Transformation: Using Object.entries and reduce, recreate the products object with keys 'name' and 'cost', maintaining their original values.
console.log(
  Object.entries(products).reduce((acc, [i, product]) => {
    acc[i] = { name: product.product, cost: product.price };
    return acc;
  }, {})
);