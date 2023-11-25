const var1 = "value1";

const func1 = function(){
    const var2 = "value 2";
    const func2 = () => {
        const var1 = "change1";
        // const var2 = "change2";
        const var3 = "value3";
        console.log(var1,var2,var3);
    }
    func2();
}

func1();