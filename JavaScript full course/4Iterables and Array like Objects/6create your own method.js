// methods
// function inside an object

function info(){
    console.log(`Person name is ${this.pName} and age is ${this.age}`);
}

const person1 = {
    pName : "Shahzaib",
    age : 18,
    about : info
}

const person2 = {
    pName : "AbdulAleem",
    age : 19,
    about : info
}

const person3 = {
    pName : "Umar",
    age : 18,
    about : info
}

person1.about();
person2.about();
person3.about();