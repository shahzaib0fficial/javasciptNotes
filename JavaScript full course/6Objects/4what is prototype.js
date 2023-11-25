function myFunc(){
    console.log("This is myFunc");
}

// in javascript function is ===> function + object

// console.log(myFunc.name);

// can add our own properties
myFunc.myProperty = "Added Property";
// console.log(myFunc.myProperty);

// name property --->tells function name

// function provide more usefull properties

// console.log(myFunc.prototype); // {} 

myFunc.prototype.key1 = "value1";
myFunc.prototype.key2 = "value2";
myFunc.prototype.hello = function(){
    console.log("Hello function");
}

// myFunc.prototype.hello();
console.log(myFunc.prototype);