document.querySelector('.header').innerText = 'JS_Portfolio';
document.querySelector('.head').innerText = 'Проект над которым я работаю';

let amI = document.querySelector('.ami');

let whoAmI = {
    name: 'Yurii',
    surname: 'Paraska',
    yearsOld: 27
}; 

amI.innerText = `${whoAmI.name} ${whoAmI.surname} ${whoAmI.yearsOld} years old`;

const intOhe = 'vegetarian';
const intTwo = 'filosofia';
const inthree = 'walking';

let myHobbi = ['vegetarian', 'filosofia', 'walking'];

let hobbi = document.querySelector('.veg');

//myHobbi.push('sport'); - добавляю в конець
// myHobbi.pop(); - убирает последнее слово
myHobbi.shift(); //- удаляет парвое слово в списке
myHobbi.unshift('sport');

hobbi.innerText = myHobbi;

// hobbi.innerText = myHobbi.length; //- Считает сколько есть объектов.
// hobbi.innerText = myHobbi[1]; - Если я хочу получить один из объектов.

let addNeck = document.querySelector('.neck');
addNeck.innerText = 'variable';

let addTwo = document.querySelector('.neckTwo');
addTwo.innerText = 'tips & objects'; 

const addThree = document.querySelector('.neckThree');
addThree.innerText = 'presses';

let addFour = document.querySelector('.neckFour');
let firstObject = 'tunctions';
let secondObject = 'conditions';

//addFour.innerText = firstName + '&' + secondName;

addFour.innerText = `${firstObject} & ${secondObject} & interpolations`;


function multiply(a, b) {
    var result = a * b;
    return result;
}

multiply(5, 8); 

function multiply(num1,num2) {
    var result = num1 * num2;
    return result;
  }

multiply(4,7);
multiply(20,20);
multiply(0.5,3);

function multiply(num1,num2) {
    var result = num1 * num2;
    return result;
  }

multiply(5,8);
multiply(20,20);
multiply(0.5,3);