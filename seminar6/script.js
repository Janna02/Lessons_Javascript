"use strict";
``;

// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
/* const block1 = document.getElementById(`super_link`);
console.log(block1); */
// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
/* const block2 = document.querySelectorAll(".card-link");
block2.forEach((block2) => {
  block2.textContent = "ссылка";
}); */
// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
/* const block3 = document.querySelectorAll(".card-body .card-link");
console.log(block3); */
// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.
/* const block4 = document.querySelector('[data-number="50"]');
console.log(block4); */
// 5. Выведите содержимое тега title в консоль.
/* const block5 = document.querySelector(`title`);
console.log(block5); */
// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
/* const block6 = document.querySelector(".card-title").parentNode;
console.log(block6); */
// Создайте тег p`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".
/* const block7 = document.createElement("p");
block7.textContent = "Привет";
document.querySelector(".card").prepend(block7); */
// 8. Удалите тег h6 на странице.
/* document.querySelector("h6").remove(); */
