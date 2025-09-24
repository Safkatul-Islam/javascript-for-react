const user = {
    id: 1,
    profile: {
        username: "coder123",
        // email: ""
    },
    hobbies: ["chess", "coding", "gaming"]
};

const { profile: { username = "guest", email = "n/a" }, hobbies: [hobby1, hobby2, ...otherHobbies] } = user;
//with default values if a value is missing default will print out

console.log(`${username} (${email}) likes ${hobby1} and ${hobby2}`)
