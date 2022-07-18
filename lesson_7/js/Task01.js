'use strict'

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов']

const filter = (arr1, arr2) => {
    const sucsessStudents = allStudents.filter((item) => 
        !failedStudents.includes(item));  
    console.log(sucsessStudents);
}

filter(allStudents, failedStudents);
