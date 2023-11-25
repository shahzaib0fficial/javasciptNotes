// const animals = ["lion" , "tiger", "cat", "dog", "fish"];

// const requiredAnimal = animals.find((string)=>{
//     return string.length == 3;
// });

// console.log(requiredAnimal);


const persons = [
    {id: 1 , name: "Shahzaib"},
    {id: 2 , name: "AbdulAleem"},
    {id: 3 , name: "Huzaifa"},
    {id: 4 , name: "Umar draz"},
];

const person = persons.find((user)=>{
    return user.id == 2;
});

console.log(person);