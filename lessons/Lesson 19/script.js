const num = 5;
const str1 = 'I\'m' + num + 'ikfgh'; //чувствителен к апострофам в тексте, можно экранировать с помощь \
const str2 = "I'm"; //лучше не использовать из-за норм написания кода
const str3 = `Строка в ${1 + 2} кавычках с обратным ${(num + num)} наклоном`; //можно переносить в переделах кавычек, можем не только писать контент, но и переменные

console.log(str3);
console.log(str1);
// обратный слэш - символ специального символа :-)

const str4 = 'Hello\n'.substring(2, 3);

console.log(str4, str4[1]);
console.log('Строка'.includes('рокаrg')); //найти заданное в строке
console.log('Строка'.startsWith('Ст')); //чувствительно к регистру
console.log('Строка'.endsWith('ка'));
console.log('Строка'.endsWith('ка'));

console.log('           А роза упала на лапу Азора       '.trim()) //убирает пробелы  начала и конца
console.log('           А роза упала на лапу Азора       '.replace('А р', 'Р а').trim())
console.log('           А роза упала на лапу Азора       '.replaceAll('А', 'а').trim())

const name = prompt('Введите Ваше имя', 'Сергей');
console.log(name);