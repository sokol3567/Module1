'use strict'

let sign = true;
const isPrime = (number) => {
    if (number === 1) {
        sign = false;
    } else {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                sign = false;
                break;
            }  
        }
    }

    if (sign === true) {
        console.log(`Число ${number} является простым`);
    }
    if (sign === false) {
        console.log(`Число ${number} является составным`);
    }
}   
let number = Number(prompt('Введите число'));
isPrime(number);
