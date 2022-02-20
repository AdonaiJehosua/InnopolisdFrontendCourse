'use strict';

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('Ура!');
        reject('Hooray!');
    }, 5000)
});



promise.then((result) => {
    console.log('Promise завершился успешно', result);
}).catch((result) => {
    console.log('Промис завершился неудачно :(', result);
}).finally(() => {
    console.log('Промис завершился');
});

