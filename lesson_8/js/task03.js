'use strict'

const getArrayRandomNumber = (count, n, m, optional) => {
    let array = [];
    let min = Math.abs(n);
    let max = Math.abs(m); 
    
    if (min > max) {
        min = m;
        max = n;
    }

    for (let i = 0; i < count; i++) {
        array[i] = Math.round(Math.random() * (max-min) + min);
    }
    console.log(`------- Массив случайных чисел -------`);
    console.log(array);

   const result = array.filter((item) => {
        if (optional === 'even'){
            return item % 2 === 0; 
        }

        if (optional === 'odd') {
            return !(item % 2 === 0);
        }
    });
    console.log(`------- Отобранный массив ------`);
   return result;
};
    //     if (optional === 'even') {
    //         if (!(arrayResult[i] % 2 === 0)) {
    //             arrayResult.push(arrayResult[i]);
    //         }
    //     }

    //     if (optional === 'odd') {
    //         if (arrayResult[i] % 2 === 0) {
    //             arrayResult.push(arrayResult[i]);
    //         }
        
    // }

    

console.log(getArrayRandomNumber(5, 3, 9, 'odd'));