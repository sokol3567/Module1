'use strict'

const getRuble = (euro) => {
    let dollar = euro / 1.2;
    let ruble = dollar * 73;
    return ruble;
}

const result = getRuble(150);

console.log(`Ваша покупка: ${result}`)