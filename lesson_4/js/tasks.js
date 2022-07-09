'use strict'

// Ex.2

const rain = Math.round(Math.random());
console.log(rain);

if (rain === 1) {
    console.log('Пошёл дождь. Возьмите зонт!')
 } 
//else {
//     console.log('Дождя нет')
// }
if (rain === 0) {
    console.log('Дождя нет')
}

// Ex.3

const markMath = Number(prompt('Введите кол-во баллов по математике: '));
const markRus = Number(prompt('Введите кол-во баллов по русскому языку: '));
const markInfo = Number(prompt('Введите кол-во баллов по информатике: '));

console.log(`Введите кол-во баллов по математике: ${markMath}`);
console.log(`Введите кол-во баллов по русскому языку: ${markRus}`);
console.log(`Введите кол-во баллов по информатике: ${markInfo}`);

let sum = markInfo + markRus + markMath;
if (sum >= 265) {
    console.log('Поздравляю, вы поступиили на бюджет!')
} else {
    console.log('Не растраивайтесь, повезёт в другом!')
}

// Ex.4

const getCash = Number(prompt('Сколько денег вы хотите снять?'));

if (getCash % 100 === 0) {
    console.log('Мы сможем выдать вам данную сумму!')
} else {
    console.log('Извините, мы вынуждены отказать вам в выдаче данной суммы!')
}


