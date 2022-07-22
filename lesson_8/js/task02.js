'use strict'

const getArrayRandomNumberTwo = (count, n, m) => {
    let array = [];
    let min = n;
    let max = m; 
    
    if (min > max) {
        min = m;
        max = n;
    }

    for (let i = 0; i < count; i++) {
        array[i] = Math.round(Math.random() * (max-min) + min);
        
    }
    return array;
};

console.log(getArrayRandomNumberTwo(5,-3,-9));