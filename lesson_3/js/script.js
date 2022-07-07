'use strict'
{
const nameProduct = 'Laptop';
const countProduct = 15;
const categoryProduct = 'Technology';
const priceProduct = 50000;

console.log('Наименование товара: ' + nameProduct);
console.log('Общая сумма товара: ' + (countProduct * priceProduct) );
}

{
    const nameProduct = 'Phone';
    const countProduct = 31;
    const categoryProduct = 'Technology';
    const priceProduct = 25000;
    
    console.log('Наименование товара: ' + nameProduct);
    console.log('Общая сумма товара: ' + (countProduct * priceProduct) );  
}

{
    const nameProduct = prompt('Напишите наименование товара: ');
    const countProduct = Number(prompt('Количество данного товара: '));
    const categoryProduct = prompt('К какой категории относится товар: ');
    const priceProduct = Number(prompt('Цена товара: '));
    let sum = countProduct * priceProduct;

    console.log(typeof nameProduct);
    console.log(typeof countProduct);
    console.log(typeof categoryProduct);
    console.log(typeof priceProduct);
    console.log(typeof sum);

    console.log(`На складе ${countProduct} единицы товара ${nameProduct} на сумму ${sum} деревянных`);
}