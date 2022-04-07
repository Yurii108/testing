// debugger;

let carObj = {nameOne: 'BMW' , color: 'red', year: 2020};

console.log(carObj);

let body = document.querySelector('body');

let newCar = carObj.nameOne;

let nameOne = document.createElement('p');
nameOne.innerText = carObj.nameOne;

let color = document.createElement('p');
color.innerText = carObj.color;

let year = document.createElement('p');
year.innerText = carObj.year;

body.appendChild(nameOne);
body.appendChild(color);
body.appendChild(year);















// let myBody = document.querySelector('body');

// let car = 'BMW';

// let carObj = {name: 'BMW', color: 'red'};

// let age = 'age= ' + 35;

// let sum = 1 + 1;

// let cityArr = ['New York', 'Tokyo', 'London']

// console.log(cityArr[1]);
// console.log(sum);
// console.log(car);
// console.log(carObj);
// console.log(age);








// let numberOne = document.createElement('h1');
// numberOne.innerText = 2 + 2;

// let numberTwo = document.createElement('h1');
// numberTwo.innerText = 3 + 2;

// myBody.appendChild(numberOne);
// myBody.appendChild(numberTwo);




// for ( let start = 1; start < 50; start = start + 1) {
//     let numberOne = document.createElement('h1');
//     numberOne.innerText = 78 + 4;

//     myBody.appendChild(numberOne);
// }




// let myInput = document.createElement('input');
// myInput.setAttribute('type', 'number');

// let myButton = document.createElement('button');
// myButton.innerText = 'Show';

// let myText = document.createElement('p');
// myText.innerText = ''; //Hello World Hare Krishna

// let body = document.querySelector('body');
// body.appendChild(myInput);
// body.appendChild(myButton);
// body.appendChild(myText);

// // let numberOne = document.querySelector('.number');
// // let button = document.querySelector('.button');
// // let result = document.querySelector('.result');

// myButton.createElement('click', function() {
   
//     let prace = 100; 
//     let age = myInput.value;

//     if(age < 8) {
//         prace = 0; //Если возраст меньше 8 цена 0 грн
//     } else if(age <= 20) {
//         prace = prace * 0.8; //Если меньше 20 лет, скидка 20% = 80 грн 
//     } else if(age > 20) {
//         prace = prace; //Если возраст больше 20 лет цена 100% = 100 грн
//     }

//     myText.innerText = `Цена билета ${prace} грн`;
// });
