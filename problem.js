                 //Parties Problem -1
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
// console.log(even);
//Make even Number With array.map!
const even1 = numbers.map(e => e + 1);
// console.log(even1);
/*2) You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now
return/get all the elements which are divisible by 10 using
array.filter() method.
*/
const divisibleNums = [33, 50, 79, 78, 90, 101, 30];
const divisibleTen = divisibleNums.filter((num) => num % 10 === 0);
// console.log(divisibleTen);
// 3) Now do the same task of question 2. But do this using array.find()
// method. Then compare the output of question 2 & question 3.
const useFind = divisibleNums.find(num => num % 10 === 0);
// console.log(useFind);
/**\                   Practice Problem reduce()
 * 1) You have an array [ 1, 9, 17, 22 ]. Add the all elements
of this array and give output. Do this using for loop &
array.reduce() method.
 */
const arr = [1, 9, 17, 22];
let sum = 0;
for(let i = 0; i < arr.length; i++){
    // sum = sum + arr[i];
    sum += arr[i];
}
// console.log(sum);
//using array.reduce()
const total = arr.reduce((previous, current) =>{
    return  previous + current;
}, 0 );
// console.log(total);
/**
 * 1) Challenging Follow above array of objects. So, you have 3 objects as
array element. Can you find out the total sum from here?

20 + 15 + 22 = 57 . The output will be 57

What are you thinking? Yeah! Do it with for loop. I know you can do it.
But! Wait !! Wait !!! Do the same task using array.reduce() method.
 */
const people = [
    {name: 'ismail', age: 20},
    {name: 'sabbir', age: 15},
    {name: 'tushar', age: 22}
];
//array.reduc() method
const sumAge = people.reduce((previous, current) => {
    return previous + current.age;
},0);
// console.log(sumAge);
//ForLoop
let sum1 = 0;
for(let i =0; i<people.length; i++){
    sum1 += people[i].age;
}
// console.log(sum1);
/**
 * Practice Problem: Access Object values
 */
const student = {
    name: 'frade',
    age: 38,
}
// console.log(student.age);
/**
 * Practice Problem: Access Object values
 */
const data = {
    location: [
        {
            latitude: '34, 65, 45,66',
            longatitude: '35.64, 46,46',
            city: 'Hyderabad',
            country: 'India',
        }
    ]
};
const FindCity = data.location[0].city;
// console.log(data.location[0].city);
/**
 * ● Console the value of email
● Console the value of address
● Console the value of city
● Console the value of lat
● Console the value of company
name
 */
const user = {
    id: 1,
    name: "Ismail Hossen",
    username: "ratul",
    email: "ismailratul7@gmail.com",
    address: {
        street: "Kumira, Sitakunda",
        suite: "Kazi para",
        city: "Chittagong",
        zipcode: '2334545',
        geo: {
            lat: "34.455",
            lng: "34,2342343",
        }
    },
    phone: "01834835454",
    website: "ismailratul.com",
    company: {
        name: "Team Yellow",
        catchPharse: "Multilayer client -services neural-net",
        bs: "slf realtime e -markets"
    }
};
/*console.log(user.email);//Email
console.log(user.address);//Address
console.log(user.address.city);//City
console.log(user.address.geo.lat);//Lat
console.log(user.company.name);//Name of company
*/



















