'use strict';
//
// let input = 'true';
//while - выполняет по условию

// while (input === 'true') {
//     input = prompt('Введите что-нибудь');
//     console.log('Цикл');
// }

// let input = prompt('Введтите что-нибудь');
// while (input === 'true') {
//     input = prompt('Введите что-нибудь');
//     console.log('Цикл');
// }

//do while - выполняет первое действие в любом случае, а дальше по условию

// do {
//     input = prompt('Введите что-нибудь');
//     console.log('Цикл do...while');
// } while (input === 'true')



//
let n = +prompt('введите количество раз')
for (let i = 0; i < n; i++) {
    console.log('Цикл', i);
}

