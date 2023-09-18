//You are given an array of numbers. Your task is to use iteration methods
// to filter and transform this array.

const numbers = [10, 13, 20, 25, 38, 35, 40];

/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
Q1) Create a new array containing numbers that are greater than or equal to 25.
Q2) Create a new array containing numbers that are divisible by 5.
******************************************************************/
function filterIt(x){
    return x > 25;
}
const newArr = numbers.filter(filterIt);
console.log(newArr);

function filterIt2(x){
return x %5 == 0;
}
const newArr2 = numbers.filter(filterIt2);
console.log(newArr2);

/*****************************************************************
Part 2: Mapping

Write code to perform the following tasks using the map method:

Q3) Create a new array that contains each number squared.
Q4) Create a new array that contains each number multiplied by 2.
******************************************************************/
const squaredArr = numbers.map((number) => number ** 2);
console.log(squaredArr);

const doubleNumbers =numbers.map((number) => number * 2);
console.log(doubleNumbers);
/*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

Q5) Filter the numbers that are greater than or equal to 20 and then square each of them.
Q6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/
const filterAndSquared = numbers
.filter((number) => number >= 20)
.map((number) => number ** 2);
console.log(filterAndSquared);

const filterAndMuliplied = numbers
.filter((number) => number %5 === 0 )
.map((number) => number * 3);
console.log(filterAndMuliplied);


