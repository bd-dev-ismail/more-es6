//Divission by 3 !!!!!!
const numbers = [12, 45, 60, 45, 72, 81];
const divission = numbers.map(x => x/3);
const half = numbers.map(x => x/2)
// console.log(divission);
// console.log(half);
const friends = ['Tom hacks', 'Mark zukarbarg', 'elon mask', 'Tom curus', 'Tom'];
const firstLetter = friends.map(friend => friend[0]);
const nameLength = friends.map(friend => friend.length);
// console.log(firstLetter);
// console.log(nameLength);
const products = [
    {id: 1, name: 'lenevo', price: 120},
    {id: 1, name: 'Realme', price: 12000},
    {id: 1, name: 'A4Tech', price: 1200},
    {id: 1, name: 'Budi Keyboar', price: 220}
];
const productName = products.map(product => product.name);
const prices = products.map(p => p.price);
console.log(productName);
console.log(prices);