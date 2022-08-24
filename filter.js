const numbers = [22, 43, 54, 65, 75,34, 76,23, 77, 60,1];
const bigNums = numbers.filter(number => number > 30);
const tiny = numbers.filter(n => n < 25);
const even = numbers.filter(n => n % 2===0);
// console.log(tiny);
// console.log(bigNums);
// console.log(even);
const products = [
  { id: 1, name: "lenevo", price: 120 },
  { id: 1, name: "Realme", price: 120000 },
  { id: 1, name: "A4Tech", price: 120000 },
  { id: 1, name: "Budi Keyboar", price: 220 },
];
const expesive = products.filter(p => p.price > 100000);
console.log(expesive);