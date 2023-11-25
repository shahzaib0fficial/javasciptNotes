/*
// console.log is used to print something in the console
console.log('hello world'); //can also use double quotes ("") and backticks (``), semicolon is optional 
*/


/*
//"use strict"; // is used to reduse our mistakes

// intro to variables

// variable store some information
// can use this information later 
// can change information later 

// declearing of a variable and assigning value to the variable
//var fullName = "Shahzaib Ahmed";

// using of variable
//console.log(fullName);

// changing value of the variable
//fullName = "Muhammad AbdulAleem";
//console.log(fullName);

// rules for naming variables

//1)can't start with number
//example:
//         1value (invalid)
//         value1 (valid)
//
//2) blank spaces are not allowed
//example:
//        full name (invalid)
//
//3)you can only use underscore (_) or dollar symbol ($)
//example:
//        $fullName (valid)
//        full$Name (valid)
//        _fullName (valid)
//        full_name (valid)

// var first_name // snake case writing
// var firstName // camel case writing

// convention (not nessary but good to use)
// start with small letter and use camelCase writing
*/


/*
// declearing variable by using let

let name = "Shahzaib";

// let name = "Aleem"; // error will be occour but by declearing with var the new variable with be decleared will never generate any error
// will add other differences soon
*/


/*
// declearing constants

const pi = 3.14;
// pi = 3.15;
console.log(pi*2);

// the value of constant can't be change
// but the operation like (+,-,*,/) can do
*/


/*
// string indexing

let name = "Shahzaib";

// S h a h z a i b
// 0 1 2 3 4 5 6 7
// index numbers starts with 0

console.log(name[4]); // z will be printed

console.log(name.length); // 8 wil be print because it's counting start with 1 
// space will be counted

// getting last index value if we won't know the length of string
console.log(name[name.length -1]);
// last index = length - 1
*/


/*
// some basic functions that use to makes some changes in strings
// trim(), toUpperCase(), toLowerCase(), slice()

//trim()
// it is used to remove extra spaces from the string

let firstName = "           Shahzaib           ";

console.log(firstName.length); // before triming with spaces the legth is 30

firstName = firstName.trim(); // gives the new string which has no spaces and must store into same or another variable otherwise won't see any cahnge

console.log(firstName.length); // after triming the length is 8

// toUpperCase()
// use to convert all alphabets into upper case

console.log(firstName.toUpperCase()); // SHAHZAIB will be printed

// toLowerCase()
// use to convert all alphabets into lower case

console.log(firstName.toLowerCase()); // shahzaib will be printed

// slice()
// use to get a particular part of the string
// for getting first index(from where you want to start) and last index(till you want) will be required
// last index value will never print

console.log(firstName.slice(0,4)); // Shah will be printed z which is on index 4 will not print
*/


/*
// type of ooperators

// data types (primitives data types)
// string
// number
// boolean
// undefined
// null
// BigInt
// symbol

// String and numbers
let firstName = "Shahzaib"; // string
let age = 17; // number

console.log(typeof firstName); // string will be printed
console.log(typeof age); // number will be printed

// coverting number into string types

// proper method
age = String(age);
console.log(typeof age); // string will be printed

// alternative method
age = age + ""; // same as upper will be happen

// converting string into number type

// proper method
 age = Number(age);
console.log(typeof age); // number will be printed

// alternative method
age = + age; // same as upper will happen

// Note : typeof is used to check the data type of variable
*/


/*
// undefined
// till we won't assign a value to a variable it's data type is undefined
// we can do this with let and var but not with const we must be assign a value to constant

let firstName;
console.log(typeof firstName); // undefined will print

firstName = "Shahzaib";
console.log(typeof firstName); // now string will print because now we assigned a value to a variable
*/


/*
// null
// null type means nothing

let firstName = null;
console.log(firstName); // null will print
console.log(typeof firstName); // but here also null will be printed but here object is printed here
// because it's bascially an error or can say bug in the javascript
// why won't correct this bug?
// because millions of peoples write their code by looking this bug if it is correct then their code will not be run that's why this bug is still in javascript
*/


/*
// BigInt
// use to store a huge value
// BigInt operations like(+,-,*,/)etc can only done by another BigInt value
// if you will add BigInt value and normal value the error occours

let n1 = 10; // we can store maximum value 9007199254740991 so if we want to store a value bigger than this number then we use BigInt
// the value can be shorter than this not nessary the value must be bigger than 9007199254740991
// how to find this value?
console.log(Number.MAX_SAFE_INTEGER); // this value will print

// declearing BigInt 

// first method

let n2 = BigInt(12);

// second method

let n3 = 20n; // this n will convert this into BigInt type

console.log(typeof n3); // BigInt will print

// console.log(n1 + n2); // error occoured
*/


/*
// String Concatenation or joining two or  more strings

let firstName = "Shahzaib";
let lastName = "Ahmed";

let fullName = firstName + " " + lastName; // (" ") include to make space between both strings

console.log(fullName); // Shahzaib Ahmed will be printed
*/


/*
// template strings

let myName = "Shahzaib";
let age = 17;

// let aboutME = "My name is " + myName + " my age is " + age; // My name is Shahzaib my age is 17 (will be printed)

let aboutME = `My name is ${myName} my age is ${age}`; // same as upper but best to use

console.log(aboutME);
*/


/*
// Booleans
// returns two values true or false

let num1 = 5;
let num2 = 7;

console.log(num1>num2); // flse will be print because the condition is flase 5 is not grater than 7
*/


/*
// differencwe between == and ===
// == only check the vlaue
// === also check value and it's datatype

let num1 = "5";
let num2 = 5;

console.log(num1 == num2); // print true because both values are same
console.log(num1 === num2); // print false beacuse both datatypes are changes
*/


/*
// difference between != and !==
// != only see value difference
// !== also check datatype 
// if both value are same but it's datatype is different != return false wheather !== return true

num1 = 7;
num2 = "7";

console.log(num1 != num2); // print false because both are equal according to value but datatype is change
console.log(num1 !== num2); // print true because it also check datatype which is change
*/


/*
// if else condition
// use when a program is depend on the conditions

// when we have one condition we only use if statement (if condition is true then the program will run otherwise not)
let num1 = 5; 
if(num1 == 5){
    console.log("your num1 value is 5");
}

// when we want to display something else if condition is not true then we use if else statement (if the condition is true then the program will run if false then something else which is writtenw will be print)
let num2 = 5;
let num3 = 6;
if(num2 > num3){
    console.log(num2);
}
else{
    console.log(num3);
}
// num3 value(6) will be print because the condition is false

// when we have two more than two conditions we use else if statement (firstly we wite if and for next conditions we write else if we can add unlimited conditions by using else if statement and on the last else will be written if all conditions are not matched then else statement will be print)
let marks = 76;
if(marks < 33){
    console.log("fail");
}
else if(marks <= 60){  // && defined below
    console.log("pass keep it up!");
}
else if(marks <= 100){
    console.log("pass welldone!");
}
else{
    console.log("Invalid Press");
}
// pass welldone will be print because first two conditions are false and marks is greater than 60
*/


// falsy values 
// false
// ""
// undefined
// null
// 0

// truthy values
// every values otherthan upper written falsy values 
// "hello"
// 1,-1


/*
// ternary operator or conditional operator
// can use ternary operator instead of using if else statement
// syntax
// (condition) ? if condition true this will run : if condition false than this will run

let marks = 73;
let passFail;
marks >= 50 ? passFail = "pass" : passFail = "fail";
console.log(passFail); // pass will be print because condition is true
*/


/*
// AND (&&) operator and OR(||) operator
// both use where we are checking more than one condition
// in AND must both conditions are right otherwise condition will false (if one condition from them is right and other one is wrong then it will consider to be wrong)
// in OR if one from both is right it consider to be right (only consider wrong when both conditions are wrong)
let firstName = "Shahzaib";
let lastName = "Learner";
if(firstName == "Shahzaib" && lastName == "Ahmed"){
    console.log("your name is Shahzaib Ahmed");
}
else{ // this part will run because one from both conditions is wrong
    console.log("your name is not Shahzaib Ahmed");
}

if(firstName == "Shahzaib" || lastName == "Ahmed"){ // this part will be run because one from both condition is right
    console.log("your name is Shahzaib Ahmed");
}
else{
    console.log("your name is not Shahzaib Ahmed");
}
*/


/*
// nested if else
// nested if else means uning a if else statement inside the if else
// by making a simple number guessing game in which the exact no is 20 if the no is less than 20 then print (too low) or if greater then print (too high)
let number = 20;
let guess = +prompt("Guess a number"); // prompt is used to taking an input from the user by using js (it takes it's inputin string form so for converting into number the + sign is to be used)
if (guess === number){
    console.log("Your Guess is Right!");
}
else{
    if(guess > number){
        console.log("Too High!!!");
    }
    else{
        console.log("Too Low!!!");
    }
}
*/


/*
// switch statement
// can use instead of using else if statement
let day = 5;

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wedday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid");
        break;
}
// Friday will be print because the value of day is 5 so case 5 will be run
// break statement is used to stop executing the next cases if break is not use then the case 5 satisfy and then the remaining cases without checking condition will be executed so we use break statement and when the case is satisfy then it will run and skip the remaining statement and move out from the switch statement
*/


/*
// Loops
// loops are used where we want to display something again and again like we want to print from 0 to 9 so instead of using console.log() 10 times we used loops it's not means it can only repeat 10 times it can repeat 100 or million time depend on the program requirement
// there are 3 types of loops
// for loop
// while loop
// do while loop

// For Loops
// syntax
//  for(initialization ; condition ; increment/decrement){\
    // body; 
// } 
// suppose we want to print from 0 to 9
for(let i=0; i<=9; i++){ //i++ means i=i+1;
    console.log(i);
}
// working
// in upper program we decleare a variable with name i and assign value 0, and then write a condition i must be less than or equals to 9 means if the value of i is 10 or greater the conditions will false, and than increment one in i value
// now firstly it see the value of i which is 0 and then it checks the condition so 0 is less than 9 means condition is true than the body of the loop will be executed where the value of i will print means 0 will print 
// after executing the body of loop it increment and the value of i now become 1 after adding 1 in the i value then it will check the condition again which is true 1 is less than 9 and the value of i will be print
// it will continue till the condition false means after printing 9 the value of i will be 10 after increment and when now check the condition the condition will false because 10 is not less than 9 and when the condition false it come out from the loop and execute remeining code if have
// output of this program is
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9


// While Loop
// syntax
 
// initialization;
// while(condition){
    // body of the loop;
    // increment/decrement;
// }

let i = 0; //initialization
while(i<=9){ // condition
    console.log(i);
    i++; // increment
}
// same as upper will happen


// do while loop
// same as while loop the difference if that in do while one time the body of loop will executed and than the condition will check means one time it will run even the condition fasle and then depend on the condition
//  syntax
// initialization;
// do{
    // body of loop;
    // increment/decrement;
// }while(condition);


let j = 0; // initialization
do {
    console.log(j);
    j++; // increment
}while(j<=9); // condition
// same as upper
*/


/*
// break and continue statemet 

// break statement
for(let i=1; i<=10; i++){
    if(i===5){
        break;
    }
    console.log(i);
}
// in upper code when the value of i is equals to 5 the loop will break and the further code of loop will not execute and it will jump out from the loop even the condition is true
// here from 1 to 4 will print and then the remining execution of this loop will not execute

// continue statement
for(let j=1; j<=10; j++){
    if(j===5){
        continue;
    }
    console.log(j);
}
// when the value of i is equals to 5 the further code will not be execute for one time and again increment will perform and again loop will continue
// means at here form 1 to 4 will print and then skips the 5 value and from 6 to 10 will print
*/


/*
// Arrays
// collections of items in a specific order
// syntax
// declearation arrayName = [item1, item2, item3 ,,,,];
// start with 0 idex nad then 1 2 3 and so on
let numbers= [3,4,5,6,7,8,9]; // not nessary the items are belong from same datatypes they maybe a numbers strings etc
console.log(numbers); // whole array will print
console.log(numbers[0]); // first value (3) will print

// push and pop in arrays
// push is used to add something on the last index of an array
// pop is used to remove something from the last index of an array
let fruits = ["apples", "bananas", "grapes", "peach"];
console.log(fruits); // ["apples", "bananas", "grapes", "peach"] will print
fruits.push("mangoes");
console.log(fruits); // now mangoes is added so [ "apples", "bananas", "grapes", "peach", "mangoes" ] will print

fruits.pop(); // the last item from fruits array removed
console.log(fruits); // now the output is [ "apples", "bananas", "grapes", "peach" ]

// shift and unshift in an array
// unshift is used to add something on the first index in an array
// shift is used to remove something from the first index in an array
let friends = ["Shahzaib", "AbdulAleem"];
console.log(friends); // [ "Shahzaib", "AbdulAleem" ] will print
friends.unshift("Huzaifa");
console.log(friends); // [ "Huzaifa", "Shahzaib", "AbdulAleem" ] will print

friends.shift();
console.log(friends); // [ "Shahzaib", "AbdulAleem" ] will print

// pop() and shift() also returns the value which is removed we can store into any variable
// Note: shift and unshift is a little bit slow than the push and pop functions
*/


/*
// primitive and reference datatype

// primitive data type
let num1 = 5;
let num2 = num1;
console.log(num1); // 5 will print
console.log(num2); // 5 will print because the value of num1 assign to the num2
num1 = 10;
console.log(num1); // 10 will print because the value of num1 change
console.log(num2); // 5 will print because the num1 value change after assigning to num2

// reference datatype
let array1 = ["item1", "item2"];
let array2 = array1;
console.log(array1); // [ "item1", "item2" ] will print
console.log(array2); // same [ "item1", "item2" ] will print
array1.push("item3");
console.log(array1); // after pushing item3 [ "item1", "item2", "item3" ] will print
console.log(array2); // here also [ "item1", "item2", "item3" ] will print because here the array1 has some memory adress from where we are aaccesing the same adress willa ssign to array2 so that's why when the array1 value will change array2 value atomatically change
*/


/*
// cloning an array
// by these method the array will clone but if we will change in original array it won't change the cloned array
let array1 = ["item1", "item2"];
// there are many method to do same thing i write here almost all

// method no 1
// let array2 = array1.slice(0); // 0 means clone from 0 index to end means all the array

// method no 2
// let array2 = [].concat(array1);

// method no 3, new method
let array2 = [...array1];

// now here if we change in array1 it won't affect array2
array1.push("item3");
console.log(array1); // [ "item1", "item2", "item3" ] will print
console.log(array2); // array1 first value only [ "item1", "item2" ] will print

// Note: from these three method first method is fastest but now mostly people use method no 3
*/

/*
// for loop in array
// use when we want to print arrays item one by one
// there are alot of method to do this which i will cover after sometime
let friends = ["Shahzaib", "AbdulAleem", "Huzaifa", "Ahmed"];

for(let i=0; i < friends.length; i++){
    console.log(friends[i]);
}
*/


/*
// use const for creating array
const friends = ["Shahzaib", "AbdulAleem", "Huzaifa"];
friends.push("Ahmed");
console.log(friends); // here [ "Shahzaib", "AbdulAleem", "Huzaifa", "Ahmed" ] will print
// as we know that in const we can't change but here it's gonna change and never getting any error
// let me explain why...
// in reference datatype the array is store in heap memory while it's adress in stack(stack is like where primitive datatypes values store) and here we are changing in array which is in heap memory whereas it's adress is still same
// it gives error if we do something like friends = ["no friends"]; so it gives error
*/


/*
// while loop in array
// for practice
const friends = ["Shahzaib", "AbdulAleem", "Huzaifa", "Ahmed"];
let i=0;
while(i < friends.length){
    console.log(friends[i]);
    i++;
} // All names will print
*/


/*
// for of loop
const friends = ["Shahzaib", "AbdulAleem", "Huzaifa", "Ahmed"];
for(let friend of friends){
    console.log(friend);
} // it will print an array from start to end

// for in loop
const fruits = ["Apple", "Mango", "Banana", "Peach"];
for(let index in fruits){
    console.log(fruits[index]); // this gives an index one by one from start to end
}
*/

/*
// Array destucturing
// assinging array values to the variable

// const myArray = ["value1", "value2", "value3"];
// let var1 = myArray[0];
// let var2 = myArray[1];
// console.log("var1 value is", var1); // var1 value is value1 will print
// console.log("var2 value is", var2); // var2 value is value2 will print

// instead of using this long code we can use
const myArray = ["value1", "value2", "value3"];
let [var1 , var2] = myArray;
console.log("var1 value is", var1); // var1 value is value1 will print
console.log("var2 value is", var2); // var2 value is value2 will print

// if we want ro assign value variable1 to first and variable2 to third so,
let [variable1, , variable2] = myArray;
console.log("variable1 value is", variable1); // variable1 value is value1 will print
console.log("variable2 value is", variable2); // variable2 value is value3 will print
*/


/*
// Objects
// reference type
// how to create objects
// syntax
// datatype Name = {keyName : value , keyName : value};
// creating object
const Person = {
    name : "Shahzaib",
    age : 17,
    gender : "male"
}
console.log(Person); // whole object will print

// acess data from an object
console.log(Person.name); // now name(Shahzaib) will print
console.log(Person.gender); // here gender's value (male) will print

// adding more key value pair
Person.bestFriend = "AbdulAleem"; // key value pair added

console.log(Person); // here bestFriend key value pair shown

// upper is dot notation now we are doing same thing with bracket notation

// acess data from an object
console.log(Person["age"]); // here age value will print

// adding more key value pair
Person["email"] = "shahzaib5330884@gmail.com"; // email value pair will added
console.log(Person);
*/


/*
// difference between dot and bracket notation
const key = "email";

const Person = {
    name : "shahzaib",
    age : 17,
    gender : "male",
    "best friend" : "AbdulAleem" // by default key is string but if we want to add space we must add ""
}
console.log(Person["best friend"]); // can't acess by using dot notation
Person[key] = "shahzaib5330884@gmail.com"; // here key value means email key will created and will added value (can't done with dot notation)
console.log(Person);
*/


/*
// itrate objects
const Person = {
    name : "Shahzaib",
    age : 17,
    gender : "male"
}

// for in loop
for(let key in Person){
    console.log(key); // all key of this objects will print
}
for(let value in Person){
    console.log(Person[value]); // all key values of this objects will print
}

// keyObject
for(let key of Object.keys(Person)){
    console.log(key); // all key of this objects will print
}
for(let value of Object.keys(Person)){
    console.log(Person[value]); // all key values of this objects will print
}
*/


/*
// computed properties
const key1 = "objectkey1";
const key2 = "objectkey2";

const value1 = "objvalue1";
const value2 = "objvalue2";

const Example = {

}

Example[key1] = value1;
Example[key2] = value2;

console.log(Example);

// or 

const Example1 = {
    [key1] : value1,
    [key2] : value2
}
console.log(Example1);
*/


/*
// spread operators in object
const obj1 = {
    key1 : "value1",
    key2 : "value2"
}

const obj2 = {
    key3 : "value3",
    key4 : "value4"
}

const obj3 = {...obj1, ...obj2 , key5 : "value5"}
console.log(obj3);

const obj4 = {..."abcdefghijklmnopqrstuvwxyz"};
console.log(obj4);
*/


/*
// object destucturing
const Person = {
    firstName : "Shahzaib",
    lastName : "Ahmed",
    age :18,
    friends : ["AbdulAleem", "Huzaifa", "Ahmed"]
};
const Person1 = {
    firstName : "Shahzaib",
    lastName : "Ahmed",
    age :18,
    friends : ["AbdulAleem", "Huzaifa", "Ahmed"]
};
// const firstName = Person.firstName;
// const lastName = Person.lastName;
// console.log(firstName, lastName); // Shahzaib Ahmed will print

// instead of using this long code we can write this as
const {firstName , lastName} = Person;
console.log(firstName , lastName); // same as upper

const {firstName : name1 , lastName : name2 , ...firstPerson} = Person1; // by default the name are same as object key for changing name of variables we use colon and then variable name and the remaining values are store in another object with name firstPerson
console.log(firstName , lastName, firstPerson); // Shahzaib Ahmed and then the remaing object will print
*/