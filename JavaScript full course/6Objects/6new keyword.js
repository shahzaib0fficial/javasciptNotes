// constructor function
// in case of using new function first letter's capital is a good practice
function CreateObj(firstName , age){
    this.firstName = firstName;
    this.age = age;
}

CreateObj.prototype.about = function(){
    console.log(this.firstName , this.age);
}

// new keyword
// 1) create empty object ( this = {} )
// 2) return this
// 3) no need of Object.create(CreateObj.prototype);

const user1 = new CreateObj("Shahzaib", 18);

console.log(user1);