'use strict';
// hoisting
// console.log(x);
//
// var x = 'qwe';
//
//
// console.log(y);
//
// let y = 'qwe';
//sayHi();
// Function declaration
function sayHi() {
    console.log('Hello');
}
//function exprassion
const sayHi2 = function () {
    console.log('Hello 2');
}

//const sayHi3 = () => {
   // console.log('Hello 3');
//}

//IIFE - Inmediately Invoked Function Expression
//(function(name) {
    //console.log('IIFE', name);
//})('Sergei')

sayHi();
sayHi2();
//sayHi3();

//let name = "Сергей";
//function closure() {
    // let name = 'Sergei';
   // console.log(name);
//}

//closure();



// function createCounter() {
//     let counter = 0;
//
//     function add() {
//         return ++counter;
//     }
//
//     return add;
// }
//
// const counter = createCounter();
// console.log(counter());
// console.log(counter());


//let func;
// let i;
//for (let i = 0; i < 10; i++) {
   // if (i === 5) {
     //   func = function () {
      //      console.log(i);
     //   }
   // }
//}

// console.log('Счетчик', i);
//func();


//let variable = 'asd';

//if (true) {
   // let variable2 = 'asd';
   // var variable3 = 'var3';
//}

//console.log(variable);
//console.log(variable3);
//console.log(variable2);
