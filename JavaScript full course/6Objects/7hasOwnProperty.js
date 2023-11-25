function CreateUser(firstName,lastName,age,email,adress){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    this.adress = adress;
};

CreateUser.prototype.about = function(){
    return `Name : ${this.firstName} ${this.lastName} , Age : ${this.age}`;
}

CreateUser.prototype.is18 = function(){
            return this.age >= 18;
        }

const user1 = new CreateUser("Shahzaib", "Ahmed" , 18 , "s...@gmail.com" , "My adress");
// console.log(user1);
// console.log(user1.about());

for(let key in user1){
    // console.log(key);
    // hasOwnProperty only those which is in function (not prototype)
    if(user1.hasOwnProperty(key)){
        console.log(key);
    }
}