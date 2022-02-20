'use strict';

// Фамилии всех пользователей
console.log('------------------')
console.log('Пункт №2')
console.log('------------------')
fetch('https://reqres.in/api/users?per_page=12')
    .then((response) => response.json())
    .then((body) => {
        body?.data.forEach((item) => {
            console.log(item?.last_name);
        });
        console.log('------------------')
        console.log('Пункт №3')
        console.log('------------------')
    });

// Данные всех пользователей, фамилия которых начинается на F
fetch('https://reqres.in/api/users?per_page=12')
    .then((response) => response.json())
    .then((body) => {
        const lastNameF = body?.data?.filter((item) => {
            return item?.last_name[0] === "F";
        })
        console.log(lastNameF);
        console.log('------------------')
        console.log('Пункт №4');
        console.log('------------------')
    });

// Предложение и список имен с фамилиями
fetch('https://reqres.in/api/users?per_page=12')
    .then((response) => response.json())
    .then((body) => {
        const userList = body?.data?.reduce((acc, item) => {
            acc = acc + item.first_name + ' ' + item.last_name + ', ';

            return acc;
        }, []);
        console.log('Наша база содержит данные следующих пользователей: ', userList);
        console.log('------------------')
        console.log('Пункт №5');
        console.log('------------------')
    });

//Названия ключей в объекте пользователя
fetch('https://reqres.in/api/users?per_page=12')
    .then((response) => response.json())
    .then((body) => {
        Object.entries(body?.data[0]).forEach(([key]) => {
            console.log('Ключ: ', key);
        })
    })