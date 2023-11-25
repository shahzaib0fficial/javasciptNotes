
const arr = [3,4,5,6,7];

function myfunc(number,index){
    console.log(`Number is ${number} , index is ${index}`);
}

// for(let i=0;i<arr.length;i++){
//     myfunc(arr[i],i);
// }

// arr.forEach(myfunc);

// or

// arr.forEach((number,index)=>{
//     console.log(`Number is ${number} , index is ${index}`);
// });

const persons = [
    {firstName: "Shahzaib", age: 18},
    {firstName: "AbdulAleem", age: 18},
    {firstName: "Umar Draz", age: 18},
    {firstName: "Muhannad", age: 19},
];

persons.forEach((person)=>{
    console.log(`Name ${person.firstName} , Age ${person.age}`);
});