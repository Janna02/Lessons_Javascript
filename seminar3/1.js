"use strict";

/*
Создайте функцию которая принимает число, возводит переданное число в куб и 
возвращает полученное значение. 
Необходимо продемонстрировать вызов данной функции, с выводом результата, 
который получаем от функции, в консоль.
*/

const x = Number(prompt`Введите число, которое необходимо возвести в куб`);

function CubeConstruction(x) {
  const cube = Math.pow(x, 3);
  console.log(cube);
}

CubeConstruction(x);
