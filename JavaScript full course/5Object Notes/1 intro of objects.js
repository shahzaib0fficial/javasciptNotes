// obects 
// refernce type
// arrays are good but not sufficient for eal world data
// object store key value pairs
// object don't have index

// how to create objects

const person = {
    name : "Shahzaib",
    age : 18,
    hobbies : ["Programming", "Watching Movies", "Playing Games"]
};

console.log(person);

// access data from object
console.log(person.name);
console.log(person.hobbies[0]);
// second method
console.log(person["age"]);

// add more key value pairs
person.gender = "male";
// OR
person["bestfriend"] = "AbdulAleem";
console.log(person);
console.log(person.bestfriend);