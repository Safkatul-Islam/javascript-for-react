// Spread & Rest Array (... )

const arrA = [10, 20, 30];
const arrB = [40, 50];

const arrC = [...arrA, ...arrB];
// console.log(arrC);

const [start , ...others] = arrC;
// console.log(start);
// console.log(others);

// Spread & Rest (Objects)

const profile = { first: "Ryan", last: "Lee", age: 22 };

const updatedProfile = { ...profile, city: "LA" };
console.log(updatedProfile);

const { first, ...otherInfo } = updatedProfile;
console.log(first);
console.log(otherInfo);