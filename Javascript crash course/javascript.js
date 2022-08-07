//alert('hello world!');
//console.log('hello!');
//console.error('this is an error');
//console.warn('this is a warning');

/* var,let is to be used where we change value 
whereas const is used where we fix the value*/

/* data types
   1)string 
   2)number
   3)boolean
   4)null
   5)undefined
*/   

/*
// concatenation

  const name='shahzaib';

  const age=17;

console.log('my name is ' + name + ' and i am ' + age + ' year old');

//template string


console.log(`my name is ${name} and i am ${age} year old`);
*/

/*
const s= 'computer';

const p= 'tecnology, coding, javascript';

console.log(s.substring(0, 3));

console.log(s.toUpperCase().toLowerCase());

console.log(s.split(''));

console.log(p.split(', '))
*/

/* Arrays- variable that hold multiple values

const names=['Shahzaib','Aleem','Usman'];

console.log(names[1].charAt(0));

names.push('Ahmed');

names.push('Ahmed');

names.unshift('Kashif');

names.pop();

console.log(names);

console.log(names.indexOf('Aleem'));

console.log(Array.isArray(names));
*/

/*Objects

const person = {
  firstName: 'Shahzaib',
  lastName: 'Ahmed',
  age: 17,
  hobbies:['gaming','travelling','programing'],
  adress : {
    street:'1',
    city:'a.b.c',
    country:'A.B.C'
  }
}

console.log(person.firstName, person.hobbies[2]);

const {age , adress: {country}} = person;

console.log(age, country);

console.log(person.adress.city);

person.email= 'dummy@gmail.com';

console.log(person);
*/

/*
const todos=[
  {
    id:1,
    task:'meeting with boss',
    isCompleted:true
  },
  {
    id:2,
    task:'appointment with doctor',
    isCompleted:true
  },
  {
    id:3,
    task:'go at barber shop',
    isCompleted:false
  }
];

console.log(todos[1].isCompleted);

//convert into JSON

const todosJSON = JSON.stringify(todos);

console.log(todosJSON);
*/
//loops 
/*
//for loop

for(let i=0; i<10; i++){
  console.log(`Number: ${i}`);
}

for(let i=0; i<todos.length; i++){
  console.log(todos[i].task);
}
//alternative method

for(let todo of todos){
  console.log(todo.task);
}
*/

/*
//while loop 

let j=0;
while(j<10){
  console.log(`${j}`);
  j++;
}
*/

/*
// forEach, map, filter

todos.forEach(function(todo){
  console.log(todo.task);
});

const tasks= todos.map(function(todo){
  return todo.task;
});

console.log(tasks);

const completed= todos.filter(function(todo){
  return todo.isCompleted=== true;
}).map(function(todo){
  return todo.task;
});

console.log(completed);
*/

//conditional operators

x=10;
y=15;

/*else if
if(x>10 && y>15){
  console.log('x>10 and y>15');
}
else if(x==10 && y==15){
  console.log('x=10 and y=15');
}
else {
  console.log('x<10 and y<15');
}
*/

/*ternary operators
const z= x==10 && y==15 ? 'equal' : 'not equal';

console.log(z);
*/

/*switch

switch(x){
  case x=10:
    console.log('equal');
    break;
  default:
    console.log('not equal');
    break;
}
*/

/*
//functions

function addition1(num1,num2){
  console.log(num1 + num2);  
}

addition1(5,5);

//arrow funtions

const addition2 = (num1,num2) => num1+ num2;

console.log(addition2(5,5));
*/

/*
//constructor function and prototype

//contructor function 
function Person(firstName, lastName, dateOfBirth){
  this.firstName= firstName;
  this.lastName= lastName;
  this.dateOfBirth= new Date(dateOfBirth);
  this.fullNameM1= function(){
    return `${this.firstName} ${this.lastName}`;
  }
}

//second method prototype
Person.prototype.fullNameM2= function(){
  return `${this.firstName} ${this.lastName}`;
}

//instantiate object

const person1= new Person('Shahzaib', 'Ahmed', '2004-9-3');
const person2= new Person('Usman', 'Ghani', '2002-8-14');

console.log(person1.dateOfBirth.getFullYear());

console.log(person1.fullNameM1());
console.log(person1.fullNameM2());
*/

/*
//Class

class Person{
  constructor(firstName, lastName, dateOfBirth){
    this.firstName= firstName;
    this.lastName= lastName;
    this.dateOfBirth= new Date(dateOfBirth);
  }

  getBirthYear(){
    return this.dateOfBirth.getFullYear();
  }

  getFullName(){
    return `${this.firstName} ${this.lastName}`;
  }
}

const person= new Person('Shahzaib', 'Ahmed', '2004-9-3');

console.log(person.getBirthYear());

console.log(person.getFullName());
*/

/*
//DOM

//single element selector

console.log(document.getElementById('items_list'));
console.log(document.querySelector('#items_list'));

//multiple element selector

console.log(document.querySelectorAll('.items')); //recomended method
console.log(document.getElementsByClassName('items'));
console.log(document.getElementsByTagName('li'));

const items= document.querySelectorAll('.items');
items.forEach((items) => console.log(items));
*/

/*
//DOM Manipulation

const items_list= document.querySelector('#items_list');

// items_list.remove();
// items_list.firstElementChild.remove();

items_list.firstElementChild.textContent= 'hello';
items_list.children[1].innerHTML= '<b>Shahzaib</b>';
items_list.lastElementChild.innerText= 'Ahmed';

const btn= document.getElementById('btn');
btn.style.color= 'white';
btn.style.background= 'blue';
*/

/*
// Events
const btn= document.querySelector('#btn');
btn.addEventListener('click', ()=>{
  btn.innerHTML='Clicked';
});
*/

/*
//Form

const firstName= document.querySelector('#firstName');
const lastName= document.querySelector('#lastName');
const btn= document.querySelector('#btn');
const items_list= document.querySelector('#items_list');

btn.addEventListener('click', addlist);

function addlist(){

  if(firstName.value=== '' || lastName.value=== ''){
    let errorMessage= document.createElement('label');
    errorMessage.appendChild(document.createTextNode('Please Fill Both Feilds'));
    items_list.appendChild(errorMessage);
    setTimeout(() => errorMessage.remove(), 3000);
  }
  else{
    let userName= document.createElement('li');
    userName.appendChild(document.createTextNode(`Welcome ${firstName.value} ${lastName.value}`));
    items_list.appendChild(userName);
  }

  //clear feilds
  firstName.value= '';
  lastName.value= '';
}
*/