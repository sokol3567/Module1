'use strict'

const calculate = (sum, count, promocode) => {
    let cost = sum;
    if (count > 10) {
       cost = cost - cost * 0.03; 
    }

    if (sum > 30000) {
        cost = cost - (cost - 30000) * 0.15; 
    }

    if (promocode === 'METHED') {   
        cost = cost - cost * 0.1;
    }

    if (promocode === 'G3H2Z1' && cost > 2000) {
        cost = cost - 500;
    }

    return cost;
};

console.log(`Стоимость корзины с учётом скидок: ${calculate(35000, 11, 'G3H2Z1')} рублей`);
