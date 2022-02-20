// || - оператор "или"
// && - и
// ! - не

const a = '';
const b = null;
const result =  a || b;
console.log(result);

const result2 = a && b;
console.log(result2);

// == - сравнивает значения двух переменных, но не сравнивает их типы, '1' = 1
// === - сравнивает с типами
// != - без сравнения типов, сравнивает неравенстова
// !== - сравнения неравенства с типами

const name = prompt('Введите Ваше имя');
if (!name) {
    console.log('Вы ничего не ввели');
} else if (name === 'Сергей'  || name === 'Sergei') {
    console.log('Вы Сергей')
} else {
    console.log('Вы не Сергей')
}

const lastName = prompt('Ваша Фамилия');
if (!lastName) {
    console.log('У Вас нет фамилии');
} else if ((name === 'Сергей' || name === 'Sergei') && (lastName === 'Рагозин' || lastName === 'Ragozin')) {
    console.log('Вы Сережа Рагозин!')
}

const horoscope = prompt('Введите знак зодиака');

switch (horoscope) {
    case 'Овен': console.log('вы овен. Ваша характеристика'); break;
    case 'Телец': console.log('Вы телецю Ваша характеристика'); break;
    case 'Лев': console.log('Вы телецю Ваша характеристика'); break;
    case 'Скорпион': console.log('Вы телецю Ваша характеристика'); break;
    case 'Рыбы': console.log('Вы телецю Ваша характеристика'); break;
    case 'Рак': console.log('Вы телецю Ваша характеристика'); break;
    case 'Близнецы': console.log('Вы телецю Ваша характеристика'); break;
    case 'Весы': console.log('Вы телецю Ваша характеристика'); break;
    case 'Козерог': {
        console.log('вы козерог');
        console.log('вы полный козерог');
    } break;
    default: console.log('Вы ни один из перечисленных')
}
