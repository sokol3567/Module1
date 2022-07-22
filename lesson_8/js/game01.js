'use strict'

const randomNumber = Math.round(Math.random()*100);
console.log(randomNumber);

let inputNumber = Number(prompt('Угадай число от 0 до 100: '));

if (inputNumber == 0) {
console.log('Спасибо за игру!');
}

while (inputNumber <= randomNumber || inputNumber >= randomNumber) {
    if (inputNumber > randomNumber) {
        console.log('Меньше!');
        inputNumber = +prompt('Попробуй ещё раз');
        
        if (Number.isNaN(inputNumber) === true) {
            console.log('Введите число!');
            inputNumber = +prompt('Попробуй ещё раз');
        };

        if (inputNumber === null) {
            console.log('Спасибо за игру!');
            break;
        }
    }

    
    if (inputNumber < randomNumber) {
        console.log('Больше!');
        inputNumber = +prompt('Попробуй ещё раз');
        
        if (inputNumber === null) {
            console.log('Спасибо за игру!');
            break;
        }

        if (Number.isNaN(inputNumber) === true) {
            console.log('Введите число!');
        }
    }

    if (inputNumber === null) {
        console.log('Спасибо за игру!');
        break;
    }

    if (inputNumber === randomNumber) {
        console.log('Правильно!');
        break;
    }
};

