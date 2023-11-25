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

function addCar(newCar,callback)
{
    setTimeout(()=>{
        cars.push(newCar);
        callback();
    },2000);
}

//displayCars();

addCar({carComapny : "Suzuki", carName : "Mehran"},displayCars);