'use strict';

// let input = 'true';
// // while (input === 'true') {
// //     input = prompt('Введите что-нибудь');
// //     console.log('Цикл');
// // }
//
// do {
//     input = prompt('Введите что-нибудь');
//     console.log('Цикл do ... while');
// } while (input === 'true')

let input = +prompt ('Введите количество раз');
for (let i = 0; i < 10 ; i+=10) {
    console.log('Цикл', i);

}