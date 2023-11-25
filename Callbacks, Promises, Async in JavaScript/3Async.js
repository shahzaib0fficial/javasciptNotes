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

// async function init()
// {
//     await addCar({carComapny : "Suzuki", carName : "Mehran"});
//     displayCars();
// }

// init();

async function fetchUserApi()
{
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    const userData = await res.json();

    console.log(userData);
}

fetchUserApi();

