//Topic 1 — Variables (let vs const)


// let can be reassigned
let count = 5;
count = count + 1; // count is now 6

// const cannot be reassigned
const name = "Aisha";
// name = "Bob"; // ❌ TypeError: Assignment to constant variable

// but const object properties can change
const user = { name: "Aisha", score: 10 };
user.score = 11; // ✅ allowed
// user = { name: "Bob" }; // ❌ reassigning binding is not allowed

// => Avoid var for modern code (it has weird scoping/hoisting).

//--------------------------------------------------------------------------------

//My code
const firstName = "Ryan";

let studyHours = 3;
studyHours = studyHours + 2;

const profile = { firstName, studyHours }; 
profile.studyHours = 10; 
//profile = { firstName: " bob" };

console.log(profile);