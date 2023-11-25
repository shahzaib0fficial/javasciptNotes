// const userMethods = {
//     about : function(){
//         return `Name : ${this.firstName} ${this.lastName} , Age : ${this.age}`;
//     },
//     is18 : function(){
//         return this.age >= 18;
//     }
// };

function createUser(firstName,lastName,age,email,adress){
    const user = Object.create(createUser.prototype);
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.email = email;
    user.adress = adress;
    return user;
};

createUser.prototype.about = function(){
    return `Name : ${this.firstName} ${this.lastName} , Age : ${this.age}`;
}

createUser.prototype.is18 = function(){
            return this.age >= 18;
        }

const user1 = createUser("Shahzaib", "Ahmed" , 18 , "s...@gmail.com" , "My adress");
console.log(user1);
console.log(user1.about());