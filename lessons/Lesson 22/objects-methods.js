'use strict';

const person = {
    name: 'Sergei',
    lastName: 'Ragozin',
    age: 28,
    height: 184,
    weight: 70
};

const personBase = {
    user: true,
    name: 'Boris'
}

const personCopy = Object.assign(personBase, person) // копирование объекта, если поставить таргетом пустой объект {} - произойдет копирование

console.log(personCopy);



const values = Object.values(person).forEach((value) => {
    console.log(value);
});


const entries = Object.entries(person).forEach(([key, value]) => {
    console.log('Ключ ', key, 'Значение ', value);
});

