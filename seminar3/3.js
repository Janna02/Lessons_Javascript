"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/

let firstNum = Number(prompt`Введите первое число`);
let secondNum = Number(prompt`Введите второе число`);
let thirdNum = Number(prompt`Введите третье число`);

function maxValue(x, y, z) {
  const maxValueOfNum = Math.max(x, y, z);
  alert(
    `Максимальное значение среди чисел ${firstNum}, ${secondNum}, ${thirdNum}   : ${maxValueOfNum}`
  );
}
maxValue(firstNum, secondNum, thirdNum);
