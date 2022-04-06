let inputOne = document.querySelector('.input-one');
let inputTwo = document.querySelector('.input-two');

let plusButton = document.querySelector('.plus');
let minusButton = document.querySelector('.minus');
let divideButton = document.querySelector('.divide');
let multiplyBotton = document.querySelector('.multiply');

let clearButton = document.querySelector('.clear');

let resultText = document.querySelector('.result');

clearButton.addEventListener('click', function() {
    resultText.innerText = '';
    inputOne.value = '';
    inputTwo.value = '';
} );

plusButton.addEventListener('click', function() {
    let numOne = parseInt(inputOne.value);
    let numTwo = parseInt(inputTwo.value);
    
    let sum = numOne + numTwo;
    
    resultText.innerText = sum;
});

minusButton.addEventListener('click', function() {
    let numOne = parseInt(inputOne.value);
    let numTwo = parseInt(inputTwo.value);
    
    let sumM = numOne - numTwo;
    
    resultText.innerText = sumM;
});

 divideButton.addEventListener('click', function() {
    let numOne = parseInt(inputOne.value);
    let numTwo = parseInt(inputTwo.value);
    
    let sumD = numOne / numTwo;

    resultText.innerText = sumD;
});

multiplyBotton.addEventListener('click', function() {
    let numOne = parseInt(inputOne.value);
    let numTwo = parseInt(inputTwo.value);
    
    let sumMU = numOne * numTwo;
    
    resultText.innerText = sumMU;
});











// let myButton = document.querySelector('.my-button');
// let myInput = document.querySelector('.my-input');
// let header = document.querySelector('.header');

// myButton.addEventListener('click', function() {
    
//     let amount = parseInt(myInput.value);
//     let VAT = 0.15;

//     header.innerText = `Сумма ндс с ${amount} cуммы будет ${amount * VAT}`;

// });

// let myButton = document.querySelector('.my-button');
// let myInput = document.querySelector('.my-input');
// let header = document.querySelector('.header');
// let mySecondInput = document.querySelector('.input-two');

// myButton.addEventListener('click', function(){

//     let inputValue = parseInt(myInput.value);

//     let secondInput = parseInt(mySecondInput.value);
    
//     header.innerText = inputValue + secondInput;

//     // header.innerText = `${secondInput} ${inputValue}`;
// }); 