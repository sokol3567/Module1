'use strict'

const getStringReverse = (str) => {
    let stroke = str.split('').reverse().join('');
    return stroke;
}

console.log(getStringReverse('Оля и Коля'));