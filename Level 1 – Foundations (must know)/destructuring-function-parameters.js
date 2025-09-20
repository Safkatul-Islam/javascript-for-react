/*
1. Quick Explanation
You can destructure objects or arrays directly in function parameters.
This makes your code shorter and cleaner — very common in React for props and state updates.
*/


/*const student = { name: "Ryan", age: 22 };

function greet({ name, age }) {
  console.log(`Hi, I'm ${name} and I'm ${age} years old.`);
}
greet(student);
// Output: Hi, I'm Ryan and I'm 22 years old.
//✅ Instead of function greet(student) { student.name ... }, we pull the values directly.
*/

/*
const numbers = [10, 20, 30];

function printFirst([first, second]) {
  console.log(first, second);
}
printFirst(numbers);
// Output: 10 20
Arrays work the same way: you can grab only the elements you need.
*/

//--------------------------------------------------------------------------------------------

/*
=> Mini Practice
Object example:
const course = { title: "React", hours: 5, level: "Beginner" };
Write a function showCourse that destructures title and hours in the parameters and logs:
Course: React, Hours: 5
Array example:
const scores = [100, 90, 80];
Write a function showScores that destructures the first two elements in parameters and logs them.
*/

//Object example
const course = { title: "React", hours: 5, level: "Beginner" };

function info({ title, hours}) {
    console.log(title, hours);
}
info(course);

//Array example
const scores = [100, 90, 80];

function showScores([first, second]) {
    console.log(first, second);
}
showScores(scores);



//<<<<<<<Default Values + Destructuring>>>>>>>>>>>>>>>>

/*
 Mini Practice
const profile = { name: "Ryan" };
// 👉 Destructure `name` and `age` (set default `age = 18`).
// 👉 Log them.
*/

const profile = { name: "Ryan" };

const { name, age = 18 } = profile
// console.log(name, age);



const book = { title: "React Basics", pages: 200, author: "Dan" };

function showBook({ title, pages, ...extra}) {
    console.log(title, pages, extra);
}
showBook(book);