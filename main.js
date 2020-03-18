console.log('Sample JavaScript HW#1');

/*
 * #1
 *
 * Создайте переменные со значениями
 */

// имя переменной: myNum, значение: 10
var myNum = 10;
// имя переменной: myStr, значение: 'строка'
var myStr = 'строка'
// имя переменной: myBool, значение: true
var myBool = true
// имя переменной: myArr, значения: 1, 2, 3, 4, 5
var myArr = [1,2,3,4,5]
// имя переменной myObj, значения: first: 'First Name', last: 'Last Name'
var myObj = {
  first : 'First Name',
  last : 'Last Name'
}
/*
 * #2
 *
 * Отформатируйте целое число, которое хранится в переменной myNum,
 * чтобы получить результат с 2 знаками после запятой.
 * Результат сохраните в переменную decimal2.
 */
decimal2 = myNum.toFixed(2);
// decimal2
/*
 * #3
 *
 * Создайте переменную i для которой выполните префиксный
 * и постфиксный инкремент и декремент.
 * Поэкспериментируйте с результатами, выводя их в консоль.
 */
var i = 7;
console.log(i);
console.log(++i);
console.log(i);
console.log(i++);
console.log(i);
console.log(--i);
console.log(i);
console.log(i--);
console.log(i);
// i
/*
 * #4
 *
 * Создайте новую переменную myTest и присвойте ей значение 20.
 * Выполните присваивание с операцией, используя операторы: +=, –=, *=, /=, %=.
 * Результаты присваиваются в myTest, затем выводятся в консоль.
 * В вычислениях можно использовать объявленную ранее переменную myNum и/или числа.
 */

// myTest
var myTest = 20;
console.log(myTest);
// +=
myTest += myNum
console.log(myTest);
// –=
myTest -= myNum
console.log(myTest);
// *=
myTest *= myNum
console.log(myTest);
// /=
myTest /= myNum
console.log(myTest);
// %=
myTest %= myNum
console.log(myTest);
/*
 * #5
 *
 * Используя свойства и методы объекта Math, присвойте переменным и отобразите в консоли
 */

// константа Pi → myPi
console.log(myPi = Math.PI);
// округленное значение числа 89.279 → myRound
console.log(myRound = Math.round( 89.279));
// случайное число между 0..10 → myRandom
console.log(myRandom = Math.random()*10);
// 3 в 5 степени → myPow
console.log(myPow = Math.pow(3,5));
/*
 * #6
 *
 * Создайте объект с именем strObj.
 * Присвойте ключу str строку текста "Мама мыла раму, рама мыла маму", ключу length установите длину этой строки.
 */

// Мама мыла раму, рама мыла маму
var strObj = {
  str : 'Мама мыла раму, рама мыла маму',
  length : 0
}
// console.log(strObj);
strObj.length = strObj.str.length;
// console.log(length);

// strObj

/*
 * #7
 *
 * Проверьте наличие текста 'рама' в поле str объекта strObj (см.п.6),
 * результат сохраните в переменную isRamaPos и выведите ее в консоль.
 */
isRamaPos = strObj.str.indexOf('рама');
console.log(isRamaPos);
if (isRamaPos > -1) console.log('текст "рама" в поле str объекта strObj найден');
if (isRamaPos === -1) console.log('текст "рама" в поле str объекта strObj не найден');
// isRamaPos

/*
 * #8
 *
 * Выполните переименование подстроки в строке.
 * В качестве исходной строки используйте значение поля str объекта strObj (см.п.6), результат сохраните в переменную strReplace и отобразите в консоли.
 * Исходная строка: 'Мама мыла раму, рама мыла маму'
 *       Результат: 'Мама моет раму, Рама держит маму'
 */
strReplace = strObj.str.replace('Мама мыла','Мама моет')
strReplace = strReplace.replace('рама мыла','Рама держит')
console.log(strReplace)
// strReplace

/*
 * #9
 *
 * Преобразуйте любую строку в верхний, затем в нижний регистры, результат отобразите в консоли.
 */
anyText ='Преобразуйте любую строку в верхний, затем в нижний регистры, результат отобразите в консоли.'
anyText = anyText.toUpperCase();
console.log(anyText);
anyText = anyText.toLowerCase();
console.log(anyText);