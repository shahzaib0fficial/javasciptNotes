const callMe = () => {
    const myfunc = function(){
        console.log("My Function");
    }

    console.log("Call Me function");
    myfunc();
}

callMe();