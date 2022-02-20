'use strict';
//
//  const sayHi2 = function () {
//      console.log('Hwello2!');
//  }
//
//  const sayHi3 = () => {
//      console.log('Hello3!');
//  }
//
//  // IIFE
// (function () {
//     console.log('IIFE');
// })()
//
//  sayHi2();
//  sayHi3();
//
//  let name = 'Сергей';
//  function closure() {
//      // let name = 'Sergei';
//      console.log(name);
//
//
//
//  }
//
//  closure();


 function createCounter() {
     let counter = 0;

     function add() {
         return ++counter;
     }
     return add;
 }

 const counter = createCounter();

 console.log(counter());
 console.log(counter());
 console.log(counter());
 console.log(counter());
 console.log(counter());

// let func;
// let i;
//  for (i = 0; i < 10; i++) {
//      if (i === 5) {
//          func = function () {
//              console.log(i);
//          }
//
//      }
//  }
//
//  console.log('Счетчик', i);
//  func();