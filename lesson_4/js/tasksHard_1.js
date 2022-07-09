'use strict'

const userIncome = Number(prompt('Напишите свой доход:'));
let tax;

switch (true) {
    case (userIncome <= 15000 && userIncome > 0):
        tax = userIncome * 0.13;
        console.log(`Сумма налога: ${tax}`);
        break;
    case (userIncome > 15000 && userIncome <= 50000):
        tax = userIncome * 0.2;
        console.log(`Сумма налога: ${tax}`);
        break;
    case (userIncome > 50000):
        tax = userIncome * 0.3;
        console.log(`Сумма налога: ${tax}`);
        break;
    default: 
        console.log('Налогом не облагается!')
}

// if (userIncome <= 15000 && userIncome > 0){
//     tax = userIncome * 0.13;
//     console.log(`Сумма налога: ${tax}`);
// }
// if (userIncome > 15000 && userIncome <= 50000) {
//     tax = userIncome * 0.2;
//     console.log(`Сумма налога: ${tax}`); 
// }
// if (userIncome > 50000){
//     tax = userIncome * 0.3;
//     console.log(`Сумма налога: ${tax}`); 
// }