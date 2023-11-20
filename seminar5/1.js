"use strict";

/*
Дан объект numbers. 
Необходимо в консоль вывести все значения объекта, которые больше или равны 3.
*/

const numbers = {
  key1: 12,
  key2: 2,
  key3: 4,
  key4: 1,
  key5: -244,
  key6: 0,
  key7: 7,
};

function x() {
  for (let key in numbers) {
    if (numbers[key] >= 3) {
      console.log(
        `Ключ ${key} Имеет значение ${numbers[key]}, что больше или равно 3`
      );
    }
  }
}

x([numbers]);
