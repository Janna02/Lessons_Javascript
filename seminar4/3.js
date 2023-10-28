"use strict";

/*
Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в 
диапазоне [0, 9].
После создания массива необходимо вывести в консоль следующие значения:
1. Сумму элементов массива
2. Минимальное значение в массиве
3. Новый массив, содержащий индексы сгенерированного выше массива, в которых 
значение равно 3.
Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести 
в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
не окажется, значит нужно будет вывести пустой массив.
*/

function createRandArr(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randArr = [];
for (let i = 0; i < 5; i++) {
  randArr.push(createRandArr(0, 9));
}

console.log("Сгенерированный массив:", randArr);

let sum = randArr.reduce(function (cumulative, arrValue) {
  return cumulative + arrValue;
}, 0);
console.log("Сумма элементов массива:", sum);

let min = Math.min(...randArr);
console.log("Минимальное значение в массиве:", min);

let indexesWithThree = [];
for (let j = 0; j < randArr.length; j++) {
  if (randArr[j] === 3) {
    indexesWithThree.push(j);
  }
}
console.log(
  "Новый массив, содержащий индексы первоначального массива, в которых значение равно 3",
  indexesWithThree
);
