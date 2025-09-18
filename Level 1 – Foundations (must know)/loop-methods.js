// Filter method
const age = [12, 18, 22, 15, 30];

const adults = age.filter(a => a >= 18);
// console.log(adults);

// Reduce method
const scores = [10, 20, 30];

const total = scores.reduce((acc, curr) => acc + curr, 0);
// console.log(total);

const numbers = [5, 8, 2, 10, 3];

const minNum = numbers.reduce((acc, curr) => {
    return acc < curr ? acc : curr;
}, numbers[0]);
// console.log(minNum)


const fruits = ["apple", "banana", "apple", "orange", "banana", "apple", "Mango", "banana"];

const fruitCount = fruits.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
}, {});
console.log(fruitCount);