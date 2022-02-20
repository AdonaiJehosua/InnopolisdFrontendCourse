'use strict';

const arr = [];

const arr2 = ['яблоко', 'банан', 'апельсин'];

// const elem = arr2[1];
// const lastElem = arr2[arr2.length - 1];
// console.log(elem);
// console.log(lastElem);

for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
}

// forEach - нельзя прервать
arr2.forEach((item, index) => {
    console.log(item, index);
});

arr2.forEach(function(item, index) {
    console.log(item, index);
});

// добавить в конец

arr2.push('киви');


// вынуть с конца
const lastElem = arr2.pop();
console.log(arr2, lastElem);


// удалить с начала
const firstElem = arr2.shift();
console.log(arr2, firstElem);

// добавить в начало
arr2.unshift('ананас');
console.log(arr2);

//найти индекс элемента
const indexOfOrange = arr2.indexOf('апельсин');
console.log(indexOfOrange);

//найти элемент
const findElem = arr2.find((item) => {
    return item[0] === 'б' && item[1] === 'а';
});

console.log(findElem);


// найти индекс
const findIndex = arr2.findIndex((item) => {
    return item[0] === 'б' && item[1] === 'а';
});

console.log(findIndex);

// вырезать часть массива
// arr2.splice(0, 1);
console.log(arr2);

// возвращает копию массива - слева включительно, а справа невключительно
const arr3 = arr2.slice(1, 2);
console.log(arr3);

//

const userList = [
    {
        name: 'Sergey',
        lastName: 'Ragozin'
    },
    {
        name: 'Ivan',
        lastName: 'Petrov'
    },
    {
        name: 'Sashka',
        lastName: 'Petrov'
    },
    {
        name: 'Igor',
        lastName: 'Przhvalsky'
    }
];

const userListFiltered = userList.filter((item) => {
    return item.lastName === 'Petrov';
})

const userListFilteredShort = userList.filter(item => item.lastName === 'Petrov');

console.log(userListFiltered);
console.log(userListFilteredShort);

// мап

const userListMapped = userList.map((item, index) => {
    return {
        ...item,
        id: index
    }
});

console.log(userListMapped);


// ревьюс

const arrNumbers = [
    {
        x:5,
        y: 10
    },
    {
        x: 15,
        y: 20
    },
    {
        x: 39,
        y: 27
    }
];

// = x*y + x*y + x*y

const result = arrNumbers.reduce((acc, item) => {
    acc = acc + item.x * item.y;

    return acc;
}, 0 );

console.log(result);