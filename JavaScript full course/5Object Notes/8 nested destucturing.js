// nested destucturing

const users = [
    {id : 1, name : "Shahzaib", gender : "male"},
    {id : 2, name : "AbdulAleem", gender : "male"},
    {id : 3, name : "Huzaifa Bin Naeem", gender : "male"},
];

const [user1 , {id:firstUserId} , {name}] = users;

console.log(user1 , firstUserId , name);