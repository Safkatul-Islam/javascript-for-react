// const book = {title: "React basics", page: 200};

// const{ title, page } = book;
// // console.log(title, page);

const course = {
    title: "React",
    details: { hours: 5, level: "beginner" }
};

const { title, details: { hours: duration, level } } = course;
console.log(title, duration, level);