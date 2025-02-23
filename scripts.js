import React from "react";

const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

const App = () => {
  const nameProvincePairs = names.map((name, index) => `${name} (${provinces[index]})`);
  const uppercaseProvinces = provinces.map(province => province.toUpperCase());
  const nameLengths = names.map(name => name.length);
  const sortedProvinces = [...provinces].sort();
  const filteredProvinces = provinces.filter(province => !province.includes('Cape'));
  const remainingProvincesCount = filteredProvinces.length;
  const hasS = names.map(name => name.toLowerCase().includes('s'));
  const nameProvinceMapping = names.reduce((acc, name, index) => {
    acc[name] = provinces[index];
    return acc;
  }, {});

  const results = {
    logProducts: products.map(p => p.product),
    filteredByNameLength: products.filter(p => p.product.length <= 5),
    totalPrice: products
      .filter(p => String(p.price).trim() !== '')
      .map(p => ({ ...p, price: Number(p.price) }))
      .reduce((sum, p) => sum + p.price, 0),
    concatenatedProductNames: products.map(p => p.product).join(', '),
    priceExtremes: (() => {
      const pricedProducts = products
        .filter(p => String(p.price).trim() !== '')
        .map(p => ({ ...p, price: Number(p.price) }));
      const highest = pricedProducts.reduce((max, p) => (p.price > max.price ? p : max), pricedProducts[0]);
      const lowest = pricedProducts.reduce((min, p) => (p.price < min.price ? p : min), pricedProducts[0]);
      return `Highest: ${highest.product}. Lowest: ${lowest.product}.`;
    })(),
    objectTransformation: products.map(p => ({ name: p.product, cost: String(p.price).trim() === '' ? null : Number(p.price) }))
  };

  return (
    <div>
      <h1>Provinces and Products Analysis</h1>
      <h2>ForEach Basics</h2>
      <ul>{nameProvincePairs.map((pair, i) => (<li key={i}>{pair}</li>))}</ul>
      
      <h2>Uppercase Provinces</h2>
      <p>{uppercaseProvinces.join(", ")}</p>
      
      <h2>Name Lengths</h2>
      <p>{nameLengths.join(", ")}</p>
      
      <h2>Sorted Provinces</h2>
      <p>{sortedProvinces.join(", ")}</p>
      
      <h2>Filtered Provinces</h2>
      <p>Remaining provinces count: {remainingProvincesCount}</p>
      
      <h2>Finding 'S' in Names</h2>
      <p>{JSON.stringify(hasS)}</p>
      
      <h2>Name to Province Mapping</h2>
      <pre>{JSON.stringify(nameProvinceMapping, null, 2)}</pre>
      
      <h2>Advanced Exercises</h2>
      <pre>{JSON.stringify(results, null, 2)}</pre>
    </div>
  );
};

export default App;
