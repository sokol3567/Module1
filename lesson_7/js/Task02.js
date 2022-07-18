'use strcit'

const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; 
    }
    sum = Math.floor( sum / arr.length);
    console.log(`Средний чек за день: ${sum}`);
};

getAverageValue (allCashbox);