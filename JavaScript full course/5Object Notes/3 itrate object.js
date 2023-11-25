// itrate object
const person = {
    name : "Shahzaib",
    age : 18,
    "person hobbies" : ["Programming", "Watching Movies", "Gamming"]
};

// for in loop
for(let key in person){
    // console.log(key); // key names will print
    // console.log(person[key]); //keys values will print
    console.log(key , " : ", person[key]); //OR
    // console.log(`${key} : ${person[key]}`);
}

// Object.keys
// console.log(Object.keys(person));
for(let key of Object.keys(person)){
    // console.log(key); // key name will print
    // console.log(person[key]); //keys values will print
    // console.log(key , " : ", person[key]); //OR
    console.log(`${key} : ${person[key]}`);
}