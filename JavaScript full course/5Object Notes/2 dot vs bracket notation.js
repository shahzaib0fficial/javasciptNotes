// dfference between dot and bracket notation
const person = {
    name : "Shahzaib",
    age : 18,
    "person hobbies" : ["Programming", "Watching Movies", "Gamming"] // key name with space must be written in ""
};

// for accessing key value with space we should use bracket notation
console.log(person["person hobbies"]);

// can only be done by bracket notation
const keyName = "email";

person[keyName] = "shahzaib5330884@gmail.com";
console.log(person);