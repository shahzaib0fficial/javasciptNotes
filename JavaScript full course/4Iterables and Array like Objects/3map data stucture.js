// map is an iterable

// store data in order fashion

// store key value pair like objects
// dublicate keys are not allowed like objects

// difference between maps and objects

// objects can only have string or symbols as key

// maps have any type of key like array number string


// object
/*
const obj1 = {
    firstName :"shahzaib",
    age : 18,
    1 : "one"
}

console.log(obj1.firstName);
console.log(obj1["age"]);
console.log(obj1[1]);

for(let key in obj1){
    console.log(typeof key);
}
*/


// maps
const person = new Map();

person.set("firstName" , "Shahzaib");
person.set('age' , 18);
person.set(1 , "one");
// person.set([1,2,3], "onetwothree");
// person.set({1:"one"} , "objone");

// console.log(person.get(1));

// for(let key of person.keys()){
//     console.log(key , typeof key);
// }

// for(let key of person){
//     // console.log(key);
//     console.log(Array.isArray(key));
// }

// for(let [key , value] of person){
//     console.log(key , value);
// }



const user1Info = {
    id : 1,
    firstName : "Shahzaib",
}

const user2Info = {
    id : 2,
    firstName : "AbdulAleem",
}

const extraInfo = new Map();

extraInfo.set(user1Info , {age : 18 , gender : "male"});
extraInfo.set(user2Info , {age : 19 , gender : "male"});

console.log(user1Info.id);
console.log(extraInfo.get(user2Info).age);