const person = {
    firstName : "Shahzaib",
    gender : "Male",
    age : 18
}

// function printDetail(obj){
//     console.log(obj.age);
// }

// second method
function printDetail({firstName,gender,age}){
    console.log(firstName);
}

printDetail(person);