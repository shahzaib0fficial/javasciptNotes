// object inside array
// very useful in real life world

const users = [
    {id : 1, name : "Shahzaib", gender : "male"},
    {id : 2, name : "AbdulAleem", gender : "male"},
    {id : 3, name : "Huzaifa Bin Naeem", gender : "male"},
];

for(let user of users){
    console.log(user.id);
    console.log(user);
}