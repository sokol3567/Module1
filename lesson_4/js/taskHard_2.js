'use strict'

const peopleIncome = Number(prompt('Напишите свой доход:'));
let nalog;

if (peopleIncome <= 15000 && userIncome > 0){
    nalog = peopleIncome * 0.13;
    console.log(`Сумма налога: ${nalog}`);
}
if (peopleIncome > 15000 && peopleIncome <= 50000) {
    nalog = (peopleIncome - 15000) * 0.2;
    console.log(`Сумма налога: ${nalog}`); 
}
if (peopleIncome > 50000){
    nalog = (peopleIncome - 50000) * 0.3;
    console.log(`Сумма налога: ${nalog}`); 
} else {
    console.log('Налогом не облагается!')
}