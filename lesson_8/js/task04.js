'use strict'

const getLeapYear = (n, m) => {
    const years = [];
    let min = Math.abs(n);
    let max = Math.abs(m); 
    
    if (min > max) {
        min = m;
        max = n;
    }

    for (let i = min; i <= max; i++) {
        years.push(i);
    }

    let yearsSort = [];

    years.forEach((item) => {
        if (LeapYear(item)){
            yearsSort.push(item);
        }
    });

    return yearsSort;
};

const LeapYear = (year) => {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
        return year;
    } else {
        return false;
    }
};

console.log(getLeapYear(2001, 2022));