//map forEach filter find reduce!!!
//reduce - accumulator function, initial value
const numbers = [1,2,3,4,5];
//accumulator function has two parameter\
// const total = numbers.reduce((previous, current) => previous + current,0)
const total = numbers.reduce((previous, current) => {
    console.log(previous, current);
  return previous + current;
}, 0);
