const productBox = document.querySelector(".demo"); // родительский элемент

// тег article используется для отключения начального блока

productData.forEach((productsData) => {
  const productEl = document.createElement(`div`); // создать тег div
  productEl.classList.add(`card`); // добавить класс

  const productImg = document.createElement(`img`); // создать фото
  productImg.classList.add(`img`); // добавить класс
  productImg.setAttribute(`alt`, productsData.alt); // добавить атрибут alt
  productImg.src = productsData.src; // переменная к фото

  const productLink = document.createElement(`a`); // создать элемент (а) для указания ссылки
  productLink.classList.add(`product_a`);
  productLink.href = productsData.href; // указать ссылку
  productLink.textContent = productsData.name; // добавить  новое описание
  productLink.setAttribute(`target`, "_blank"); // открытие ссылки в новом окне

  const productDivP = document.createElement(`div`); // создать тег div
  productEl.classList.add(`divP`); // добавить класс

  const productText = document.createElement(`p`); //создать элемент (p) для указания текста
  productText.classList.add(`product_p`); // добавить класс
  productText.textContent = productsData.option; // добавить описание

  productEl.appendChild(productImg); //добавить фото в div
  productEl.appendChild(productLink); //добавить ссылку в div
  productBox.appendChild(productEl); // добавить div в родительский элемент
  productEl.appendChild(productDivP); //добавить divP в родительский элемент
  productDivP.appendChild(productText); // добавить  (p) параграф в divP
});
