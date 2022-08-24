const numbers = [22, 43, 54, 65, 75, 34, 76, 23, 77, 60, 1];
const fives = numbers.find(number => number % 5 === 0);
const fivesAll = numbers.filter(number => number %  5 ===0);
console.log(fives);
console.log(fivesAll);
const products = [
  { id: 1, name: "lenevo", price: 60000 },
  { id: 1, name: "Realme", price: 50000 },
  { id: 1, name: "A4Tech", price: 25000 },
  { id: 1, name: "Budi Keyboar", price: 20000 },
];
const cheap = products.find(product => product.price < 40000);
console.log(cheap)