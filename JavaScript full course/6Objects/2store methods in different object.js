const userMethods = {
    about : function(){
        return `Name : ${this.firstName} ${this.lastName} , Age : ${this.age}`;
    },
    is18 : function(){
        return this.age >= 18;
    }
};

function createUser(firstName,lastName,age,email,adress){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.email = email;
    user.adress = adress;
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    return user;
};

const user1 = createUser("Shahzaib", "Ahmed" , 18 , "s...@gmail.com" , "My adress");
console.log(user1);
console.log(user1.about());