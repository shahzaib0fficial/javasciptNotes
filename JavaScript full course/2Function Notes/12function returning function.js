function myfunc(){
    function hello(){
        return "Hello World";
    }
    return hello;
}

const ans = myfunc();

console.log(ans());