const cars = [
    {carComapny : "Toyota", carName : "Corrolla"},
    {carComapny : "Honda", carName : "City"}
];

function displayCars()
{
    setTimeout(()=>{
        let brandNames = "";
        cars.forEach((car)=>{
            brandNames += `<li>${car.carComapny}</li>`;
        });
        document.body.innerHTML = brandNames;
    },1000);
}

function addCar(newCar)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            cars.push(newCar);
        
        const error = false;
        if(!error)
        {
            resolve();
        }
        else
        {
            reject("Error: Somthing is Wrong");
        }
    },2000);
    });
}

//addCar({carComapny : "Suzuki", carName : "Mehran"}).then(displayCars).catch(err => console.log(err));

const promise1 = Promise.resolve("Hello World");
const promise2 = 10;
const promise3 = new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,"GoodBye");
});
const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json());

Promise.all([promise1,promise2,promise3,promise4]).then(values=> console.log(values));