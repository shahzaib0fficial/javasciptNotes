const myfunc = function(callback){
    console.log("inside myfunc")
    callback();
}

const func2 = ()=>{
    console.log("inside func2");
}

myfunc(func2);