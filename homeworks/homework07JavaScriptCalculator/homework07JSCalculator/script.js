const firstNum = prompt('Введите первое число');
if (!firstNum) {
    console.log('Первое число не указано');
} else if (Boolean(Number(firstNum)) === false) {
    console.log('Некорректный ввод чисел')
    }

const operator = prompt('Введите знак действия (+, -, /, *)');
    if (!operator) {
        console.log('Не введен знак');
} else if (operator === '+' || operator === '-' || operator === '/' || operator === '*') {}
    else {
        console.log('Программа не поддерживает такую операцию')
    }

const secondNum = prompt('Введите второе число');
if (!secondNum) {
    console.log('Второе число не указано')
} else if (Boolean(Number(secondNum)) === false) {
    console.log('Некорректный ввод чисел')
    }

let result

switch (operator) {
    case '+': result = (Number(firstNum) + Number(secondNum)); break;
    case '-': result = (Number(firstNum) - Number(secondNum)); break;
    case '*': result = (Number(firstNum) * Number(secondNum)); break;
    case '/': result = (Number(firstNum) / Number(secondNum)); break;
}

if (Boolean(Number(result)) === false) {
    console.log('Ахтунг! Аллес капут! Мы все умрем! АааааААа!')
}   else {
    console.log(result)
    }