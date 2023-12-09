const productBox = document.querySelector(".showcase");
// родительский элемент

productData.forEach((Data) => {
  // const productEl_Section = document.createElement(`section`);
  // productEl_Section.classList.add(`showcase`);

  const productEl_Article = document.createElement(`article`);
  productEl_Article.classList.add(`showcase_сard`);

  const productEl_Article_Span = document.createElement(`Span`);
  productEl_Article_Span.classList.add(`colp-pict`);

  const productEl_Article_Article = document.createElement(`article`);
  productEl_Article_Article.classList.add(`colp-item`);

  const productEl_Article_Article_Img = document.createElement(`img`);
  productEl_Article_Article_Img.src = Data.src;
  productEl_Article_Article_Img.setAttribute(`alt`, Data.alt);

  const productEl_Article_Div1 = document.createElement(`div`);
  productEl_Article_Div1.classList.add(`showcase_p1`);
  const productEl_Article_Div1_P = document.createElement(`p`);
  productEl_Article_Div1_P.textContent = Data.p_1;

  const productEl_Article_Div2 = document.createElement(`div`);
  productEl_Article_Div2.classList.add(`showcase_p2`);
  const productEl_Article_Div2_P = document.createElement(`p`);
  productEl_Article_Div2_P.textContent = Data.p_2;

  const productEl_Article_Div_Price = document.createElement(`div`);
  productEl_Article_Div_Price.classList.add(`showcase_price`);
  const productEl_Article_Div_Price_P = document.createElement(`p`);
  productEl_Article_Div_Price_P.textContent = Data.p_price;

  productBox.appendChild(productEl_Article);

  // productEl_Section.appendChild(productEl_Article);

  productEl_Article.appendChild(productEl_Article_Span);

  productEl_Article_Span.appendChild(productEl_Article_Article);
  productEl_Article_Article.appendChild(productEl_Article_Article_Img);

  productEl_Article.appendChild(productEl_Article_Div1);
  productEl_Article_Div1.appendChild(productEl_Article_Div1_P);

  productEl_Article.appendChild(productEl_Article_Div2);
  productEl_Article_Div2.appendChild(productEl_Article_Div2_P);

  productEl_Article.appendChild(productEl_Article_Div_Price);
  productEl_Article_Div_Price.appendChild(productEl_Article_Div_Price_P);
});
