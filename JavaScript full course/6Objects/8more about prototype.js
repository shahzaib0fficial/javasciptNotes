let numbers = [1,2,3,4];

// array can be defined as
// let numbers = new Array(1,2,3,4);
// console.log(Array.prototype);

console.log(numbers);

console.log(Object.getPrototypeOf(numbers));


function hello(){
    console.log("Hello World");
}

// can change prototype type
hello.prototype = [];
// hello.prototype.push(1,2,3,4);

console.log(hello.prototype);