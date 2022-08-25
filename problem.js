/*1) You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
Now convert this array into an even array (array with even
numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
method. Hints: add one to any odd number and it will become an even
number.
*/
const numbers = [1, 3, 5, 7, 9];
//make even number with for loop
    let even = [];
    for(let i = 0; i< numbers.length; i++){
        if(numbers[i] % 2 !== 0){
            let total = numbers[i] + 1;
            even.push(total);
        }
    };
console.log(even);
//Make even Number With array.map!
const even1 = numbers.map(e => e + 1);
console.log(even1);