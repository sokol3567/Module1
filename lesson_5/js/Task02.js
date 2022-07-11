'use strict'

//+ string.substring(1).toLowerCase();
const getString = (str) => {
    let stroke = str[0].toUpperCase() + str.substring(1).toLowerCase();
    return stroke;
}

console.log(getString('всем Привет!'));