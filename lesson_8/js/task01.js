'use strcit'

const getArrayRandomNumber = (count) => {
    let array = [];
    for (let i = 0; i < count; i++) {
        array[i] = Math.ceil(Math.random() * 100);
    }
    return array;
};

console.log(getArrayRandomNumber(5));