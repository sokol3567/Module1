'use strict'

const names= [
    'Noah',
    'Liam',
    'Mason',
    'Jacob',
    'Robot',
    'William',
    'Ethan',
    'Michael',
    'Alexander'
];

const addPrefix = (arr, prefix) => {
    const newNames = [];
    for (let i = 0; i < arr.length; i++) {
        newNames[i] = `${prefix} ${arr[i]}`;
    }
    return newNames;
    // console.log(newNames);
};


console.log(addPrefix(names, 'Mr'));