'use strict';

// function recursion() {
//     recursion();
// }
//
// recursion();

// function multiply(a, b) {
//     return a * b;
// }
//
// function printSquare(x) {
//     const s = multiply(x, x);
//
//     console.log(s);
// }
//
// printSquare(5);


// let i = 0;
// function foo() {
//     i++;
//     const bar = 'Какая-то строчка';
//     foo();
// }
//
// try {
//     foo();
// } catch (e) {
//     console.log(i);
// }


function factorial(n) {
    if (n ===1) {
        return 1;
    }
    return n * factorial(n - 1);
}

const result = factorial(5);
console.log(result)