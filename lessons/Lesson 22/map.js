'use strict';

const map = new Map();

map.set('a', 1);
map.set('b', 2);
map.set('c', 3);
map.set('d', 4);
console.log(map.get('a'));
console.log(map);

for (let [key, value] of map) {
    console.log(key, value)
};

for (let entry of map) {
    console.log(entry[0], entry[1]);
};

const obj = {

};

console.log(obj);

console.log(map.size); // посчитать количество объектов в мапе
