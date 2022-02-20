'use strict';
let name = 'Сергей';
function writeHelloWorld() {
    console.log('Hello world!');
}

function sayHi(name, lastName= 'No Last Name') {
    const string = `Hello, ${name} ${lastName}`;
    console.log(string);

    return `Return: ${string}`;
}


// writeHelloWorld();

// let lastName = 'Рагозин';
sayHi('Sergei', 'Ragozin');
sayHi(name);
let result = sayHi(name);
console.log(result);
