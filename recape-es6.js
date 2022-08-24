// var let & const 
//Break up with var!
const numbers = [34,34, 54, 45];
let salary = 455;
salary = 500;
//2 Defult parameter
//calculate salary
function calculateSalary(salary, tax = 0.25, bonus = 0){
    const remaning = salary - salary*tax;
    const total = remaning + bonus;
    return total;
}
//Template String 
const elementHtml = `
<div>
<h3>Hello World</h3>
<p>${numbers[2]}</p>
<p>${calculateSalary(100,0 ,0)}</p>
</div>
`;
///Arrow function
const dubble = x => x*5;
const calculateSalary2 = (salary, tax, bonus) => salary - salary*tax + bonus;
//Spraed Operator
const ages = [22, 43, 54, 34, 23,10];
const newAges = [...ages, 77, 66, 6, 30];
// console.log( newAges);
//destructing
const {x,y, z, ...c}= [ x: 45, y: 33, z: 23, name:'sakibAl hasan', salary = 450000];
const [a, b, ...r] =[23, 243, 45, 4564, 34 ,34];