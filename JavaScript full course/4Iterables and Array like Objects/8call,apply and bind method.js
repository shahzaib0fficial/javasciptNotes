function about(gender , interest){
    console.log(`Name : ${this.fName} , age : ${this.age} , gender : ${gender} and interest : ${interest}`);
}

const user1 = {
    fName : "Shahzaib",
    age : "18",
    // about: function(){
    //     console.log(`Name : ${this.fName} and age : ${this.age}`);
    // }
}

const user2 = {
    fName : "AbdulAleem",
    age : "19",
}

// call
// user1.about.call(user2);

// about.call(user1 , "Male", "Programming");

// apply
// about.apply(user1 , ["Male", "Programming"]);

// bind
const func = about.bind(user1 , "Male", "Programming"); // bind returns a function 
func();