'use strict'

//Ex.1

{
    const nameProduct = prompt('Напишите наименование товара: ');
    const countProduct = Number(prompt('Количество данного товара: '));
    const categoryProduct = prompt('К какой категории относится товар: ');
    const priceProduct = Number(prompt('Цена товара: '));
    let sum = countProduct * priceProduct;

    if (countProduct > 0  && priceProduct > 0) {
        console.log(`На складе ${countProduct} единицы товара ${nameProduct} на сумму ${sum} деревянных`);
    } else {
        console.log('Вы ввели некорректные данные');
    }
    // console.log(typeof nameProduct);
    // console.log(typeof countProduct);
    // console.log(typeof categoryProduct);
    // console.log(typeof priceProduct);
    // console.log(typeof sum);
}