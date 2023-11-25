// let and const are block scope
// var has function scope

{
    // can only be acces in this block

    let firstName = "Shahzaib";
    const lastName = "Ahmed";
    console.log(firstName);
    console.log(lastName);


    // can acess in this block outside of this block or in another block
    var fullName = "Shahzaib Ahmed";
    console.log(fullName);
}

console.log(fullName);