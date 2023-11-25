const myfunc = function(a,b,...c){ // in c all of rest parameters are store in the form of array
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
    let sum = a+b;
    // console.log(sum);
    for(let i=0;i<c.length;i++){
        sum = sum+c[i];
    }
    console.log(sum);
}

myfunc(1,2,3,4,5,6,7);