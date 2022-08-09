'use strict'

let inputNumberOne = Number(prompt('Введите первое число для диапазона: '));
console.log(inputNumberOne);

let inputNumberTwo = Number(prompt('Введите второе число для диапазона: '));
console.log(inputNumberTwo);

let min = inputNumberOne;
let max = inputNumberTwo; 
const inputAttempts = [];
let ticker;
if (min > max) {
    min = inputNumberTwo;
    max = inputNumberOne;
};

const randomNumber = Math.round(Math.random()*(max - min) + min);
console.log(randomNumber);

if (min === 50 &&  max === 100) {
    ticker = 15;
    
} else {
    ticker = Math.round((max-min + 1) * 0.3);
}
console.log(`У вас есть ${ticker} попыток угадать число!`);

for (let i = 0; i <= ticker; i++) {
    let inputAttempt = +prompt(`Угадайте число. У вас осталось ${ticker} попыток!`);
    inputAttempts.push(inputAttempt);
    if(inputAttempt === randomNumber) {
        console.log(`Правильно! Вы угадали!`);
        break;
    }
    if (inputAttempt !== randomNumber) {
        if (inputAttempts.includes(inputAttempt)) {
          console.log("Это число вы уже вводили");
          continue;
        }
        console.log("Неверно. Попробуй ещё раз!");
        ticker--;
        console.log(`Массив с набранными числами: ${inputAttempts}`);
    }

    if (ticker === 0) {
        console.log('Попытки кончились! До свидания!');
        break;
    }
};

// if (inputNumber == 0) {
// console.log('Спасибо за игру!');
// }

// while (inputNumber <= randomNumber || inputNumber >= randomNumber) {
//     if (inputNumber > randomNumber) {
//         console.log('Меньше!');
//         inputNumber = +prompt('Попробуй ещё раз');
        
//         if (Number.isNaN(inputNumber) === true) {
//             console.log('Введите число!');
//             inputNumber = +prompt('Попробуй ещё раз');
//         };

//         if (inputNumber === null) {
//             console.log('Спасибо за игру!');
//             break;
//         }
//     }

    
//     if (inputNumber < randomNumber) {
//         console.log('Больше!');
//         inputNumber = +prompt('Попробуй ещё раз');
        
//         if (inputNumber === null) {
//             console.log('Спасибо за игру!');
//             break;
//         }

//         if (Number.isNaN(inputNumber) === true) {
//             console.log('Введите число!');
//         }
//     }

//     if (inputNumber === null) {
//         console.log('Спасибо за игру!');
//         break;
//     }

//     if (inputNumber === randomNumber) {
//         console.log('Правильно!');
//         break;
//     }
// };
