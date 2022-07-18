'use strict'

const allСashbox = [
    [12, 4500], 
    [7, 3210], 
    [4, 650], 
    [3, 1250], 
    [9, 7830], 
    [1, 990], 
    [6, 13900], 
    [1, 370]
  ];

  /*
    Первая цифра - количество товара в чеке;
    Вторая - общая сумма;
    Необходимо посчитать среднюю стоимость одного товара в магазине;  
  */

    const getAveragePriceGoods = (arr) => {
        const newArr = [...allСashbox];
        let sum = 0;
        for (let i = 0; i < newArr.length; i++){
            let result = newArr[i];
            const [ x, y ] = result;
            let pricePerItem = Math.floor(y / x); 
            sum += pricePerItem
        }
        sum = Math.floor( sum / newArr.length);
        let res = (`Средняя стоимость одного товара в магазине: ${sum}`)
        return res
    }
    console.log('---------Дополнительное задание 4---------');
    console.log(getAveragePriceGoods(allСashbox));

