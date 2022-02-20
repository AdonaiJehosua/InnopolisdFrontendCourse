'use strict'
// //
// // // window.addEventListener('scroll', (event) => {
// // //     console.log(event);
// // // });
// //
// // let previoasScrollY = 0;
// // window.addEventListener('scroll', (event) => {
// //     console.log(window.scrollY);
// //     const header = document.getElementById('header');
// //
// //     if (window.scrollY > previoasScrollY && window.scrollY > 50) {
// //         header.style.display = 'none';
// //     } else {
// //
// //     if (window.scrollY < previoasScrollY) {
// //         header.style.display = '';
// //     }}
// //
// //     previoasScrollY = window.scrollY;
// // });
// //
// // //     header.style.display = '';
// // // });
// //
// //
// // // const header = document.getElementById('header');
// // // console.log({header})
// //
// //     // if (window.scrollY > 50) {
// //     //     header.style.display = 'none';
// //     //
// //     //     return;
// //     // }
//
// const square1 = document.querySelector('.square-1');
// const square2 = document.querySelector('.square-2');
// const square3 = document.querySelector('.square-3');
//
// square1.addEventListener('click', () => {
//     console.log('square-1 click погружение')
// }, true);
//
// square2.addEventListener('click', () => {
//     console.log('square-2 click погружение')
// }, true);
//
// square3.addEventListener('click', () => {
//     console.log('square-3 click погружение')
// }, true);
//
// document.addEventListener('click', () => {
//     console.log('Click anywhere погружение')
// }, true);
//
//
// square1.addEventListener('click', () => {
//     console.log('square-1 click всплытие')
// });
//
// square2.addEventListener('click', () => {
//     console.log('square-2 click всплытие')
// });
//
// square3.addEventListener('click', () => {
//     console.log('square-3 click всплытие')
// });
//
// document.addEventListener('click', () => {
//     console.log('Click anywhere всплытие')
// });

const button = document.querySelector('.button');
    button.addEventListener('click', (event) => {
        console.log(event);
        event.preventDefault();
    })

const input = document.querySelector('[name=input]');
    // console.log({input});

    input.addEventListener('input', inputHandler);
    input.addEventListener('input', (event) => {
        console.log('Анонимная функция');
    })

    input.removeEventListener('input', inputHandler);

    function inputHandler(event) {
        console.log(event.target.value);
        if (event.target.value === 'red') {
            input.style.border = '1px solid green';
            event.target.value = 'green';
        }
    }

//     window.addEventListener('mousedown', (event) => {
//         console.log(event.offsetX, event.offsetY);
//     })
//
// window.addEventListener('mouseup', (event) => {
//     console.log(event.offsetX, event.offsetY);
// })