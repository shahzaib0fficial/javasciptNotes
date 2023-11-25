
// const numbers = [2,3,4,5,6,7];

// function myfunc(number,index){
//     return `Index : ${index} , Index :  ${number*number}`;
// }

// const squares = numbers.map(myfunc);

// console.log(squares);


const persons = [
    {firstName: "Shahzaib", age: 18},
    {firstName: "AbdulAleem", age: 18},
    {firstName: "Umar Draz", age: 18},
    {firstName: "Muhannad", age: 19},
];

const firstNames = persons.map((person)=>{
    return person.firstName;
});

console.log(firstNames);