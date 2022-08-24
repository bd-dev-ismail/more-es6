const numbers = [2, 4, 6, 8, 3];
// const output = [];
// for (const number of numbers) {
//   const dubble = number * 2;
//   output.push(dubble);
// }
// console.log(output);
function getDubbles(numbers) {
  const output = [];
  for (const number of numbers) {
    const dubble = dubbleIt(number);
    output.push(dubble);
  }
  return output;
}/**
1.Get an array!
2.for elements of the array do something
3.store the result in an new ARray
4.return the result array!
*/
function dubbleItOld(num){
    return num * 2;
}
const dubbleIt = num => num * 2;
const makeDubble = numbers.map(dubbleIt);
const makeDubbleDrict = numbers.map(num => num * 2);
const dubbleDubble = numbers.map(x => x*2);
const result = getDubbles(numbers);
// console.log(result);
// console.log(makeDubble);
// console.log(makeDubbleDrict);
// console.log(dubbleDubble);
const multiply = [1,2,3,4,5,6,7,8,9,10].map(x => x *4);
console.log(multiply);