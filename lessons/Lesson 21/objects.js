'use strict';

const person = {
    name: 'Sergei',
    lastName: 'Ragozin',
    body: {
        height: 184,
        age: 28
    }
};

const person2 = {};
person2.name = 'Boris';

console.log(person);
console.log('Имя', person.name);
console.log('Возраст', person.body.age);

if (person2.body) {
    console.log(person2.body.age); //body - undifined, age - не существует
}
console.log(person2.body?.age?.someObj?.someObj2)